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

        this.doRender(this.props.children);
    }

    componentWillUnmount() {
        this.state.layerElement.removeChild(this.state.parentElement);
        this.setState({
            layerElement: null
        });

        ReactDOM.unmountComponentAtNode(this.state.parentElement);
    }

    componentWillReceiveProps(newProps) {
        return this.doRender(newProps.children);
    }

    render() {
        return null; // short circuit here
    }

    doRender(children) {
        if (!children) {
            return null;
        }

        if (children.length > 1) {
            children = (<div>
                {children}
            </div>);
        }

        return render(children, this.state.parentElement);
    }
}
Liberator.propTypes = { layerId: React.PropTypes.string };
Liberator.defaultProps = { layerId: DEFAULT_LIBERATOR_LAYER_ID, styles: {} };