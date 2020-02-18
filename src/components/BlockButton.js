import React from 'react';
import Icon from 'react-icons-kit';
import { CustomEditor } from './index';

const BlockButton = ({format, icon, editor}) => {
    return(
        <button 
            onMouseDown={(event) => {
                event.preventDefault()
                CustomEditor.toggleBlock(editor, format)
            }}
            className="tooltip-icon-button"
        >
            <Icon icon={icon} />
        </button>
    )
}

export default BlockButton