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

var _reactWrappyText = require('react-wrappy-text');

var _reactWrappyText2 = _interopRequireDefault(_reactWrappyText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./../styles/demo6.css');

var Demo6 = function (_Component) {
    _inherits(Demo6, _Component);

    function Demo6(props) {
        _classCallCheck(this, Demo6);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo6).call(this, props));

        _this.state = {
            active: false,
            visible: true
        };

        _this.onButtonClick = _this.onButtonClick.bind(_this);
        _this.changeVisibility = _this.changeVisibility.bind(_this);
        return _this;
    }

    _createClass(Demo6, [{
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
                className = 'popup ' + (active ? 'green' : 'red'),
                buttonIcon = active ? _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }) : _react2.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' }),
                buttonText = active ? 'Active: true' : 'Active: false',
                buttonIcon2 = visible ? _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }) : _react2.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' }),
                buttonText2 = visible ? 'Visible: true' : 'Visible: false',
                classNameLeft = className + ' left',
                classNameRight = className + ' right';

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Alert,
                    { bsStyle: 'success' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        _react2.default.createElement(
                            _reactWrappyText2.default,
                            null,
                            'Demo 6 - Multiple children'
                        )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Click the buttons to liberate both children.'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    'Two children are wrapped into single Liberator.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    'Both are displayed in the same overlay.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        _SourceLink2.default,
                        null,
                        'Demo6.js'
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
                        { className: classNameLeft },
                        active ? 'In popup' : 'Normal'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: classNameRight },
                        active ? 'In popup' : 'Normal'
                    )
                )
            );
        }
    }]);

    return Demo6;
}(_react.Component);

exports.default = Demo6;