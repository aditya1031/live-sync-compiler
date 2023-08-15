import React, { useRef, useEffect } from 'react';
import NavBar from '../components/NavBar';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/mode/javascript/javascript';
import './Style.css';

const CodeComplier = () => {
    const textAreaRef = useRef(null);
    const codeEditorRef = useRef();

    useEffect(() => {
        if (textAreaRef.current) {
            codeEditorRef.current = CodeMirror.fromTextArea(textAreaRef.current, {
                lineNumbers: true,
                mode: 'javascript',
                theme: 'darcula'
            });
        }
    }, []);

    const handleSubmit = () => {
        const code = codeEditorRef.current.getValue();

        // Capture previous console.log function
        const oldLog = console.log;

        // Clear the output area first
        document.getElementById('output').textContent = '';

        // Override console.log to capture output
        console.log = (message) => {
            document.getElementById('output').textContent += message + '\n';
        };

        try {
            // Execute the code
            // WARNING: Using eval is potentially dangerous
            eval(code);
        } catch (error) {
            // If there's an error in the code, display it
            document.getElementById('output').textContent = error;
        } finally {
            // Restore original console.log function
            console.log = oldLog;
        }
    };

    return (
        <>
            <NavBar />
            <div className="code-area">
                <textarea ref={textAreaRef}></textarea>
                <button onClick={handleSubmit}>Run</button>
                <div id="output" className="output-area"></div>
            </div>
        </>
    );
}

export default CodeComplier;

