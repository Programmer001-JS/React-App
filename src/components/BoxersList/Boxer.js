import React from "react";

const Boxer = ({ boxer,changeBoxer }) => {
    return (
        <div className="card mt-3">
            <div className="card-header bg-warning text-dark">
                <h3>{boxer.name}</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <img src={boxer.img_url} alt="" width="200px" />
                    </div>
                    <div className="col-6">
                        <p>{boxer.info.substr(0,200)}</p>
                    </div>
                </div>
            </div>
            <div className="card-footer bg-dark">
                <button   className="btn btn-warning float-right" 
                data-toggle="modal" data-target="#exampleModal" onClick={()=>{changeBoxer(boxer)}}>Read more</button>
            </div>
        </div>

    )
}
export default Boxer;