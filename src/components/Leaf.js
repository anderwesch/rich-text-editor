import React from 'react';

export default function Leaf({ attributes, children, leaf }) {

    if(leaf.bold) {
        children = <strong>{ children }</strong>
    }

    if(leaf.italic) {
        children = <em>{ children }</em>
    }


    return (
        <span { ...attributes } >
            { children }
        </span>
    )
}