import { SelectedSubredditState } from './selectedSubreddit/types';
import { PostsBySubredditState } from './postsBySubreddit/types';
import { SubredditsState } from './subreddits/types';

export interface GlobalState {
    selectedSubreddit: SelectedSubredditState;
    postsBySubreddit: PostsBySubredditState;
    subreddits: SubredditsState;
}