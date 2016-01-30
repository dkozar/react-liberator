import React, { Component } from 'react';
import { Alert, Button, Panel } from 'react-bootstrap';
import Toolbar from './Toolbar';
import Liberator from './Liberator';
import SourceLink from './SourceLink';
import ReactWrappyText from 'react-wrappy-text';

require('./../styles/demo6.css');

export default class Demo6 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false,
            visible: true
        };

        this.onButtonClick = this.onButtonClick.bind(this);
        this.changeVisibility = this.changeVisibility.bind(this);
    }

    onButtonClick() {
        this.setState({
            active: !this.state.active
        });
    }

    changeVisibility() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        var active = this.state.active,
            visible = this.state.visible,
            className = 'popup ' + (active ? 'green' : 'red'),
            buttonIcon = active ?
                <span className="glyphicon glyphicon-star"></span> :
                <span className="glyphicon glyphicon-star-empty"></span>,
            buttonText = active ? 'Active: true' : 'Active: false',
            buttonIcon2 = visible ?
                <span className="glyphicon glyphicon-star"></span> :
                <span className="glyphicon glyphicon-star-empty"></span>,
            buttonText2 = visible ? 'Visible: true' : 'Visible: false',
            classNameLeft = className + ' left',
            classNameRight = className + ' right';

        return (
            <div>
                <Alert bsStyle="success">
                    <h3><ReactWrappyText>Demo 6 - Multiple children</ReactWrappyText></h3><br/>
                    <strong>Click the buttons to liberate both children.</strong><br/><br/>
                    Two children are wrapped into single Liberator.<br/><br/>
                    Both are displayed in the same overlay.<br/><br/>
                    <SourceLink>Demo6.js</SourceLink><br/><br/>
                </Alert>
                <Button bsStyle="primary" bsSize="large" onClick={this.onButtonClick}>{buttonIcon}&nbsp;{buttonText}</Button>
                <Button bsSize="large" className="indent-left" onClick={this.changeVisibility}>{buttonIcon2}&nbsp;{buttonText2}</Button>

                <Liberator active={active} visible={visible}>
                    <div className={classNameLeft}>{active ? 'In popup' : 'Normal'}</div>
                    <div className={classNameRight}>{active ? 'In popup' : 'Normal'}</div>
                </Liberator>
            </div>
        );
    }
}