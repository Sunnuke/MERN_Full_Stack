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
        <div>
            <div>
                <h1 style={{position: "absolute", justifySelf: "center"}}>Pirate Crew</h1>
                <button style={{position: "absolute", justifySelf: "right"}} onClick={ e => {navigate("/pirate/new")} }>Add Pirate</button>
            </div>
            <ItemList items={pirates} removingDOM={removingDOM} />
        </div>
    )
}