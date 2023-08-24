import React, { useRef, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import './Style.css';

const CodeCompiler = () => {
    const [output, setOutput] = useState('');
    const textAreaRef = useRef(null);
    const codeEditorRef = useRef();

    useEffect(() => {
        if (textAreaRef.current) {
            codeEditorRef.current = CodeMirror.fromTextArea(textAreaRef.current, {
                lineNumbers: true,
                mode: 'javascript',
                theme: 'dracula'
            });
        }
    }, []);

    const handleSubmit = async () => {
        const code = codeEditorRef.current.getValue();

        // Displaying the code in the output area immediately
        setOutput(code);

        try {
            const response = await fetch('http://localhost:5000/runCode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code })
            });

            const data = await response.json();
            alert(data.message);  // Alert the user with the server's response message
        } catch (error) {
            console.error("There was an error submitting the code:", error);
        }
    };

    return (
        <div>
            <NavBar/>
            <textarea ref={textAreaRef}></textarea>
            <button onClick={handleSubmit}>Run</button>
            <div>Output: {output}</div>
        </div>
    );
}

export default CodeCompiler;
