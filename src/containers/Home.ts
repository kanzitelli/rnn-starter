import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Home from '../screens/Home';

import { GlobalState } from '../store/types';
import { selectSubreddit }         from '../store/selectedSubreddit/actions';
import { SelectedSubredditAction } from '../store/selectedSubreddit/types';
import { addSubreddit, deleteSubreddit }          from '../store/subreddits/actions';
import { SubredditsActionTypes_U, SubredditInfo } from '../store/subreddits/types';

export interface Props {
    subreddits: SubredditInfo[],
  
    onSelectSubreddit: Function,
    onAddSubreddit: Function,
    onDeleteSubreddit: Function,
}

type DispatchType = SelectedSubredditAction | SubredditsActionTypes_U;

const mapStateToProps = (
    state: GlobalState
): Partial<Props> => ({
    subreddits: state.subreddits,
});

const mapDispatchToProps = (
    dispatch: Dispatch<DispatchType>
): Partial<Props> => ({
    onSelectSubreddit: (sr: string) => dispatch(selectSubreddit(sr)),
    onAddSubreddit:    (sr: string) => dispatch(addSubreddit(sr)),
    onDeleteSubreddit: (sr: string) => dispatch(deleteSubreddit(sr)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);