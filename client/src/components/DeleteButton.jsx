import axios from "axios";
import React from "react";

export default (props) => {
    const { id, removingDOM } = props;
    const deleting = (e) => {
        axios.delete("http://localhost:8000/api/pirate/" + id)
            .then(res => {
                removingDOM();
            })
    }
    return(
            <button onClick={ e => {deleting(e)} }>
                Walk The Plank
            </button>
    )
}