import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
import Toolbar from './Toolbar';
import Liberator from './Liberator';
import SourceLink from './SourceLink';
import ReactWrappyText from 'react-wrappy-text';

require('./../styles/demo1.css');

const texts = [
        'This is Liberator.',
        'It liberates components from captivity of their siblings.',
        'It\'s the foundation for popups.'
    ];

export default class Demo1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            selectedIndex: 0,
            text: texts[0]
        };

        this.onVisibilityChange = this.onVisibilityChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onVisibilityChange() {
        this.setState({
            visible: !this.state.visible
        });
    }

    onTextChange(text) {
        this.setState({
            text: text
        });
    }

    render() {
        var visible = this.state.visible,
            popup = visible ? (
            <Liberator>
                <div className='popup red'>{this.state.text}</div>
            </Liberator>
        ) : null;

        return (
            <div>
                <Alert bsStyle="info">
                    <h3><ReactWrappyText>Demo 1 - Liberate!</ReactWrappyText></h3><br/>
                    <strong>Open the popup.</strong><br/><br/>
                    It will be displayed in the bottom-right corner.<br/><br/>
                    Then change text to see the popup change.<br/><br/>
                    Also check the HTML in browser inspector.<br/><br/>
                    <SourceLink>Demo1.js</SourceLink><br/><br/>
                </Alert>
                <Toolbar
                    visible={visible}
                    selectedIndex={this.state.selectedIndex}
                    text={this.state.text}
                    onVisibilityChange={this.onVisibilityChange}
                    onTextChange={this.onTextChange} />
                {popup}
            </div>
        );
    }
}