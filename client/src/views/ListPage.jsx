import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import ItemList from "../components/ItemList";

export default () => {
    const [ pirates, setPirates ] = useState([]);
    const settingList = (list) => {
        setPirates(list);
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate")
        .then(res => {
            console.log(res.data)
            settingList(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    const removingDOM = (pirateId) => {
        settingList(pirates.filter(pirate => pirate._id != pirateId));
    }

    return(
        <div style={{width: "60%", margin: "0px auto"}}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1 style={{position: "relative", justifySelf: "center"}}>Pirate Crew</h1>
                <div>
                    <button style={{padding: "10px",position: "relative", justifySelf: "right", marginTop: "30%"}} onClick={ e => {navigate("/pirate/new")} }>Add Pirate</button>
                </div>
            </div>
            <ItemList items={pirates} removingDOM={removingDOM} />
        </div>
    )
}