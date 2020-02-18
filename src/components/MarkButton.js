import React from 'react';
import { useSlate } from "slate-react";
import Icon from 'react-icons-kit';
import { CustomEditor } from './index';

const MarkButton = ({ format, icon, editor }) => {
    return(
        <button 
            //active={CustomEditor.isMarkActive(editor, format)}
            onMouseDown={(event) => {
                event.preventDefault()
                CustomEditor.toggleMark(editor, format)
            }}
            className="tooltip-icon-button"
        >
            <Icon icon={icon} />
        </button>
    )
}

export default MarkButton