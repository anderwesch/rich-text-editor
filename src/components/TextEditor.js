import React, { useMemo, useState, useCallback } from 'react';
import { Slate, Editable, withReact, useSlate } from 'slate-react';
import { createEditor } from 'slate';
import { ic_format_bold as bold } from 'react-icons-kit/md/ic_format_bold';
import { ic_format_italic as italic } from 'react-icons-kit/md/ic_format_italic';
import { ic_format_underlined as underline } from 'react-icons-kit/md/ic_format_underlined';
import { ic_code as code } from 'react-icons-kit/md/ic_code';
import { ic_format_quote as blockQuote } from 'react-icons-kit/md/ic_format_quote';
import { ic_format_list_numbered as numberedList } from 'react-icons-kit/md/ic_format_list_numbered';
import { ic_format_list_bulleted as bulletedList } from 'react-icons-kit/md/ic_format_list_bulleted';

import { Leaf, DefaultElement, KeyHandler, FormatToolbar, MarkButton, BlockButton } from './index';

export default function TextEditor() {

    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState(initialValue)
    const renderElement = useCallback(props => {
        return <DefaultElement {...props} />
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
                <BlockButton format="block-quote" icon={blockQuote} editor={editor} />
                <BlockButton format="numbered-list" icon={numberedList} editor={editor} />
                <BlockButton format="bulleted-list" icon={bulletedList} editor={editor} />
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

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself!' }],
  },
]