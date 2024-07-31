import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

function Editor(props) {
    const { language, displayName, value, onChange } = props;

    function handleEditorChange(value, event) {
        onChange(value);
    }


    return (
        <div className="editor-container ">
            <div className="editor-title">
                {displayName}

            </div>
            <MonacoEditor
                className='code-editor-wrapper'
                language={language}
                value={value}
                onChange={handleEditorChange}
                options={{
                    selectOnLineNumbers: true,
                    roundedSelection: false,
                    readOnly: false,
                    cursorStyle: 'line',
                    automaticLayout: true,
                }}
            />
        </div>
    );
}

export default Editor;
