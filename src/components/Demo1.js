import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
import Toolbar from './Toolbar';
import Liberator from './Liberator';

require('./../styles/demo1.css');

const texts = [
        'This is the liberator.',
        'It liberates the component from captivity of its siblings.',
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
        console.log(this.state);
    }

    onTextChange(text) {
        console.log('onTextChange', text)
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
                    <h3>Demo 1 - Liberate!</h3><br/>
                    <strong>Open the popup.</strong><br/><br/>
                    It should be displayed in the bottom-right corner.<br/><br/>
                    Then change text to see the popup change.<br/><br/>
                    Also check the HTML in the console.
                </Alert>
                <Toolbar
                    visible={this.state.visible}
                    selectedIndex={this.state.selectedIndex}
                    text={this.state.text}
                    onVisibilityChange={this.onVisibilityChange}
                    onTextChange={this.onTextChange} />
                {popup}
            </div>
        );
    }
}