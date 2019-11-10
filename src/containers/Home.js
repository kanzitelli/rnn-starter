import { connect } from 'react-redux';

import Home from '../screens/Home';
import { 
    selectSubreddit,
    addSubreddit,
    deleteSubreddit,
} from '../store/actions';

const mapStateToProps = state => ({
    subreddits: state.subreddits,
});

const mapDispatchToProps = dispatch => ({
    onSelectSubreddit: sr => dispatch(selectSubreddit(sr)),
    onAddSubreddit: sr => dispatch(addSubreddit(sr)),
    onDeleteSubreddit: sr => dispatch(deleteSubreddit(sr)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);