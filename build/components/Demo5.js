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

var fullscreen = require('fullscreen');

require('./../styles/demo5.css');

var Demo5 = function (_Component) {
    _inherits(Demo5, _Component);

    function Demo5(props) {
        _classCallCheck(this, Demo5);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo5).call(this, props));

        _this.state = {
            fullScreen: false,
            fullScreenRequest: false,
            fullScreenError: false,
            text: 'This is Liberator.'
        };

        _this.onButtonClick = _this.onButtonClick.bind(_this);
        _this.onFullScreenAttain = _this.syncWithFullScreenState.bind(_this, true);
        _this.onFullScreenRelease = _this.syncWithFullScreenState.bind(_this, false);
        return _this;
    }

    // button toggles full screen

    _createClass(Demo5, [{
        key: 'onButtonClick',
        value: function onButtonClick() {
            var isOn = !this.state.fullScreen;

            this.setState({
                fullScreenRequest: isOn
            });

            this.initiateFullScreen(isOn);
        }
    }, {
        key: 'initiateFullScreen',
        value: function initiateFullScreen(isOn) {
            if (isOn) {
                this.fsEmitter.request();
            } else {
                this.fsEmitter.release();
            }
        }

        // we are changing the fullScreen state indirectly (we initiate the full screen and then listen to its changes)
        // this is the more robust way to keep our app in sync with full screen (whichever way the full screen is initiated or terminated)

    }, {
        key: 'syncWithFullScreenState',
        value: function syncWithFullScreenState(isOn) {
            console.log('full screen', isOn);
            this.setState({
                fullScreen: isOn
            });
        }
    }, {
        key: 'onFullScreenError',
        value: function onFullScreenError(error) {
            this.setState({
                fullScreen: false,
                fullScreenError: true
            });
            console.log('Full screen isn\'t supported by this browser', error);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fsEmitter = fullscreen(document.body); // just for fun, let's pick another element (and not liberator overlay)
            this.fsEmitter.on('attain', this.onFullScreenAttain);
            this.fsEmitter.on('release', this.onFullScreenRelease);
            this.fsEmitter.on('error', this.onFullScreenError);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.fsEmitter.dispose();
        }
    }, {
        key: 'render',
        value: function render() {
            var fullScreen = this.state.fullScreen,
                isError = this.state.fullScreenError,
                buttonIcon = fullScreen ? _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }) : _react2.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' }),
                buttonText = fullScreen ? 'Exit full screen' : 'Show full screen',
                panelTitle = fullScreen ? 'This is the panel in full screen mode' : 'This is the panel',
                text = _react2.default.createElement(
                'div',
                null,
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sollicitudin tortor vel sagittis. Nullam sagittis erat quis dolor convallis elementum. Nullam malesuada dapibus scelerisque. Curabitur eu tortor vitae leo gravida euismod. Praesent eget interdum ex. Nam venenatis nisl ipsum, in facilisis ligula dignissim nec. Duis in ante facilisis, interdum quam eget, malesuada purus. Phasellus vel quam convallis, interdum eros nec, malesuada orci. Suspendisse condimentum eget lectus vel semper. Nulla quis sem commodo, euismod purus nec, tincidunt dolor. Nullam ut justo neque. Phasellus lacinia lorem tortor, et rutrum nibh iaculis vel. In eget finibus dolor. Phasellus finibus, leo et sollicitudin tincidunt, eros magna rutrum libero, quis congue magna erat vitae orci.',
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                'Proin semper eget mauris eu feugiat. Maecenas condimentum risus nec sem vehicula, quis ultricies velit rutrum. Duis pharetra sodales augue eu facilisis. Nullam tincidunt accumsan laoreet. Ut semper eu felis malesuada cursus. Morbi a ante sed tortor semper imperdiet. Fusce consequat vehicula est, vel feugiat ex feugiat sit amet. Nam tristique, tellus id rhoncus auctor, purus nisi gravida nisl, ut scelerisque massa tortor nec mauris. Donec lobortis, lectus non commodo scelerisque, ante nisi sagittis nisl, at aliquet nulla lacus at quam. Nam a dolor leo. Etiam nibh magna, vehicula nec nulla a, posuere posuere mi. Sed eleifend massa ut risus accumsan, sit amet hendrerit lectus lacinia. Aliquam elementum tempor mi, vel tempus lacus eleifend nec. Aenean mollis tristique lectus, vitae tempus urna scelerisque cursus. Fusce eu pretium purus, quis euismod mi. In hac habitasse platea dictumst.',
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                'Vivamus viverra turpis id venenatis dictum. Nunc pharetra leo sed nibh elementum mollis. Cras metus urna, tincidunt a elit sed, bibendum aliquet nulla. Donec tincidunt et neque ac bibendum. Aliquam sit amet sollicitudin lorem. Maecenas vehicula orci vitae sollicitudin pharetra. Proin id eleifend purus. In hac habitasse platea dictumst. Pellentesque at venenatis sapien, eu commodo tortor. Nullam sit amet quam ullamcorper, eleifend eros vitae, commodo metus. Maecenas commodo cursus tellus a mollis. Donec et justo eu erat suscipit mattis. Mauris ut dolor tempus, mollis ipsum sed, sollicitudin ante. Quisque posuere ornare risus, id eleifend velit egestas nec.',
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                'Vestibulum volutpat massa at elit condimentum mollis. Cras tristique feugiat quam, sit amet fringilla mi dapibus ac. Curabitur id nisl porta, tincidunt diam quis, sollicitudin lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam a consequat ligula. Donec lacinia sed massa id posuere. Aliquam erat volutpat. In eu ex consequat tellus vulputate gravida. Quisque malesuada congue porta. Duis blandit odio vitae enim tempor iaculis. Donec vitae nulla rutrum, sagittis tortor quis, blandit nulla. Phasellus sed elit interdum, convallis tortor in, semper magna. Sed sit amet venenatis ipsum. Nulla turpis metus, maximus sit amet tellus eget, molestie feugiat sapien.',
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null)
            ),
                alert = isError ? _react2.default.createElement(
                _reactBootstrap.Alert,
                { bsStyle: 'danger' },
                _react2.default.createElement(
                    'strong',
                    null,
                    'Error: '
                ),
                'This platform doesn\'t support full screen.'
            ) : null,
                popup = _react2.default.createElement(
                _reactBootstrap.Panel,
                { bsStyle: 'primary', className: 'indent-top', header: this.props.params.title || panelTitle },
                alert,
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: 'primary', bsSize: 'large', onClick: this.onButtonClick },
                    buttonIcon,
                    ' ',
                    buttonText
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                this.props.params.text || text
            );

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
                            'Demo 5 - Full screen sync'
                        )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Click the button to show panel in full screen.'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    'It should be displayed in an overlay.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    'Its size is kept in sync with a full screen state (maximized when in full screen mode).',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        _SourceLink2.default,
                        null,
                        'Demo5.js'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null)
                ),
                _react2.default.createElement(
                    _Liberator2.default,
                    { className: 'full-screen',
                        active: fullScreen },
                    _react2.default.createElement(
                        'div',
                        null,
                        popup
                    )
                )
            );
        }
    }]);

    return Demo5;
}(_react.Component);

exports.default = Demo5;