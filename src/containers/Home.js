import { connect } from 'react-redux';

import Home from '../screens/Home';
import Actions from '../store/actions';

const mapStateToProps = state => ({
    subreddits: state.subreddits,
});

const mapDispatchToProps = dispatch => ({
    onSelectSubreddit: sr => dispatch(Actions.selectSubreddit(sr)),
    onAddSubreddit: sr => dispatch(Actions.addSubreddit(sr)),
    onDeleteSubreddit: sr => dispatch(Actions.deleteSubreddit(sr)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);