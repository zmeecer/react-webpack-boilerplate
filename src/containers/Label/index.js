import Label from './Label';
import customConnect from '../../utils/customConnect';

const mapStateToProps = state => ({
  title: state.label.title,
});

export default customConnect(Label, mapStateToProps);
