import { Link } from "@reach/router";
import React from "react";
import DeleteButton from "./DeleteButton";

export default (props) => {
    const { removingDOM } = props;
    return(
        <div>
            {
                props.EXAMPLE.map((EXAMPLE, i) => {
                    return(
                        <div key={i}>
                            <p>
                                <Link to={"/EXAMPLE/" + EXAMPLE._id}>
                                    {EXAMPLE.example}
                                </Link>
                                | 
                                <DeleteButton id={EXAMPLE._id} removingDOM={() => removingDOM(EXAMPLE._id)} />
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}