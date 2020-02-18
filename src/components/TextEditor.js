import React, { useMemo, useState, useCallback } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import Icon from 'react-icons-kit';
import { bold } from 'react-icons-kit/feather/bold'
import { italic } from 'react-icons-kit/feather/italic'

import { Leaf, CodeElement, DefaultElement, KeyHandler, FormatToolbar } from './index';

export default function TextEditor() {

    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a pragraph.' }]
        }
    ])
    const renderElement = useCallback(props => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])
    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, []) 

    const onKeyDown = (event) => KeyHandler(event, editor)

    return (
        <div className="editor-wrapper">
            <FormatToolbar>
                <button className="tooltip-icon-button">
                    <Icon icon={bold} />
                </button>
                <button className="tooltip-icon-button">
                    <Icon icon={italic} />
                </button>
            </FormatToolbar>
            <Slate editor={editor} value={value} onChange={value => setValue(value)} >
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    onKeyDown={onKeyDown} />
            </Slate>
        </div>
    )
}