'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Liberator = undefined;

var _index = require('/workspace/react-liberator/node_modules/babel-preset-react-hmre/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/workspace/react-liberator/node_modules/babel-preset-react-hmre/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/workspace/react-liberator/node_modules/babel-preset-react-hmre/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _reactDom = require('react-dom');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

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
var count = 0;

var Liberator = exports.Liberator = _wrapComponent('Liberator')(function (_Component) {
    _inherits(Liberator, _Component);

    function Liberator(props) {
        _classCallCheck(this, Liberator);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Liberator).call(this, props));

        _this.state = {
            layerElement: null,
            parentElement: null
        };
        return _this;
    }

    _createClass(Liberator, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            //console.log('liberator mount');
            var layerId = this.props.layerId,
                layerElement = document.getElementById(layerId),
                parentElement;

            if (!layerElement) {
                layerElement = document.createElement('div');
                layerElement.setAttribute("id", layerId);
                document.body.appendChild(layerElement);
            }

            this.state.layerElement = layerElement;

            count += 1;

            parentElement = document.createElement('div');
            parentElement.setAttribute('id', this.props.layerId + count + '___');
            this.state.parentElement = parentElement;

            layerElement.appendChild(parentElement);

            this.doRender(this.props.children);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            //console.log('liberator unmount');
            this.doRender(null);
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            //console.log('liberator componentWillUpdate');
            this.doRender(this.props.children);
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }, {
        key: 'doRender',
        value: function doRender(children) {
            var styles = _lodash2.default.assign({
                position: 'fixed',
                top: 0,
                left: 0
            }, this.props.styles);

            (0, _reactDom.render)(_react3.default.createElement(
                'div',
                { style: styles },
                children
            ), this.state.parentElement);
        }
    }]);

    return Liberator;
}(_react2.Component));

Liberator.propTypes = { layerId: _react3.default.PropTypes.string };
Liberator.defaultProps = { layerId: DEFAULT_LIBERATOR_LAYER_ID, styles: {} };