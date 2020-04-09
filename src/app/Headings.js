import React, { Component } from 'react';

import Heading from './Heading';

class Headings extends Component {
    render() {
        return (
            <thead className="thead-dark">
                <tr>
                    {
                        this.props.headings.map(
                            (heading, i) => {
                                return <Heading key={i} heading={heading}/>
                            }
                        )
                    }
                </tr>
            </thead>
        )
    }
}

export default Headings;