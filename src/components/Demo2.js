import React, { Component } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import Toolbar from './Toolbar';
import Liberator from './Liberator';

require('./../styles/demo2.css');

const texts = [
    'This is the liberator.',
    'It liberates the component from captivity of its siblings.',
    'It\'s a foundation for popups.'
];

export default class Demo2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            selectedIndex: 0,
            text: texts[0]
        };

        this.hidePopup = this.hidePopup.bind(this);
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onVisibilityChange() {
        this.setState({
            visible: !this.state.visible
        });
        console.log(this.state);
    }

    hidePopup() {
        this.setState({
            visible: false
        });
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
                    <div className="static-modal modal-backdrop fade in"></div>
                    <div>
                        <Modal.Dialog animation={true}>
                            <Modal.Header>
                                <Modal.Title>Popup dialog</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>

                                This is a popup wrapped into Liberator.<br/><br/>
                                Check out the HTML using inspector.<br/><br/>

                                <Toolbar
                                    showButton={false}
                                    visible={this.state.visible}
                                    selectedIndex={this.state.selectedIndex}
                                    text={this.state.text}
                                    onVisibilityChange={this.onVisibilityChange}
                                    onTextChange={this.onTextChange} />

                                <br/>

                                Selected text: {this.state.text}

                            </Modal.Body>

                            <Modal.Footer>
                                <Button bsStyle="primary" bsSize="large" onClick={this.hidePopup}><span className="glyphicon glyphicon-star"></span>&nbsp;Hide popup</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                </Liberator>
            ) : null;

        return (
            <div>
                <Alert bsStyle="info">
                    <h3>Demo 2 - Popup</h3><br/>
                    <strong>Open the popup.</strong><br/><br/>
                    It should be displayed in an overlay.<br/><br/>
                    Then change text to see the popup change.
                </Alert>
                <div>
                    <Toolbar
                        visible={this.state.visible}
                        selectedIndex={this.state.selectedIndex}
                        text={this.state.text}
                        onVisibilityChange={this.onVisibilityChange}
                        onTextChange={this.onTextChange} />

                    {popup}

                </div>
            </div>
        );
    }
}