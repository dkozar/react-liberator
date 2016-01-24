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

require('./../styles/demo1.css');

var texts = ['This is Liberator.', 'It liberates components from captivity of their siblings.', 'It\'s the foundation for popups.'];

var Demo1 = function (_Component) {
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
                popup = visible ? _react2.default.createElement(
                _Liberator2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'popup red' },
                    this.state.text
                )
            ) : null;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Alert,
                    { bsStyle: 'info' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        _react2.default.createElement(
                            _reactWrappyText2.default,
                            null,
                            'Demo 1 - Liberate!'
                        )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Open the popup.'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    'It will be displayed in the bottom-right corner.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    'Then change text to see the popup change.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    'Also check the HTML in browser inspector.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        _SourceLink2.default,
                        null,
                        'Demo1.js'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null)
                ),
                _react2.default.createElement(_Toolbar2.default, {
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
}(_react.Component);

exports.default = Demo1;