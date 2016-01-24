'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Toolbar = require('./Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Liberator = require('./Liberator');

var _Liberator2 = _interopRequireDefault(_Liberator);

var _SourceLink = require('./SourceLink');

var _SourceLink2 = _interopRequireDefault(_SourceLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./../styles/demo3.css');

var Demo3 = function (_Component) {
    _inherits(Demo3, _Component);

    function Demo3(props) {
        _classCallCheck(this, Demo3);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo3).call(this, props));

        _this.state = {
            active: false,
            visible: true
        };

        _this.onButtonClick = _this.onButtonClick.bind(_this);
        _this.changeVisibility = _this.changeVisibility.bind(_this);
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
        key: 'changeVisibility',
        value: function changeVisibility() {
            this.setState({
                visible: !this.state.visible
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var active = this.state.active,
                visible = this.state.visible,
                className = 'popup ',
                buttonIcon = active ? _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }) : _react2.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' }),
                buttonText = active ? 'Active: true' : 'Active: false',
                buttonIcon2 = visible ? _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }) : _react2.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' }),
                buttonText2 = visible ? 'Visible: true' : 'Visible: false';

            className += active ? 'green' : 'red';

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Alert,
                    { bsStyle: 'info' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Demo 3 - Activate / deactivate'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'strong',
                        null,
                        'The element could be permanently wrapped into Liberator.'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    'Setting the ',
                    _react2.default.createElement(
                        'b',
                        null,
                        'active'
                    ),
                    ' switch to ',
                    _react2.default.createElement(
                        'i',
                        null,
                        'true'
                    ),
                    ' renders it in a popup.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    'Setting the ',
                    _react2.default.createElement(
                        'b',
                        null,
                        'active'
                    ),
                    ' switch to ',
                    _react2.default.createElement(
                        'i',
                        null,
                        'false'
                    ),
                    ' renders it as a child.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    'Setting the ',
                    _react2.default.createElement(
                        'b',
                        null,
                        'visible'
                    ),
                    ' switch to ',
                    _react2.default.createElement(
                        'i',
                        null,
                        'false'
                    ),
                    ' hides it altogether.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    'Check out the HTML in the inspector.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        _SourceLink2.default,
                        null,
                        'Demo3.js'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null)
                ),
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: 'primary', bsSize: 'large', onClick: this.onButtonClick },
                    buttonIcon,
                    ' ',
                    buttonText
                ),
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsSize: 'large', className: 'indent-left', onClick: this.changeVisibility },
                    buttonIcon2,
                    ' ',
                    buttonText2
                ),
                _react2.default.createElement(
                    _Liberator2.default,
                    { active: active, visible: visible },
                    _react2.default.createElement(
                        'div',
                        { className: className },
                        active ? 'In popup' : 'Normal'
                    )
                )
            );
        }
    }]);

    return Demo3;
}(_react.Component);

exports.default = Demo3;