import React, { Component } from 'react';

import Headings from './Headings';
import Rows from './Rows';

import { format } from 'timeago.js';

class App extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        setInterval(async () => {
            const response = await fetch('http://openlibrary.org/recentchanges.json?limit=15');
            const data = await response.json();
    
            const formatedData = this.formatData(data);
    
            this.setState({
                data:formatedData
            })
        }, 2000);
    }

    formatData(data) {
        return data.map((data, i) => {
            return {
                "when": format(data.timestamp - 4), //data.timestamp
                "who": data.author.key,
                "description": data.comment
            }
        });
    }

    render() {
        //console.log(this.props.data)
        //console.log(this.props.title)
        //console.log(this.props.headings)

        return (
            <div className="container p-4">
                <h1>{ this.props.title }</h1>
                <table className="table table-bordered">
                    <Headings headings={this.props.headings}/>
                    <Rows data={this.state.data}/>
                </table>
            </div>
        )
    }
}

export default App;