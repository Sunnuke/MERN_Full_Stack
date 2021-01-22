import { Link } from "@reach/router";
import React from "react";
import DeleteButton from "./DeleteButton";

export default (props) => {
    const { removingDOM } = props;
    return(
        <div>
            {
                props.items.map((item, i) => {
                    return(
                        <div key={i}>
                            <p>
                                <Link to={"/EXAMPLE/" + item._id}>
                                    {EXAMPLE.example}
                                </Link>
                                | 
                                <DeleteButton id={item._id} removingDOM={() => removingDOM(item._id)} />
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}