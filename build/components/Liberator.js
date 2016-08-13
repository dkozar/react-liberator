'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_LIBERATOR_LAYER_ID = '___liberator___';
var DEFAULT_LIBERATOR_LAYER_ELEMENT_TYPE = 'div';
var DEFAULT_LIBERATOR_MULTIPLE_CHILDREN_MARKER = 'react-liberator-multi';

var Liberator = function (_Component) {
    _inherits(Liberator, _Component);

    function Liberator(props) {
        _classCallCheck(this, Liberator);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Liberator).call(this, props));

        _this.state = {
            layerElement: null,
            wrapperElement: null
        };
        return _this;
    }

    _createClass(Liberator, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.active && this.props.visible) {
                this.activate(this.props.children);
                this.renderInPopup(this.props.children);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.deactivate(this.props.children);
        }
    }, {
        key: 'activate',
        value: function activate(children) {
            var layerElement = this.props.layer,
                layerId,
                wrapperElement;

            if (!layerElement) {
                layerId = this.props.layerId, layerElement = document.getElementById(layerId); // layer lookup
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
            if (this.props.className) {
                wrapperElement.className = this.props.className;
            }
            this.state.wrapperElement = wrapperElement;

            layerElement.appendChild(wrapperElement);

            this.props.onActivate({
                layer: this.state.layerElement,
                wrapper: this.state.wrapperElement,
                children: children
            });
        }
    }, {
        key: 'deactivate',
        value: function deactivate(children) {
            var wrapperElement = this.state.wrapperElement,
                layerElement = this.state.layerElement;

            this.props.onDeactivate({
                layer: this.state.layerElement,
                wrapper: this.state.wrapperElement,
                children: children
            });

            if (wrapperElement) {
                _reactDom2.default.unmountComponentAtNode(wrapperElement);
                if (layerElement) {
                    layerElement.removeChild(wrapperElement);
                }
                this.setState({
                    wrapperElement: null
                });
            }
            if (layerElement && !layerElement.childNodes.length && (this.props.autoCleanup || this.props.layerId === DEFAULT_LIBERATOR_LAYER_ID)) {
                // removing the default layer automatically
                // if no active popups, removing the layer altogether
                document.body.removeChild(layerElement);
                this.setState({
                    layerElement: null
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var changedActiveState = newProps.active !== this.props.active,
                changedVisibility = newProps.visible !== this.props.visible,
                isNowActive = newProps.active,
                isNowVisible = newProps.visible,
                shouldRenderInPopup = isNowActive && isNowVisible;

            if (changedActiveState || changedVisibility) {
                if (shouldRenderInPopup) {
                    this.activate(newProps.children);
                } else {
                    this.deactivate(newProps.children);
                }
            }

            if (shouldRenderInPopup) {
                return this.renderInPopup(newProps.children);
            } else {
                return null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.active || !this.props.visible) {
                return null; // short circuit here
            } else {
                    return this.wrapChildren(this.props.children);
                }
        }
    }, {
        key: 'wrapChildren',
        value: function wrapChildren(children) {
            if (!children) {
                return null;
            }

            if (children.length > 1) {
                // ReactDOM.render currently renders a single element only (https://facebook.github.io/react/docs/top-level-api.html#reactdom.render)
                // Until the API changes, we have to wrap children inside the additional DIV
                // We're marking this DIV with a class, so we the caller could differentiate this case
                return _react2.default.createElement(
                    'div',
                    { className: DEFAULT_LIBERATOR_MULTIPLE_CHILDREN_MARKER },
                    children
                );
            }

            return children;
        }
    }, {
        key: 'renderInPopup',
        value: function renderInPopup(children) {
            return (0, _reactDom.render)(this.wrapChildren(children), this.state.wrapperElement);
        }
    }]);

    return Liberator;
}(_react.Component);

exports.default = Liberator;

Liberator.propTypes = {
    active: _react2.default.PropTypes.bool,
    visible: _react2.default.PropTypes.bool,
    layer: _react2.default.PropTypes.node,
    layerId: _react2.default.PropTypes.string,
    layerElementType: _react2.default.PropTypes.string,
    autoCleanup: _react2.default.PropTypes.bool,
    onActivate: _react2.default.PropTypes.func,
    onDeactivate: _react2.default.PropTypes.func
};
Liberator.defaultProps = {
    active: true, // popping up by default
    visible: true, // visible by default
    layer: null, // we could pass the layer element to render the popup to (takes precedence to layerId/layerElementType),
    layerId: DEFAULT_LIBERATOR_LAYER_ID, // the ID of the element to render the popup to,
    layerElementType: DEFAULT_LIBERATOR_LAYER_ELEMENT_TYPE, // the type of the element to render the popup to,
    autoCleanup: false, // automatically destroying the layer when having no child elements
    onActivate: function onActivate() {},
    onDeactivate: function onDeactivate() {}
};