import React from "react";
import Boxer from "./Boxer";


const NewList = ({ boxers,changeBoxer}) => {
    const allBoxer = boxers.map(boxer => {
        return (
            <div className="col-6" key={boxer.id}>
                <Boxer boxer={boxer}  changeBoxer={changeBoxer}/>
            </div>
        )
    })
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className="m-4">Boxers List</h3>
                </div>
                <div className="row">
                    {allBoxer}
                </div>
            </div>
        </div>
    )
}
export default NewList;