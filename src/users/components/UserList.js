import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList=(props)=>{
    if(props.items.length===0){
        return (
            <div className="center">
                <h2>No users exists</h2>
            </div>
        )
    }
 return (
    <ul className="userlist">
        {props.items.map((user)=>{
            return(
               <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            pic={user.pic}
            locationcount={user.numberoflocations}
            />
            );
        })}
    </ul>
 )
};


export default UserList;