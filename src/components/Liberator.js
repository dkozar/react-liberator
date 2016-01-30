import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

const DEFAULT_LIBERATOR_LAYER_ID = '___liberator___';
const DEFAULT_LIBERATOR_LAYER_ELEMENT_TYPE = 'div';

export default class Liberator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            layerElement: null,
            wrapperElement: null
        };
    }

    componentWillMount() {
        if (this.props.active && this.props.visible) {
            this.activate();
            this.renderInPopup(this.props.children);
        }
    }

    componentWillUnmount() {
        this.deactivate();
    }

    activate() {
        var layerElement = this.props.layer,
            layerId,
            wrapperElement;

        if (!layerElement) {
            layerId = this.props.layerId,
            layerElement = document.getElementById(layerId); // layer lookup
        }

        if (!layerElement) {
            // if we haven't found the predefined div, we're creating it on the fly
            layerElement = document.createElement(this.props.layerElementType);
            layerElement.setAttribute('id', layerId);
            document.body.appendChild(layerElement);
        }

        this.state.layerElement = layerElement;

        // we're creating a wrapper element on the fly
        // we're rendering the component into this element when active
        wrapperElement = document.createElement('div');
        wrapperElement.className = this.props.className || '';
        this.state.wrapperElement = wrapperElement;

        layerElement.appendChild(wrapperElement);
    }

    deactivate() {
        var wrapperElement = this.state.wrapperElement,
            layerElement = this.state.layerElement;

        if (wrapperElement) {
            if (layerElement) {
                layerElement.removeChild(wrapperElement);
            }
            this.setState({
                wrapperElement: null
            });
            ReactDOM.unmountComponentAtNode(wrapperElement);
        }
        if (layerElement && !layerElement.childNodes.length &&
                (this.props.autoCleanup || this.props.layerId === DEFAULT_LIBERATOR_LAYER_ID)) { // removing the default layer automatically
            // if no active popups, removing the layer altogether
            document.body.removeChild(layerElement);
            this.setState({
                layerElement: null
            });
        }
    }

    componentWillReceiveProps(newProps) {
        var changedActiveState = newProps.active !== this.props.active,
            changedVisibility = newProps.visible !== this.props.visible,
            isNowActive = newProps.active,
            isNowVisible = newProps.visible,
            shouldRenderInPopup = isNowActive && isNowVisible;

        if (changedActiveState || changedVisibility) {
            if (shouldRenderInPopup) {
                this.activate();
            } else {
                this.deactivate();
            }
        }

        if (shouldRenderInPopup) {
            return this.renderInPopup(newProps.children);
        } else {
            return null;
        }
    }

    render() {
        if (this.props.active || !this.props.visible) {
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

    renderInPopup(children) {
        return render(this.wrapChildren(children), this.state.wrapperElement);
    }
}
Liberator.propTypes = {
    active: React.PropTypes.bool,
    visible: React.PropTypes.bool,
    layer: React.PropTypes.node,
    layerId: React.PropTypes.string,
    layerElementType: React.PropTypes.string,
    autoCleanup: React.PropTypes.bool
};
Liberator.defaultProps = {
    active: true, // popping up by default
    visible: true, // visible by default
    layer: null, // we could pass the layer element to render the popup to (takes precedence to layerId/layerElementType),
    layerId: DEFAULT_LIBERATOR_LAYER_ID, // the ID of the element to render the popup to,
    layerElementType: DEFAULT_LIBERATOR_LAYER_ELEMENT_TYPE, // the type of the element to render the popup to,
    autoCleanup: false // automatically destroying the layer when having no child elements
};