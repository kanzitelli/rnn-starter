import { connect } from 'react-redux';

import Home from '../screens/Home';
import actions from '../store/actions';

const mapStateToProps = state => ({
    subreddits: state.subreddits,
});

const mapDispatchToProps = dispatch => ({
    onSelectSubreddit: sr => dispatch(actions.selectSubreddit(sr)),
    onAddSubreddit: sr => dispatch(actions.addSubreddit(sr)),
    onDeleteSubreddit: sr => dispatch(actions.deleteSubreddit(sr)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);