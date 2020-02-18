import React, { useMemo, useState, useCallback } from 'react';
import { Slate, Editable, withReact, useSlate } from 'slate-react';
import { createEditor } from 'slate';
import { bold } from 'react-icons-kit/feather/bold'
import { italic } from 'react-icons-kit/feather/italic'
import { underline } from 'react-icons-kit/feather/underline'
import { code } from 'react-icons-kit/feather/code'

import { Leaf, CodeElement, DefaultElement, KeyHandler, FormatToolbar, CustomEditor, MarkButton } from './index';

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
                <MarkButton format="bold" icon={bold} editor={editor} />
                <MarkButton format="italic" icon={italic} editor={editor} />
                <MarkButton format="underline" icon={underline} editor={editor} />
                <MarkButton format="code" icon={code} editor={editor} />
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