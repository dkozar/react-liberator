import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

const DEFAULT_LIBERATOR_LAYER_ID = '___liberator___';

export default class Liberator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            layerElement: null,
            parentElement: null
        };
    }

    componentWillMount() {
        if (this.props.active) {
            this.activate();
            this.doRender(this.props.children);
        }
    }

    componentWillUnmount() {
        this.deactivate();
    }

    activate() {
        var layerId = this.props.layerId,
            layerElement = document.getElementById(layerId),
            parentElement;

        if (!layerElement) {
            layerElement = document.createElement('div');
            layerElement.setAttribute("id", layerId);
            document.body.appendChild(layerElement);
        }

        this.state.layerElement = layerElement;

        parentElement = document.createElement('div');
        parentElement.className = this.props.className || '';
        this.state.parentElement = parentElement;

        layerElement.appendChild(parentElement);
    }

    deactivate() {
        if (this.state.parentElement) {
            if (this.state.layerElement) {
                this.state.layerElement.removeChild(this.state.parentElement);
            }
            this.setState({
                layerElement: null
            });
            ReactDOM.unmountComponentAtNode(this.state.parentElement);
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.active !== this.props.active) {
            if (newProps.active) {
                this.activate();
            } else {
                this.deactivate();
            }
        }

        if (newProps.active) {
            return this.doRender(newProps.children);
        } else {
            return null;
        }

    }

    render() {
        if (this.props.active) {
            return null; // short circuit here
        } else {
            return this.wrapChildren(this.props.children);
        }
    }

    wrapChildren(children) {
        if (!children) {
            return null;
        }

        if (children.length > 1) {
            return (<div>
                {children}
            </div>);
        }

        return children;
    }

    doRender(children) {
        return render(this.wrapChildren(children), this.state.parentElement);
    }
}
Liberator.propTypes = {
    layerId: React.PropTypes.string,
    detach: React.PropTypes.bool
};
Liberator.defaultProps = {
    layerId: DEFAULT_LIBERATOR_LAYER_ID,
    active: true
};