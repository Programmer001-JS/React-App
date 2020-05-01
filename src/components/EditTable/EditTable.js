import React from "react";
import Account from "../Account/Account";


const EditTable  =({accounts,deleteAccount})=> {
   const allAccounts = accounts.map(name =>{
      return(
        <Account name={name} key={name.id} edit={true} deleteAccount={deleteAccount}/>
      )

   }) 
return(
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
                                <th>Change</th>
                                <th>Change</th>
                            </tr>
                        </thead>
                        <tbody>
                          {allAccounts}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
)



}
export default EditTable;