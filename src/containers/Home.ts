import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Home from '../screens/Home';

import { selectSubreddit } from '../store/selectedSubreddit/actions';
import { addSubreddit, deleteSubreddit } from '../store/subreddits/actions';

type DispatchType = SelectedSubredditAction | SubredditsActionTypes_U;

const mapStateToProps = (
    state: GlobalState,
) => ({
    subreddits: state.subreddits,
});

const mapDispatchToProps = (
    dispatch: Dispatch<DispatchType>,
) => ({
    onSelectSubreddit: (sr: string) => dispatch(selectSubreddit(sr)),
    onAddSubreddit:    (sr: string) => dispatch(addSubreddit(sr)),
    onDeleteSubreddit: (sr: string) => dispatch(deleteSubreddit(sr)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
