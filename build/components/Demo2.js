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

require('./../styles/demo2.css');

var texts = ['This is Liberator.', 'It liberates components from captivity of their siblings.', 'It\'s a foundation for popups.'];

var Demo2 = function (_Component) {
    _inherits(Demo2, _Component);

    function Demo2(props) {
        _classCallCheck(this, Demo2);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo2).call(this, props));

        _this.state = {
            visible: false,
            selectedIndex: 0,
            text: texts[0]
        };

        _this.hidePopup = _this.hidePopup.bind(_this);
        _this.onVisibilityChange = _this.onVisibilityChange.bind(_this);
        _this.onTextChange = _this.onTextChange.bind(_this);
        return _this;
    }

    _createClass(Demo2, [{
        key: 'onVisibilityChange',
        value: function onVisibilityChange() {
            this.setState({
                visible: !this.state.visible
            });
        }
    }, {
        key: 'hidePopup',
        value: function hidePopup() {
            this.setState({
                visible: false
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
                buttonIcon = visible ? _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }) : _react2.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' }),
                buttonText = visible ? 'Hide popup' : 'Show popup',
                popup = visible ? _react2.default.createElement(
                _Liberator2.default,
                null,
                _react2.default.createElement('div', { className: 'static-modal modal-backdrop fade in' }),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Dialog,
                        { animation: true },
                        _react2.default.createElement(
                            _reactBootstrap.Modal.Header,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Modal.Title,
                                null,
                                'Popup dialog'
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Modal.Body,
                            null,
                            'This is a popup wrapped into Liberator.',
                            _react2.default.createElement('br', null),
                            _react2.default.createElement('br', null),
                            'Check out the HTML using inspector.',
                            _react2.default.createElement('br', null),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(_Toolbar2.default, {
                                showButton: false,
                                visible: visible,
                                selectedIndex: this.state.selectedIndex,
                                text: this.state.text,
                                onVisibilityChange: this.onVisibilityChange,
                                onTextChange: this.onTextChange }),
                            _react2.default.createElement('br', null),
                            'Selected text: ',
                            this.state.text
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Modal.Footer,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { bsStyle: 'primary', bsSize: 'large', onClick: this.hidePopup },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
                                ' Hide popup'
                            )
                        )
                    )
                )
            ) : null;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Alert,
                    { bsStyle: 'success' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Demo 2 - Popup'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Open the popup.'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    'It should be displayed in an overlay.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    'Then change text to see that popup internals work.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        _SourceLink2.default,
                        null,
                        'Demo2.js'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null)
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { bsStyle: 'primary', bsSize: 'large', onClick: this.onVisibilityChange },
                        buttonIcon,
                        ' ',
                        buttonText
                    ),
                    popup
                )
            );
        }
    }]);

    return Demo2;
}(_react.Component);

exports.default = Demo2;