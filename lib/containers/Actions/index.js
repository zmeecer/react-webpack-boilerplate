'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _actions = require('../../actions');

var _customConnect = require('../../utils/customConnect');

var _customConnect2 = _interopRequireDefault(_customConnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLabelChange: function onLabelChange(title) {
      return dispatch({ type: _actions.CHANGE_LABEL, payload: title });
    }
  };
};

exports.default = (0, _customConnect2.default)(_Actions2.default, null, mapDispatchToProps);