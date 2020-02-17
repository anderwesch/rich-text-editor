import * as CustomEditor from './CustomEditor'

export default function KeyHandler(event, editor) {

    if(!event.ctrlKey) { 
        return 
    }

    event.preventDefault()

    switch(event.key) {
        case 'b': {
            CustomEditor.toggleBoldMark(editor)
            break
        }
        case 'i': {
            CustomEditor.toggleItalicMark(editor)
            break
        }

        /*case 'Dead':
            const [match] = Editor.nodes(editor, {
                match: n => n.type === 'code',
            })
            Transforms.setNodes(
                editor,
                { type: match ? 'paragraph' : 'code' },
                { match: n => Editor.isBlock(editor, n) }
            )
            break
        */
    }

} 