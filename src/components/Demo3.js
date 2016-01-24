import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
import Toolbar from './Toolbar';
import Liberator from './Liberator';
import SourceLink from './SourceLink';
import ReactWrappyText from 'react-wrappy-text';

require('./../styles/demo3.css');

export default class Demo3 extends Component {

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
            className = 'popup ',
            buttonIcon = active ?
                <span className="glyphicon glyphicon-star"></span> :
                <span className="glyphicon glyphicon-star-empty"></span>,
            buttonText = active ? 'Active: true' : 'Active: false',
            buttonIcon2 = visible ?
                <span className="glyphicon glyphicon-star"></span> :
                <span className="glyphicon glyphicon-star-empty"></span>,
            buttonText2 = visible ? 'Visible: true' : 'Visible: false';

        className += active ? 'green' : 'red';

        return (
            <div>
                <Alert bsStyle="info">
                    <h3><ReactWrappyText>Demo 3 - Activate / deactivate</ReactWrappyText></h3><br/>
                    <strong>The element could be permanently wrapped into Liberator.</strong><br/><br/>
                    Setting the <b>active</b> switch to <i>true</i> renders it in a popup.<br/><br/>
                    Setting the <b>active</b> switch to <i>false</i> renders it as a child.<br/><br/>
                    Setting the <b>visible</b> switch to <i>false</i> hides it altogether.<br/><br/>
                    Check out the HTML in the inspector.<br/><br/>
                    <SourceLink>Demo3.js</SourceLink><br/><br/>
                </Alert>

                <Button bsStyle="primary" bsSize="large" onClick={this.onButtonClick}>{buttonIcon}&nbsp;{buttonText}</Button>
                <Button bsSize="large" className="indent-left" onClick={this.changeVisibility}>{buttonIcon2}&nbsp;{buttonText2}</Button>

                <Liberator active={active} visible={visible}>
                    <div className={className}>{active ? 'In popup' : 'Normal'}</div>
                </Liberator>
            </div>
        );
    }
}