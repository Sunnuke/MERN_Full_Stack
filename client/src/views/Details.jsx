import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";

export default (props) => {
    const { removingDOM } = props;
    const [pirate, setPirate] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/!!!!EXAMPLE!!!!/" + props.id)
            .then(res => setPirate(res.data))
    }, [])
    return (
        <div style={{width: "60%", margin: "0px auto"}}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1 style={{position: "relative", justifySelf: "center"}}>{pirate.pirateName}</h1>
                <button style={{position: "relative", justifySelf: "right"}} onClick={ e => {navigate("/pirate")} }>Crew Board</button>
            </div>
            <div style={{display: "flex"}}>
                <div>
                    <img src={pirate.imageUrl} width="500" height="450" style={{marginBottom: "20px"}}/>
                    <h1>{pirate.catchPhrase}</h1>
                </div>
                <div>
                    <h2 style={{textAlign: "center"}}>About</h2>
                    <table>
                        <tr>
                            <td>Position:</td>
                            <td>{pirate.crewPosition}</td>
                        </tr>
                        <tr>
                            <td>Treasures:</td>
                            <td>{pirate.chests}</td>
                        </tr>
                        <tr>
                            <td>Peg Leg:</td>
                            <td>{pirate.pegLeg}</td>
                        </tr>
                        <tr>
                            <td>Eye Patch:</td>
                            <td>{pirate.eyePatch}</td>
                        </tr>
                        <tr>
                            <td>Hook Hand:</td>
                            <td>{pirate.hookHand}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
