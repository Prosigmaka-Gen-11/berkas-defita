import React from "react";

export default function Button(props) {
    return (
        <>
        <div className="indent-96 mt-4">
            <button type="button"
            className="rounded bg-purple-200 p-2" 
            onClick={props.tekanKlik}>
                {props.title}
            </button>
        </div>
        </>
    )
}