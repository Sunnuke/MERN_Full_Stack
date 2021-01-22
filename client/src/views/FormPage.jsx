import React, { useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import Form from "../components/Form";

export default () => {
    const [ errors, setErrors ] = useState();
    const [ load, setLoad ] = useState(false);

    const createPirate = (pirate) => {
        console.log(pirate);
        axios.post("http://localhost:8000/api/pirate/new", pirate)
            .then(res => {
                console.log(res);
                navigate("/pirate");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                setLoad(true);
            });
    }

    return(
        <div style={{width: "80%", margin: "0px auto"}}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1 style={{position: "relative", justifySelf: "center"}}>Add Pirate</h1>
                <button style={{position: "relative", justifySelf: "right"}} onClick={ e => {navigate("/pirate")} }>Crew Board</button>
            </div>
            {
                load ?
                <div>
                    {
                        errors.map((error, i) => {
                            return(
                                <p style={{color: "red"}}>{error}</p>
                            )
                        })
                    }
                </div> :
                ''
            }
            <Form pirateNameIn="" imageUrlIn="" chestsIn="" catchPhraseIn="" crewPositionIn="" submitInput={createPirate} />
        </div>
    )
}