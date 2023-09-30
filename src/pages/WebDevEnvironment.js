import React, { useRef, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import CodeMirror from 'codemirror';

// Language Modes
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';



// Styles & Themes
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/cobalt.css';
import 'codemirror/theme/colorforth.css';
import 'codemirror/theme/icecoder.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/base16-light.css';
import './webdevenviroment.css';


const WebDevEnvironment = () => {
  const textAreaRef = useRef(null);
  const inputTextAreaRef = useRef(null);
  const outputTextAreaRef = useRef(null);
  const inputCodeMirrorRef = useRef(null);
  const outputCodeMirrorRef = useRef(null);
  const codeEditorRef = useRef(null);
  const [theme, setTheme] = useState('dracula');

  const [htmlEditorSize, setHtmlEditorSize] = useState('maximized');
  const [cssEditorSize, setCssEditorSize] = useState('maximized');
  const [jsEditorSize, setJsEditorSize] = useState('maximized');


  useEffect(() => {
    if (textAreaRef.current && !codeEditorRef.current) {
      codeEditorRef.current = CodeMirror.fromTextArea(textAreaRef.current, {
        lineNumbers: true,
        lineWrapping: true,
        mode: 'xml',
        theme: theme
      });
    } else if (codeEditorRef.current) {

      codeEditorRef.current.setOption('theme', theme);
    }

    if (inputTextAreaRef.current && !inputCodeMirrorRef.current) {
      inputCodeMirrorRef.current = CodeMirror.fromTextArea(inputTextAreaRef.current, {
        lineNumbers: true,
        mode: 'css',
        lineWrapping: true,
        theme: theme

      });
    } else if (inputCodeMirrorRef.current) {
      inputCodeMirrorRef.current.setOption('theme', theme);
    }

    if (outputTextAreaRef.current && !outputCodeMirrorRef.current) {
      outputCodeMirrorRef.current = CodeMirror.fromTextArea(outputTextAreaRef.current, {
        lineNumbers: true,
        mode: 'javascript',
        lineWrapping: true,
        theme: theme,

      });
    } else if (outputCodeMirrorRef.current) {
      outputCodeMirrorRef.current.setOption('theme', theme);
    }
    codeEditorRef.current?.on('change', updatePreview);
    inputCodeMirrorRef.current?.on('change', updatePreview);
    outputCodeMirrorRef.current?.on('change', updatePreview);

    return () => {
      codeEditorRef.current?.off('change', updatePreview);
      inputCodeMirrorRef.current?.off('change', updatePreview);
      outputCodeMirrorRef.current?.off('change', updatePreview);
    };


  }, [theme]);



  const toggleHtmlEditorSize = () => {
    setHtmlEditorSize(htmlEditorSize === 'maximized' ? 'minimized' : 'maximized');
  };

  const toggleCssEditorSize = () => {
    setCssEditorSize(cssEditorSize === 'maximized' ? 'minimized' : 'maximized');
  };

  const toggleJsEditorSize = () => {
    setJsEditorSize(jsEditorSize === 'maximized' ? 'minimized' : 'maximized');
  };


  const updatePreview = () => {
    const htmlContent = codeEditorRef.current?.getValue() || '';
    const cssContent = inputCodeMirrorRef.current?.getValue() || '';
    const jsContent = outputCodeMirrorRef.current?.getValue() || '';
  
    const combinedContent = `
    <html>
    <head>
      <style>${cssContent}</style>
      <style>
        /* Style for the fullscreen toggle button inside the iframe */
        #fullscreenToggle {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 1000; /* Make sure the button is above other content */
        }
      </style>
    </head>
    <body>
      ${htmlContent}
      <button id="fullscreenToggle">Toggle Fullscreen</button>
      <script>
        document.getElementById('fullscreenToggle').addEventListener('click', function() {
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            document.documentElement.requestFullscreen();
          }
        });
      </script>
      <script>${jsContent}</script>
    </body>
    </html>
    `;
  
    const iframe = document.getElementById("livePreview");
    const documentIframe = iframe.contentWindow.document;
    documentIframe.open();
    documentIframe.write(combinedContent);
    documentIframe.close();
  };
  


  const handleSubmit = async () => {
    const code = codeEditorRef.current.getValue();

    try {
      const response = await fetch('http://localhost:5000/runCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });

      const data = await response.json();
      outputCodeMirrorRef.current.setValue(data.output || data.message);
    } catch (error) {
      console.error("There was an error submitting the code:", error);
    }
  };

  return (
    <div>
      <NavBar />

      <h1><a className='head' href="/">LiveCodeSync</a></h1>
      <select onChange={(e) => setTheme(e.target.value)} className='dropdowntheme' id='web'>
        <option value="dracula">Dracula</option>
        <option value="material">Material</option>
        <option value="cobalt">Cobalt</option>
        <option value="colorforth">Colorforth</option>
        <option value="icecoder">Icecoder</option>
        <option value="monokai">Monokai</option>
        <option value="base16-light">Base16 Light</option>
      </select>


      {

        <div className='code-wrapper-container'>

          <div className={`code-wrapper ${htmlEditorSize}`}>
            <h3 className='boxinfo'>HTML</h3>
            <button onClick={toggleHtmlEditorSize} aria-label={htmlEditorSize === 'maximized' ? 'Minimize HTML Editor' : 'Maximize HTML Editor'}>
              {htmlEditorSize === 'maximized' ? '-' : '+'}
            </button>
            <textarea ref={textAreaRef} id='html'></textarea>
          </div>

          <div className={`code-wrapper ${cssEditorSize}`}>
            <h3 className='boxinfo'>CSS</h3>
            <button onClick={toggleCssEditorSize} aria-label={cssEditorSize === 'maximized' ? 'Minimize CSS Editor' : 'Maximize CSS Editor'}>
              {cssEditorSize === 'maximized' ? '-' : '+'}
            </button>
            <textarea ref={inputTextAreaRef} id='css'></textarea>
          </div>

          <div className={`code-wrapper ${jsEditorSize}`}>
            <h3 className='boxinfo'>JavaScript</h3>
            <button onClick={toggleJsEditorSize} aria-label={jsEditorSize === 'maximized' ? 'Minimize JavaScript Editor' : 'Maximize JavaScript Editor'}>
              {jsEditorSize === 'maximized' ? '-' : '+'}
            </button>
            <textarea ref={outputTextAreaRef} id='javascript'></textarea>
          </div>


        </div>}

        <div className="preview-container">

            <iframe title="Live Preview" id="livePreview">
            </iframe>
          </div>
    </div>
  );
}

export default WebDevEnvironment;
