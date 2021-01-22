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
            {JSON.stringify({ pirateName, imageUrl, chests, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand })}
            <form onSubmit={Process}>
                <label>Pirate Name:</label>
                <input type="text" 
                name="pirateName"
                value={pirateName}
                onChange={ e => { setPirateName(e.target.value) } } 
                style={{marginBottom: "20px"}}/><br/>

                <label>Image Url:</label>
                <input type="text" 
                name="imageUrl"
                value={imageUrl}
                onChange={ e => { setImageUrl(e.target.value) } } 
                style={{marginBottom: "20px"}}/><br/>

                <label># of Treasure Chests:</label>
                <input type="number" 
                name="chests"
                value={chests}
                onChange={ e => { setChests(e.target.value) } } 
                style={{marginBottom: "20px"}}/><br/>

                <label>Pirate Catch Phrase:</label>
                <textarea
                name="catchPhrase"
                value={catchPhrase} onChange={ e => { setCatchPhrase(e.target.value) } } ></textarea><br/>

                <label>Crew Position:</label>
                <select name="crewPosition"onChange={ e => { setCrewPosition(e.target.value) } } style={{marginBottom: "20px"}}>
                    <option value="" disabled selected>Select Position</option>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select><br/>

                <label>Peg Leg:</label>
                <input type="checkbox"
                name="pegLeg"
                checked={pegLeg}
                onClick={ e => setPegLeg(!pegLeg) } 
                style={{marginBottom: "20px"}}/><br/>

                <label>Eye Patch:</label>
                <input type="checkbox"
                name="eyePatch"
                checked={eyePatch}
                onClick={ e => setEyePatch(!eyePatch) } 
                style={{marginBottom: "20px"}}/><br/>

                <label>Hook Hand:</label>
                <input type="checkbox"
                name="hookHand"
                checked={hookHand}
                onClick={ e => setHookHand(!hookHand) } 
                style={{marginBottom: "20px"}}/><br/>

                <input type="submit" />
            </form>
        </div>
    )
}