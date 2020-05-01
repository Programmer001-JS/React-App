import React, { useState } from 'react'
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Table from "./components/Table/Table";
import AddAccount from './components/AddAccount/AddAccount';
import EditTable from './components/EditTable/EditTable';
import EditAccount from "./components/EditAccount/EditAccount";
import BoxersList from './components/BoxersList/BoxersList';


function App() {

    const [accounts, setAccounts] = useState([
        { id: 1, name: "Mike", lastName: "Tyson", date: "30.06.1966", wl: "50-6" },
        { id: 2, name: "Anthony", lastName: "Joshua", date: "15.10.1989", wl: "23-1" },
        { id: 3, name: "Floyd", lastName: "Mayweather Jr.", date: "24.02.1977", wl: "50-0" },
        { id: 4, name: "Andre", lastName: "Ward", date: "23.02.1984", wl: "32-0" },
        { id: 5, name: "Vasiliy", lastName: "Lomachenko", date: "17.02.1988", wl: "15-1" }
    ])


    const addNewAccountToState = (acc) => {
        setAccounts([...accounts, acc])
    }
    const deleteAccount = (id) => {
        const newAccountCopy = accounts.filter(account => account.id !== id);
        setAccounts(newAccountCopy)
    }

    const editAccount = (acc) => {
        let accountPossition = accounts.map(account => account.id).indexOf(acc.id)
        accounts[accountPossition] = acc;
        setAccounts(accounts)

    }

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route path="/List" >
                    <BoxersList />
                </Route>
                <Route path="/" exact>
                    <Table accounts={accounts} />
                </Route>
                <Route path="/Add">
                    <AddAccount addNewAccountToState={addNewAccountToState} />
                </Route>
                <Switch>
                <Route path="/Edit/:id">
                        <EditAccount accounts={accounts} editAccount={editAccount} />
                    </Route>

                    <Route path="/Edit">
                        <EditTable accounts={accounts} deleteAccount={deleteAccount} />
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>
    )

}

export default App
