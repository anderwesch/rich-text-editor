import * as CustomEditor from './CustomEditor'

export default function KeyHandler(event, editor) {

    if(!event.ctrlKey) { 
        return 
    }

    event.preventDefault()

    switch(event.key) {
        case 'b': {
            CustomEditor.toggleMark(editor, 'bold')
            break
        }
        case 'i': {
            CustomEditor.toggleMark(editor, 'italic')
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