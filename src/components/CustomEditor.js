import React from 'react';
import { Editor, Transforms, Text } from 'slate';

// Bold Mark

export const isBoldMarkActive = (editor) => {
    const [match] = Editor.nodes(editor, {
        match: n => n.bold === true,
        universal: true,
    })

    return !! match
}

export const toggleBoldMark = (editor) => {
    const isActive = isBoldMarkActive(editor)
    Transforms.setNodes(
        editor,
        { bold: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
    )
}

// Italic Mark

export const isItalicMarkActive = (editor) => {
    const [match] = Editor.nodes(editor, {
        match: n => n.italic === true,
        universal: true,
    })

    return !! match
}

export const toggleItalicMark = (editor) => {
    const isActive = isItalicMarkActive(editor)
    Transforms.setNodes(
        editor,
        { italic: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
    )
}