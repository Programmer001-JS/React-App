import React, { Component } from 'react'
import NewList from './NewList';
import Modal from "./Modal";


class BoxersList extends Component {

    state = {
        boxers: [],
        currentBoxer: {}
    }

    changeBoxer = (boxer) => {
       this.setState({currentBoxer:boxer})
       
    }


    componentDidMount() {
        fetch('https://raw.githubusercontent.com/danilopejatovic1988bgd/Git-test/master/proba.json')
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({ boxers: data })
            })
    }

    render() {
        return (
            <div>
                <NewList boxers={this.state.boxers} changeBoxer={this.changeBoxer}/>
                <Modal  currentBoxer={this.state.currentBoxer}/>
            </div>
        )
    }
}


export default BoxersList
