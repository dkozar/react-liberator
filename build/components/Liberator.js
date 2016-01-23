'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('/workspace/react-liberator/node_modules/babel-preset-react-hmre/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/workspace/react-liberator/node_modules/babel-preset-react-hmre/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/workspace/react-liberator/node_modules/babel-preset-react-hmre/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Liberator: {
        displayName: 'Liberator'
    }
};

var _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/Liberator.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/Liberator.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var DEFAULT_LIBERATOR_LAYER_ID = '___liberator___';

var Liberator = _wrapComponent('Liberator')(function (_Component) {
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
                this.activate();
                this.renderInPopup(this.props.children);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.deactivate();
        }
    }, {
        key: 'activate',
        value: function activate() {
            var layerId = this.props.layerId,
                layerElement = document.getElementById(layerId),
                // layer lookup
            wrapperElement;

            if (!layerElement) {
                // if we haven't found the predefined div, we're creating it on the fly
                layerElement = document.createElement('div');
                layerElement.setAttribute("id", layerId);
                document.body.appendChild(layerElement);
            }

            this.state.layerElement = layerElement;

            // we're creating the wrapper element on the fly
            // we're rendering the component into this element when active
            wrapperElement = document.createElement('div');
            wrapperElement.className = this.props.className || '';
            this.state.wrapperElement = wrapperElement;

            layerElement.appendChild(wrapperElement);
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            var wrapperElement = this.state.wrapperElement,
                layerElement = this.state.layerElement;

            if (wrapperElement) {
                if (layerElement) {
                    layerElement.removeChild(wrapperElement);
                }
                this.setState({
                    wrapperElement: null
                });
                _reactDom2.default.unmountComponentAtNode(wrapperElement);
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
                return _react3.default.createElement(
                    'div',
                    null,
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
}(_react2.Component));

exports.default = Liberator;

Liberator.propTypes = {
    active: _react3.default.PropTypes.bool,
    visible: _react3.default.PropTypes.bool,
    layerId: _react3.default.PropTypes.string,
    autoCleanup: _react3.default.PropTypes.bool
};
Liberator.defaultProps = {
    active: true, // popping up by default
    visible: true, // visible by default
    layerId: DEFAULT_LIBERATOR_LAYER_ID, // the ID of the element to render the popup to,
    autoCleanup: false // automatically destroying the layer when having no child elements
};