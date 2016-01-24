import React, { Component } from 'react';

//const SOURCE_FOLDER = 'src/components/';
const SOURCE_FOLDER = 'https://github.com/dkozar/react-liberator/tree/master/src/components/';

export default class SourceLink extends Component {
    render() {
        return (
            <a href={SOURCE_FOLDER + this.props.children || ''} target="_blank">Click here for the source</a>
        );
    }
}