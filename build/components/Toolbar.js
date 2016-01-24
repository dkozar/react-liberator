'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var texts = ['This is Liberator.', 'It liberates components from captivity of their siblings.', 'It\'s the foundation for popups.'];

var Toolbar = function (_Component) {
    _inherits(Toolbar, _Component);

    function Toolbar(props) {
        _classCallCheck(this, Toolbar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Toolbar).call(this, props));

        _this.state = {
            visible: _this.props.visible,
            text: _this.props.text
        };

        _this.onShowButtonClick = _this.onShowButtonClick.bind(_this);
        _this.onTextChange = _this.onTextChange.bind(_this);
        return _this;
    }

    _createClass(Toolbar, [{
        key: 'onShowButtonClick',
        value: function onShowButtonClick() {
            this.setState({
                visible: !this.state.visible
            });
            this.props.onVisibilityChange(this.state.visible);
        }
    }, {
        key: 'onTextChange',
        value: function onTextChange(index) {
            this.props.onTextChange(texts[index]);
        }
    }, {
        key: 'render',
        value: function render() {
            var visible = this.props.visible,
                buttonIcon = visible ? _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }) : _react2.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' }),
                buttonText = visible ? 'Hide popup' : 'Show popup';

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.ButtonToolbar,
                    null,
                    this.props.showButton ? _react2.default.createElement(
                        _reactBootstrap.Button,
                        { bsStyle: 'primary', bsSize: 'large', onClick: this.onShowButtonClick },
                        buttonIcon,
                        ' ',
                        buttonText
                    ) : null,
                    _react2.default.createElement(
                        _reactBootstrap.ButtonGroup,
                        { bsSize: 'large', className: 'indent-left' },
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { bsSize: 'large', onClick: this.onTextChange.bind(this, 0) },
                            'Text 1'
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { bsSize: 'large', onClick: this.onTextChange.bind(this, 1) },
                            'Text 2'
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { bsSize: 'large', onClick: this.onTextChange.bind(this, 2) },
                            'Text 3'
                        )
                    )
                )
            );
        }
    }]);

    return Toolbar;
}(_react.Component);

exports.default = Toolbar;

Toolbar.propTypes = {
    showButton: _react2.default.PropTypes.bool,
    onVisibilityChange: _react2.default.PropTypes.func,
    onTextChange: _react2.default.PropTypes.func
};
Toolbar.defaultProps = {
    showButton: true,
    onVisibilityChange: function onVisibilityChange() {},
    onTextChange: function onTextChange() {}
};