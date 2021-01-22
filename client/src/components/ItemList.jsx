import { navigate } from "@reach/router";
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
                            <div>
                            <img src={item.imageUrl} alt="Girl in a jacket" width="100" height="90"/>
                                <div>
                                    <p>{item.pirateName}</p>
                                    <button onClick={ e => {navigate("/pirate/" + item._id)} }>View Pirate</button>
                                    <DeleteButton id={item._id} removingDOM={() => removingDOM(item._id)} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}