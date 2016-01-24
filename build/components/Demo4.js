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

var _SourceLink = require('./SourceLink');

var _SourceLink2 = _interopRequireDefault(_SourceLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Demo4: {
        displayName: 'Demo4'
    }
};

var _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/Demo4.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _workspaceReactLiberatorNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/Demo4.js',
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

var Demo4 = _wrapComponent('Demo4')(function (_Component) {
    _inherits(Demo4, _Component);

    function Demo4(props) {
        _classCallCheck(this, Demo4);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo4).call(this, props));

        _this.state = {
            maximized: false,
            text: 'This is Liberator.'
        };

        _this.onButtonClick = _this.onButtonClick.bind(_this);
        return _this;
    }

    // button toggles maximized screen

    _createClass(Demo4, [{
        key: 'onButtonClick',
        value: function onButtonClick() {
            this.setState({
                maximized: !this.state.maximized
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var maximized = this.state.maximized,
                buttonIcon = maximized ? _react3.default.createElement('span', { className: 'glyphicon glyphicon-star' }) : _react3.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' }),
                buttonText = maximized ? 'Minimize' : 'Maximize',
                panelTitle = maximized ? 'This is the maximized panel' : 'This is the panel',
                text = _react3.default.createElement(
                'div',
                null,
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sollicitudin tortor vel sagittis. Nullam sagittis erat quis dolor convallis elementum. Nullam malesuada dapibus scelerisque. Curabitur eu tortor vitae leo gravida euismod. Praesent eget interdum ex. Nam venenatis nisl ipsum, in facilisis ligula dignissim nec. Duis in ante facilisis, interdum quam eget, malesuada purus. Phasellus vel quam convallis, interdum eros nec, malesuada orci. Suspendisse condimentum eget lectus vel semper. Nulla quis sem commodo, euismod purus nec, tincidunt dolor. Nullam ut justo neque. Phasellus lacinia lorem tortor, et rutrum nibh iaculis vel. In eget finibus dolor. Phasellus finibus, leo et sollicitudin tincidunt, eros magna rutrum libero, quis congue magna erat vitae orci.',
                _react3.default.createElement('br', null),
                _react3.default.createElement('br', null),
                'Proin semper eget mauris eu feugiat. Maecenas condimentum risus nec sem vehicula, quis ultricies velit rutrum. Duis pharetra sodales augue eu facilisis. Nullam tincidunt accumsan laoreet. Ut semper eu felis malesuada cursus. Morbi a ante sed tortor semper imperdiet. Fusce consequat vehicula est, vel feugiat ex feugiat sit amet. Nam tristique, tellus id rhoncus auctor, purus nisi gravida nisl, ut scelerisque massa tortor nec mauris. Donec lobortis, lectus non commodo scelerisque, ante nisi sagittis nisl, at aliquet nulla lacus at quam. Nam a dolor leo. Etiam nibh magna, vehicula nec nulla a, posuere posuere mi. Sed eleifend massa ut risus accumsan, sit amet hendrerit lectus lacinia. Aliquam elementum tempor mi, vel tempus lacus eleifend nec. Aenean mollis tristique lectus, vitae tempus urna scelerisque cursus. Fusce eu pretium purus, quis euismod mi. In hac habitasse platea dictumst.',
                _react3.default.createElement('br', null),
                _react3.default.createElement('br', null),
                'Vivamus viverra turpis id venenatis dictum. Nunc pharetra leo sed nibh elementum mollis. Cras metus urna, tincidunt a elit sed, bibendum aliquet nulla. Donec tincidunt et neque ac bibendum. Aliquam sit amet sollicitudin lorem. Maecenas vehicula orci vitae sollicitudin pharetra. Proin id eleifend purus. In hac habitasse platea dictumst. Pellentesque at venenatis sapien, eu commodo tortor. Nullam sit amet quam ullamcorper, eleifend eros vitae, commodo metus. Maecenas commodo cursus tellus a mollis. Donec et justo eu erat suscipit mattis. Mauris ut dolor tempus, mollis ipsum sed, sollicitudin ante. Quisque posuere ornare risus, id eleifend velit egestas nec.',
                _react3.default.createElement('br', null),
                _react3.default.createElement('br', null),
                'Vestibulum volutpat massa at elit condimentum mollis. Cras tristique feugiat quam, sit amet fringilla mi dapibus ac. Curabitur id nisl porta, tincidunt diam quis, sollicitudin lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam a consequat ligula. Donec lacinia sed massa id posuere. Aliquam erat volutpat. In eu ex consequat tellus vulputate gravida. Quisque malesuada congue porta. Duis blandit odio vitae enim tempor iaculis. Donec vitae nulla rutrum, sagittis tortor quis, blandit nulla. Phasellus sed elit interdum, convallis tortor in, semper magna. Sed sit amet venenatis ipsum. Nulla turpis metus, maximus sit amet tellus eget, molestie feugiat sapien.',
                _react3.default.createElement('br', null),
                _react3.default.createElement('br', null)
            ),
                popup = _react3.default.createElement(
                _reactBootstrap.Panel,
                { bsStyle: 'primary', className: 'indent-top', header: panelTitle },
                _react3.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: 'primary', bsSize: 'large', onClick: this.onButtonClick },
                    buttonIcon,
                    ' ',
                    buttonText
                ),
                _react3.default.createElement('br', null),
                _react3.default.createElement('br', null),
                text
            );

            return _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(
                    _reactBootstrap.Alert,
                    { bsStyle: 'success' },
                    _react3.default.createElement(
                        'h3',
                        null,
                        'Demo 4 - Maximized popup'
                    ),
                    _react3.default.createElement('br', null),
                    _react3.default.createElement(
                        'strong',
                        null,
                        'Click the button to show the panel maximized.'
                    ),
                    _react3.default.createElement('br', null),
                    _react3.default.createElement('br', null),
                    'It should be displayed in an overlay.',
                    _react3.default.createElement('br', null),
                    _react3.default.createElement('br', null),
                    'Panel is being maximized using styles (see demo4.css).',
                    _react3.default.createElement('br', null),
                    _react3.default.createElement('br', null),
                    _react3.default.createElement(
                        _SourceLink2.default,
                        null,
                        'Demo4.js'
                    ),
                    _react3.default.createElement('br', null),
                    _react3.default.createElement('br', null)
                ),
                _react3.default.createElement(
                    _Liberator2.default,
                    { className: 'full-screen',
                        active: maximized },
                    _react3.default.createElement(
                        'div',
                        null,
                        popup
                    )
                )
            );
        }
    }]);

    return Demo4;
}(_react2.Component));

exports.default = Demo4;