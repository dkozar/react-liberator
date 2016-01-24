'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _demos = require('./../demos');

var _reactWrappyText = require('react-wrappy-text');

var _reactWrappyText2 = _interopRequireDefault(_reactWrappyText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./../styles/main.css');

var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Index).apply(this, arguments));
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.params[0],
                _react2.default.createElement(
                    'h1',
                    null,
                    _react2.default.createElement(
                        _reactWrappyText2.default,
                        null,
                        'What\'s on the menu?'
                    )
                ),
                _react2.default.createElement(
                    'blockquote',
                    null,
                    'Here are some Liberator demos.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    '[ ',
                    _react2.default.createElement(
                        'em',
                        null,
                        'react-liberator'
                    ),
                    ' is a plugin for ReactJS. It allows React components to render their DOM away from their siblings. ]'
                ),
                _react2.default.createElement(
                    _reactBootstrap.ListGroup,
                    null,
                    _demos.demos.map(function (demo) {
                        return _react2.default.createElement(
                            _reactBootstrap.ListGroupItem,
                            { key: demo.url,
                                href: '#/' + demo.url,
                                header: demo.title },
                            demo.description
                        );
                    })
                )
            );
        }
    }]);

    return Index;
}(_react.Component);

exports.default = Index;