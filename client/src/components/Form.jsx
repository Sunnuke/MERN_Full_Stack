import React, { useState } from "react";

export default (props) => {
    const { pirateNameIn, imageUrlIn, chestsIn, catchPhraseIn, crewPositionIn, pegLegIn, eyePatchIn, hookHandIn,  submitInput } = props;
    const [ pirateName, setPirateName ] = useState(pirateNameIn);
    const [ imageUrl, setImageUrl ] = useState(imageUrlIn);
    const [ chests, setChests ] = useState(chestsIn);
    const [ catchPhrase, setCatchPhrase ] = useState(catchPhraseIn);
    const [ crewPosition, setCrewPosition ] = useState(crewPositionIn);
    const [ pegLeg, setPegLeg ] = useState(true);
    const [ eyePatch, setEyePatch ] = useState(true);
    const [ hookHand, setHookHand ] = useState(true);

    const Process = (e) => {
        e.preventDefault();
        submitInput({ pirateName, imageUrl, chests, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand });
    }

    return(
        <div>
            {/* {JSON.stringify({ pirateName, imageUrl, chests, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand })} */}
            <form onSubmit={Process}>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "50px", textAlign: "left"}}>
                    <table>
                        <tr>
                            <td><label>Pirate Name:</label></td>
                            <td>
                                <input type="text" 
                                name="pirateName"
                                value={pirateName}
                                onChange={ e => { setPirateName(e.target.value) } } 
                                style={{marginBottom: "20px"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Image Url:</label></td>
                            <td>
                                <input type="text" 
                                name="imageUrl"
                                value={imageUrl}
                                onChange={ e => { setImageUrl(e.target.value) } } 
                                style={{marginBottom: "20px"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td><label># of Treasure Chests:</label></td>
                            <td>
                                <input type="number" 
                                name="chests"
                                value={chests}
                                onChange={ e => { setChests(e.target.value) } } 
                                style={{marginBottom: "20px"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Pirate Catch Phrase:</label></td>
                            <td>
                                <textarea
                                cols="25"
                                name="catchPhrase"
                                value={catchPhrase}
                                onChange={ e => { setCatchPhrase(e.target.value) } } ></textarea>
                            </td>
                        </tr>
                    </table>
                    
                    <table>
                        <tr>
                            <td><label>Crew Position:</label></td>
                            <td>
                                <select name="crewPosition"onChange={ e => { setCrewPosition(e.target.value) } } style={{marginBottom: "20px"}}>
                                    <option value="" disabled selected>Select Position</option>
                                    <option value="Captain">Captain</option>
                                    <option value="First Mate">First Mate</option>
                                    <option value="Quarter Master">Quarter Master</option>
                                    <option value="Boatswain">Boatswain</option>
                                    <option value="Powder Monkey">Powder Monkey</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Peg Leg:</label></td>
                            <td>
                                <input type="checkbox"
                                name="pegLeg"
                                checked={pegLeg}
                                onClick={ e => setPegLeg(!pegLeg) } 
                                style={{marginBottom: "20px"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Eye Patch:</label></td>
                            <td>
                                <input type="checkbox"
                                name="eyePatch"
                                checked={eyePatch}
                                onClick={ e => setEyePatch(!eyePatch) } 
                                style={{marginBottom: "20px"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Hook Hand:</label></td>
                            <td>
                                <input type="checkbox"
                                name="hookHand"
                                checked={hookHand}
                                onClick={ e => setHookHand(!hookHand) } 
                                style={{marginBottom: "20px"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" style={{width: "200%", height: "200%"}} />
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
        </div>
    )
}