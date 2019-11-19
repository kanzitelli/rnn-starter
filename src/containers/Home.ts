import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Home from '../screens/Home';

import { GlobalState } from '../store/types';
import { NavigationComponent } from '.';
import { selectSubreddit }         from '../store/selectedSubreddit/actions';
import { SelectedSubredditAction } from '../store/selectedSubreddit/types';
import { addSubreddit, deleteSubreddit }          from '../store/subreddits/actions';
import { SubredditsActionTypes_U, SubredditInfo } from '../store/subreddits/types';

interface Props {
    subreddits: SubredditInfo[],
  
    onSelectSubreddit: (sr: string) => void,
    onAddSubreddit: (sr: string) => void,
    onDeleteSubreddit: (sr: string) => void,
}

type DispatchType = SelectedSubredditAction | SubredditsActionTypes_U;

const mapStateToProps = (
    state: GlobalState
) => ({
    subreddits: state.subreddits,
});

const mapDispatchToProps = (
    dispatch: Dispatch<DispatchType>
) => ({
    onSelectSubreddit: (sr: string) => dispatch(selectSubreddit(sr)),
    onAddSubreddit:    (sr: string) => dispatch(addSubreddit(sr)),
    onDeleteSubreddit: (sr: string) => dispatch(deleteSubreddit(sr)),
});

export type HomeComponentType = NavigationComponent<Props>

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);