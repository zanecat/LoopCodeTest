import { connect } from 'react-redux';
import NodeList from '../components/NodeList';

const mapStateToProps = (state, ownProps) => {
  return {
    nodes: state.nodes,
    members: state.members
  };
};

export default connect(mapStateToProps)(NodeList);
