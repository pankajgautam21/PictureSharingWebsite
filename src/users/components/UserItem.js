import React from "react";
import {Link} from "react-router-dom";
import "./UserItem.css";

const UserItem=(props)=>{
    return(
        <li className="useritem">
            <div className="useritem-content">
                <Link to={`${props.id}/locations`}>
                <div className="useritem-pic">
                    <img src={props.pic} alt={props.name}/>
                </div>
                <div className="useritem-infor">
                    <h2>{props.name}</h2>
                    <h3>{props.locationcount}
                    {props.locationcount ===1 ? "location":"locations"}
                    </h3>
                </div>
                </Link>
            </div>
        </li>
    )
}

export default UserItem;