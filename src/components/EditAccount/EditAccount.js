import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function EditAccount(props) {

    const [account,setAccount] = useState(props.accounts.filter(acc => acc.id == props.match.params.id)[0])


    const editAccount = () => {
        props.editAccount(account);
        props.history.push("/");


    }
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className="m-4">Edit account</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input type="text" onChange={e => { setAccount({ ...account, name: e.target.value }) }} id="name" className="form-control" placeholder="name" value={account.name} /><br />
                            <input type="text" onChange={e => { setAccount({ ...account, lastName: e.target.value }) }} id="lastName" className="form-control" placeholder="lastName" value={account.lastName} /><br />
                            <input type="text" onChange={e => { setAccount({ ...account, date: e.target.value }) }} id="date" className="form-control" placeholder="Date of birth" value={account.date} /><br />
                            <input type="text" onChange={e => { setAccount({ ...account, wl: e.target.value }) }} id="wl" className="form-control" placeholder="Score" value={account.wl} /><br />
                            <button onClick={editAccount} className="btn btn-primary form-control">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(EditAccount)



