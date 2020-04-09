import React, { Component } from 'react';

import Row from './Row';

class Rows extends Component {
    render() {
        return (
            <tbody>
                {
                    this.props.data.map(
                        (row, i) => {
                            return <Row key={i} change={row}/>
                        }
                    )
                }
            </tbody>
        )
    }
}

export default Rows;