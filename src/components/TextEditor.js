import React, { useMemo, useState, useCallback } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import Leaf from './Leaf';
import CodeElement from './Elements/CodeElement'
import DefaultElement from './Elements/DefaultElement'
import KeyHandler from './KeyHandler'

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
        <Slate editor={editor} value={value} onChange={value => setValue(value)} >
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={onKeyDown} />
        </Slate>
    )
}