'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _customConnect = require('../../utils/customConnect');

var _customConnect2 = _interopRequireDefault(_customConnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    title: state.label.title
  };
};

exports.default = (0, _customConnect2.default)(_Label2.default, mapStateToProps);