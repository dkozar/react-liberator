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

var _reactBootstrap = require('react-bootstrap');

var _Toolbar = require('./Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Liberator = require('./Liberator');

var _Liberator2 = _interopRequireDefault(_Liberator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Demo1: {
        displayName: 'Demo1'
    }
};

var _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/Demo1.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/Demo1.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

require('./../styles/demo1.css');

var texts = ['This is the liberator.', 'It liberates the component from captivity of its siblings.', 'It\'s the foundation for popups.'];

var Demo1 = _wrapComponent('Demo1')(function (_Component) {
    _inherits(Demo1, _Component);

    function Demo1(props) {
        _classCallCheck(this, Demo1);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo1).call(this, props));

        _this.state = {
            visible: false,
            selectedIndex: 0,
            text: texts[0]
        };

        _this.onVisibilityChange = _this.onVisibilityChange.bind(_this);
        _this.onTextChange = _this.onTextChange.bind(_this);
        return _this;
    }

    _createClass(Demo1, [{
        key: 'onVisibilityChange',
        value: function onVisibilityChange() {
            this.setState({
                visible: !this.state.visible
            });
        }
    }, {
        key: 'onTextChange',
        value: function onTextChange(text) {
            this.setState({
                text: text
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var visible = this.state.visible,
                popup = visible ? _react3.default.createElement(
                _Liberator2.default,
                null,
                _react3.default.createElement(
                    'div',
                    { className: 'popup red' },
                    this.state.text
                )
            ) : null;

            return _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(
                    _reactBootstrap.Alert,
                    { bsStyle: 'info' },
                    _react3.default.createElement(
                        'h3',
                        null,
                        'Demo 1 - Liberate!'
                    ),
                    _react3.default.createElement('br', null),
                    _react3.default.createElement(
                        'strong',
                        null,
                        'Open the popup.'
                    ),
                    _react3.default.createElement('br', null),
                    _react3.default.createElement('br', null),
                    'It should be displayed in the bottom-right corner.',
                    _react3.default.createElement('br', null),
                    _react3.default.createElement('br', null),
                    'Then change text to see the popup change.',
                    _react3.default.createElement('br', null),
                    _react3.default.createElement('br', null),
                    'Also check the HTML in the console.'
                ),
                _react3.default.createElement(_Toolbar2.default, {
                    visible: visible,
                    selectedIndex: this.state.selectedIndex,
                    text: this.state.text,
                    onVisibilityChange: this.onVisibilityChange,
                    onTextChange: this.onTextChange }),
                popup
            );
        }
    }]);

    return Demo1;
}(_react2.Component));

exports.default = Demo1;