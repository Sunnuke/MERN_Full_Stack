import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";
import Form from "../components/Form";

export default (props) => {
    const { id } = props;
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:8000/api/!!!!EXAMPLE!!!!/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setLoaded(true);
        })
            .catch(err => console.log(err));
    }, [])

    const updating = (EXAMPLE) => {
        axios.put("http://localhost:8000/api/!!!!EXAMPLE!!!!/" + id, EXAMPLE)
            .then(res => {
                console.log(res)
                navigate("/EXAMPLE");
            });
    }

    return(
        <div>
            <h1>Edit EXAMPLE Details</h1>
            {loaded && <Form titleIn={title} priceIn={price} descriptionIn={description} submitProduct={updating} />}
            <DeleteButton id={id} removingDOM={() => navigate("/EXAMPLE")} />
        </div>
    )
}