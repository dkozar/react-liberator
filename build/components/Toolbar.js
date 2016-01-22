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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Toolbar: {
        displayName: 'Toolbar'
    }
};

var _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/Toolbar.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/Toolbar.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var texts = ['This is Liberator.', 'It liberates components from captivity of their siblings.', 'It\'s the foundation for popups.'];

var Toolbar = _wrapComponent('Toolbar')(function (_Component) {
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
                buttonIcon = visible ? _react3.default.createElement('span', { className: 'glyphicon glyphicon-star' }) : _react3.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' }),
                buttonText = visible ? 'Hide popup' : 'Show popup';

            return _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(
                    _reactBootstrap.ButtonToolbar,
                    null,
                    this.props.showButton ? _react3.default.createElement(
                        _reactBootstrap.Button,
                        { bsStyle: 'primary', bsSize: 'large', onClick: this.onShowButtonClick },
                        buttonIcon,
                        ' ',
                        buttonText
                    ) : null,
                    _react3.default.createElement(
                        _reactBootstrap.ButtonGroup,
                        { bsSize: 'large', className: 'indent-left' },
                        _react3.default.createElement(
                            _reactBootstrap.Button,
                            { bsSize: 'large', onClick: this.onTextChange.bind(this, 0) },
                            'Text 1'
                        ),
                        _react3.default.createElement(
                            _reactBootstrap.Button,
                            { bsSize: 'large', onClick: this.onTextChange.bind(this, 1) },
                            'Text 2'
                        ),
                        _react3.default.createElement(
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
}(_react2.Component));

exports.default = Toolbar;

Toolbar.propTypes = {
    showButton: _react3.default.PropTypes.bool,
    onVisibilityChange: _react3.default.PropTypes.func,
    onTextChange: _react3.default.PropTypes.func
};
Toolbar.defaultProps = {
    showButton: true,
    onVisibilityChange: function onVisibilityChange() {},
    onTextChange: function onTextChange() {}
};