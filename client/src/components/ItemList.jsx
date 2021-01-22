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
                        <div key={i} id={i}>
                            <div style={{width: "50%", display: "flex", justifyContent: "space-between", margin: "10px auto"}}>
                            <img src={item.imageUrl} width="100" height="90"/>
                                <div>
                                    <p>{item.pirateName}</p>
                                        <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <button style={{marginRight: "30px"}} onClick={ e => {navigate("/pirate/" + item._id)} }>View Pirate</button>
                                        <DeleteButton id={item._id} removingDOM={() => removingDOM(item._id)} />
                                        </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}