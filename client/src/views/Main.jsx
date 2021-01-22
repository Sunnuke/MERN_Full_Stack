import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Form from "../components/Form";
import ItemList from "../components/ItemList";

export default () => {
    const [message, setMessage] = useState("Connecting...");
    const [EXAMPLEs, setEXAMPLEs] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/EXAMPLE')
            .then(res=>{
                setEXAMPLEs(res.data);
                setLoaded(true);
            });
    },[])
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);

    const createEXAMPLE = (EXAMPLE) => {
        setEXAMPLEs([...EXAMPLEs, example]);
        axios.post("http://localhost:8000/api/!!!!EXAMPLE!!!!/new", example)
            .then(res => {
                console.log(res);
                navigate("/EXAMPLE");
            })
            .catch(err => console.log(err))
    }

    const removingDOM = (id) => {
        setEXAMPLEs(examples.filter(example => example._id != id));
    }

    return(
        <>
            <h1>Connection status: {message}</h1>
            <Form EXAMPLEIn="" submitInput={createEXAMPLE} />
            <hr/>
            {loaded && <ItemList EXAMPLEs={EXAMPLEs} removingDOM={removingDOM}/>}
        </>
    )
}