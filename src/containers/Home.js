import { connect } from 'react-redux';

import Home from '../screens/Home';
import { selectSubreddit, addSubreddit } from '../store/actions';

const mapStateToProps = state => ({
    subreddits: state.subreddits,
});

const mapDispatchToProps = dispatch => ({
    onSelectSubreddit: sr => dispatch(selectSubreddit(sr)),
    onAddSubreddit: sr => dispatch(addSubreddit(sr))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);