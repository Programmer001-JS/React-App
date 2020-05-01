import React, { useState, useRef, useEffect } from "react";
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom"

function AddAccount(props) {


    const [newAccount, setNewAccount] = useState({ id: "", name: "", lastName: "", date: "", wl: "" })

    const setInput = useRef();

    useEffect(() => {
        setInput.current.focus();
    }, [])


    const addNewAccount = () => {
        props.addNewAccountToState(newAccount);
        props.history.push("/")

    }


    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className="m-4">Add Boxer</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input type="text" ref={setInput} onChange={e => { setNewAccount({ ...newAccount, id: e.target.value }) }} className="form-control" placeholder="Id" /><br />
                            <input type="text" onChange={e => { setNewAccount({ ...newAccount, name: e.target.value }) }} className="form-control" placeholder="Name" /><br />
                            <input type="text" onChange={e => { setNewAccount({ ...newAccount, lastName: e.target.value }) }} className="form-control" placeholder="LastName" /><br />
                            <input type="text" onChange={e => { setNewAccount({ ...newAccount, date: e.target.value }) }} className="form-control" placeholder="Date of birth" /><br />
                            <input type="text" onChange={e => { setNewAccount({ ...newAccount, wl: e.target.value }) }} className="form-control" placeholder="Score" /><br />
                            <Button onClick={addNewAccount} variant="contained" color="secondary">Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(AddAccount);