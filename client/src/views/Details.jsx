import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";

export default (props) => {
    const { removingDOM } = props;
    const [pirate, setPirate] = useState({})
    const [catchPhrase, setCatchPhrase] = useState("")
    const [pegLeg, setPegLeg] = useState("")
    const [eyePatch, setEyePatch] = useState("")
    const [hookHand, setHookHand] = useState("")
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate/" + props.id)
            .then(res => {
                setPirate(res.data);
                setCatchPhrase(res.data.catchPhrase);
                if (res.data.pegLeg) {
                    setPegLeg("Yes");
                } else {
                    setPegLeg("No");
                }
                if (res.data.eyePatch) {
                    setEyePatch("Yes");
                } else {
                    setEyePatch("No");
                }
                if (res.data.hookHand) {
                    setHookHand("Yes");
                } else {
                    setHookHand("No");
                }
            })
    }, [])
    return (
        <div style={{width: "60%", margin: "0px auto"}}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1 style={{position: "relative", justifySelf: "center"}}>{pirate.pirateName}</h1>
                <div>
                    <button style={{padding: "10px",position: "relative", justifySelf: "right", marginTop: "30%"}} onClick={ e => {navigate("/pirate")} }>Crew Board</button>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <img src={pirate.imageUrl} width="350" height="250" style={{marginBottom: "10px", marginTop: "30px"}}/>
                    <h1><textarea cols="50" value={catchPhrase} disabled></textarea></h1>
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
                            <td>{pegLeg}</td>
                        </tr>
                        <tr>
                            <td>Eye Patch:</td>
                            <td>{eyePatch}</td>
                        </tr>
                        <tr>
                            <td>Hook Hand:</td>
                            <td>{hookHand}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
