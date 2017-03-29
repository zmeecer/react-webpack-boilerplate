import Actions from './Actions';
import { CHANGE_LABEL } from '../../actions';
import customConnect from '../../utils/customConnect';

const mapDispatchToProps = dispatch => ({
  onLabelChange: title => dispatch({ type: CHANGE_LABEL, payload: title })
});

export default customConnect(Actions, null, mapDispatchToProps);