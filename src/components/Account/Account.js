import React from "react";
import {Link} from "react-router-dom";

const Account = ({ name, edit,deleteAccount }) => {
    const changeButtons = edit ? (
        <>
            <td><button onClick={()=>{deleteAccount(name.id)}} className="btn btn-danger">Delete</button></td>
            <td><Link to={"/Edit/" + name.id} className="btn btn-warning">Edit</Link></td>

        </>
    ): null;
  
    return (
        <tr>
            <td>{name.id}</td>
            <td>{name.name}</td>
            <td>{name.lastName}</td>
            <td>{name.date}</td>
            <td>{name.wl}</td>
            {changeButtons}
        </tr>
    )
}
export default Account;