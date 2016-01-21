import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
import Toolbar from './Toolbar';
import Liberator from './Liberator';

require('./../styles/demo4.css');

export default class Demo3 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        var active = this.state.active,
            className = 'popup ',
            buttonIcon = active ?
                <span className="glyphicon glyphicon-star"></span> :
                <span className="glyphicon glyphicon-star-empty"></span>,
            buttonText = active ? 'Show normal' : 'Show in popup';

        className += active ? 'green' : 'red';

        return (
            <div>
                <Alert bsStyle="info">
                    <h3>Demo 3 - Activate / deactivate</h3><br/>
                    <strong>The element could be always wrapped into Liberator.</strong><br/><br/>
                    Using the "active" switch we could render it in popup.<br/><br/>
                    Check the HTML in the console.
                </Alert>

                <Button bsStyle="primary" bsSize="large" onClick={this.onButtonClick}>{buttonIcon}&nbsp;{buttonText}</Button>

                <Liberator active={active}>
                    <div className={className}>{active ? 'In popup' : 'Normal'}</div>
                </Liberator>

            </div>
        );
    }
}