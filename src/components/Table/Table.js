import React from "react";
import Account from "../Account/Account";


const Table = ({accounts}) => {
    const allBoxer = accounts.map(name=>{
       return(
        <Account name={name} key={name.id} />

       )

    })
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className="m-4" >Boxing Table</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>LastName</th>
                                        <th>Date of birth</th>
                                        <th>W / L</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {allBoxer}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )



}

export default Table;