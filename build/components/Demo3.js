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
    Demo3: {
        displayName: 'Demo3'
    }
};

var _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/Demo3.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/Demo3.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

require('./../styles/demo4.css');

var Demo3 = _wrapComponent('Demo3')(function (_Component) {
    _inherits(Demo3, _Component);

    function Demo3(props) {
        _classCallCheck(this, Demo3);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo3).call(this, props));

        _this.state = {
            active: false
        };

        _this.onButtonClick = _this.onButtonClick.bind(_this);
        return _this;
    }

    _createClass(Demo3, [{
        key: 'onButtonClick',
        value: function onButtonClick() {
            this.setState({
                active: !this.state.active
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var active = this.state.active,
                className = 'popup ',
                buttonIcon = active ? _react3.default.createElement('span', { className: 'glyphicon glyphicon-star' }) : _react3.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' }),
                buttonText = active ? 'Show normal' : 'Show in popup';

            className += active ? 'green' : 'red';

            return _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(
                    _reactBootstrap.Alert,
                    { bsStyle: 'info' },
                    _react3.default.createElement(
                        'h3',
                        null,
                        'Demo 3 - Activate / deactivate'
                    ),
                    _react3.default.createElement('br', null),
                    _react3.default.createElement(
                        'strong',
                        null,
                        'The element could be always wrapped into Liberator.'
                    ),
                    _react3.default.createElement('br', null),
                    _react3.default.createElement('br', null),
                    'Using the "active" switch we could render it in popup.',
                    _react3.default.createElement('br', null),
                    _react3.default.createElement('br', null),
                    'Check the HTML in the console.'
                ),
                _react3.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: 'primary', bsSize: 'large', onClick: this.onButtonClick },
                    buttonIcon,
                    ' ',
                    buttonText
                ),
                _react3.default.createElement(
                    _Liberator2.default,
                    { active: active },
                    _react3.default.createElement(
                        'div',
                        { className: className },
                        active ? 'In popup' : 'Normal'
                    )
                )
            );
        }
    }]);

    return Demo3;
}(_react2.Component));

exports.default = Demo3;