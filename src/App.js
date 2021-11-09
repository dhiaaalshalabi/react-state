import React from "react";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: 'Yes',
        }
    }
    render() {

        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
            </div>
        )
    }
}