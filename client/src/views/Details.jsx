import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from "@reach/router";
import DeleteButton from '../components/DeleteButton';

export default (props) => {
    const { removingDOM } = props;
    const [EXAMPLE, setEXAMPLE] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/!!!!EXAMPLE!!!!/" + props.id)
            .then(res => setEXAMPLE(res.data))
    }, [])
    return (
        <div>
            <p>EXAMPLE: {EXAMPLE.example}</p>
            <p>EXAMPLE: {EXAMPLE.example}</p>
            <p>EXAMPLE: {EXAMPLE.example}</p>
            <Link to={"/EXAMPLE/" + props.id + "/edit"}>
                Edit
            </Link><br />
            <DeleteButton id={EXAMPLE._id} removingDOM={() => navigate("/EXAMPLE")} />
        </div>
    )
}
