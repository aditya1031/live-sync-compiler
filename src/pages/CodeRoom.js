import React, { useRef, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import CodeMirror from 'codemirror';

// Language Modes
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';

// Styles & Themes
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/cobalt.css';
import 'codemirror/theme/colorforth.css';
import 'codemirror/theme/icecoder.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/base16-light.css';
import './coderoom.css';

const CodeRoom = () => {
    const textAreaRef = useRef(null);
    const inputTextAreaRef = useRef(null);
    const outputTextAreaRef = useRef(null);
    const inputCodeMirrorRef = useRef(null);
    const outputCodeMirrorRef = useRef(null);
    const codeEditorRef = useRef(null);
    const [language, setLanguage] = useState('python');
    const [theme, setTheme] = useState('dracula');

    useEffect(() => {
        if (textAreaRef.current && !codeEditorRef.current) {
            codeEditorRef.current = CodeMirror.fromTextArea(textAreaRef.current, {
                lineNumbers: true,
                mode: language,
                theme: theme
            });
        } else if (codeEditorRef.current) {
            codeEditorRef.current.setOption('mode', language);
            codeEditorRef.current.setOption('theme', theme);
        }

        if (inputTextAreaRef.current && !inputCodeMirrorRef.current) {
            inputCodeMirrorRef.current = CodeMirror.fromTextArea(inputTextAreaRef.current, {
                lineNumbers: true,
                mode: 'text',
                theme: theme
            });
        } else if (inputCodeMirrorRef.current) {
            inputCodeMirrorRef.current.setOption('theme', theme);
        }

        if (outputTextAreaRef.current && !outputCodeMirrorRef.current) {
            outputCodeMirrorRef.current = CodeMirror.fromTextArea(outputTextAreaRef.current, {
                lineNumbers: true,
                mode: 'text',
                theme: theme,
                readOnly: true
            });
        } else if (outputCodeMirrorRef.current) {
            outputCodeMirrorRef.current.setOption('theme', theme);
        }
        codeEditorRef.current.setSize("53vw", "26vw");
        inputCodeMirrorRef.current.setSize("19vw", "20vw");
        outputCodeMirrorRef.current.setSize("19vw", "20vw");

    }, [language, theme]);

    const handleSubmit = async () => {
        const code = codeEditorRef.current.getValue();
        const input = inputCodeMirrorRef.current.getValue();

        try {
            const response = await fetch('http://localhost:5000/runCode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code, input })
            });

            const data = await response.json();
            outputCodeMirrorRef.current.setValue(data.output || data.message);
        } catch (error) {
            console.error("There was an error submitting the code:", error);
        }
    };

    const handleReset = () => {
        if (codeEditorRef.current) {
            codeEditorRef.current.setValue('');
            inputCodeMirrorRef.current.setValue('');
        }
    };

    return (
        <div>
            <NavBar />

            <select onChange={(e) => setLanguage(e.target.value)} className='dropdownlan'>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="text/x-csrc">C</option>
                <option value="text/x-c++src">C++</option>
                <option value="text/x-java">Java</option>
                <option value="htmlmixed">HTML</option>
                <option value="css">CSS</option>
            </select>

            <select onChange={(e) => setTheme(e.target.value)} className='dropdowntheme'>
                <option value="dracula">Dracula</option>
                <option value="material">Material</option>
                <option value="cobalt">Cobalt</option>
                <option value="colorforth">Colorforth</option>
                <option value="icecoder">Icecoder</option>
                <option value="monokai">Monokai</option>
                <option value="base16-light">Base16 Light</option>
            </select>


            {< div className='coder'>
                <h3 className='boxinfor'>Code Editor</h3>
                <textarea ref={textAreaRef} className='texta' id='inputext'></textarea>
                <div className='meassage'>
                    <h3 id='boxr'>Chat</h3>
                    <textarea >Enetr your meassage here</textarea>
                </div>
                <button onClick={handleSubmit} className='runbutan'>Run</button>
                <button onClick={handleReset} className='runbutan'>Reset</button>
                <div>
                    <div className='code' id='inputr'>
                        <h3 className='boxinfor'>Input</h3>
                        <textarea ref={inputTextAreaRef} id='inupt'></textarea>


                        <div> <h3 className='boxinfor'><br />Output</h3>
                            <textarea ref={outputTextAreaRef} id='output'></textarea>
                            </div>

                    </div>


                    <div className='participant'>
                        <h3 className='boxinfor'>Code Editor</h3>
                        <div id='room'>
                            <h1 className='box'>adity</h1>
                        </div>
                    </div>
                </div>

            </div>
            }
        </div>

    );
}




export default CodeRoom
