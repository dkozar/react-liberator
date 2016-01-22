import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

const texts = [
    'This is Liberator.',
    'It liberates components from captivity of their siblings.',
    'It\'s the foundation for popups.'
];

export default class Toolbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: this.props.visible,
            text: this.props.text
        };

        this.onShowButtonClick = this.onShowButtonClick.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onShowButtonClick() {
        this.setState({
            visible: !this.state.visible
        });
        this.props.onVisibilityChange(this.state.visible);
    }

    onTextChange(index) {
        this.props.onTextChange(texts[index]);
    }

    render() {
        var visible = this.props.visible,
            buttonIcon = visible ?
                <span className="glyphicon glyphicon-star"></span> :
                <span className="glyphicon glyphicon-star-empty"></span>,
            buttonText = visible ? 'Hide popup' : 'Show popup';

        return (
            <div>
                <ButtonToolbar>
                    {this.props.showButton ? <Button bsStyle="primary" bsSize="large" onClick={this.onShowButtonClick}>{buttonIcon}&nbsp;{buttonText}</Button> : null}
                    <ButtonGroup bsSize="large" className="indent-left">
                        <Button bsSize="large" onClick={this.onTextChange.bind(this, 0)}>Text 1</Button>
                        <Button bsSize="large" onClick={this.onTextChange.bind(this, 1)}>Text 2</Button>
                        <Button bsSize="large" onClick={this.onTextChange.bind(this, 2)}>Text 3</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}

Toolbar.propTypes = {
    showButton: React.PropTypes.bool,
    onVisibilityChange: React.PropTypes.func,
    onTextChange: React.PropTypes.func
};
Toolbar.defaultProps = {
    showButton: true,
    onVisibilityChange() {},
    onTextChange() {}
};