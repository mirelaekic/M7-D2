import React, { Component } from 'react'

export default class SingleJob extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.job.title}</h1>  
            </div>
        )
    }
}
