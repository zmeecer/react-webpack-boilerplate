'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _store = require('../../store');

var _store2 = _interopRequireDefault(_store);

var _Label = require('../../containers/Label');

var _Label2 = _interopRequireDefault(_Label);

require('./Module.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Module = function (_Component) {
  _inherits(Module, _Component);

  function Module() {
    _classCallCheck(this, Module);

    return _possibleConstructorReturn(this, (Module.__proto__ || Object.getPrototypeOf(Module)).apply(this, arguments));
  }

  _createClass(Module, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        appframeStore: _store2.default
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'App' },
          _react2.default.createElement(
            'div',
            { className: 'App-header' },
            _react2.default.createElement(_Label2.default, null)
          ),
          this.props.children
        )
      );
    }
  }]);

  return Module;
}(_react.Component);

Module.childContextTypes = {
  appframeStore: _react.PropTypes.shape({
    subscribe: _react.PropTypes.func.isRequired,
    dispatch: _react.PropTypes.func.isRequired,
    getState: _react.PropTypes.func.isRequired
  })
};

Module.propTypes = {
  children: _react.PropTypes.any
};

exports.default = Module;