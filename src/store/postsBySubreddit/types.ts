// =================
// ACTIONS
// =================
interface RequestPostsAction {
    type: string;
    subreddit: string;
}

interface DeletePostsAction {
    type: string;
    subreddit: string;
}

interface ReceivePostsAction {
    type: string;
    subreddit: string;
    posts: any[];
    receivedAt: number;
}

interface FailReceivePostsAction {
    type: string;
    subreddit: string;
    error: Error | null;
    receivedAt: number;
}

type PostsActionTypes_U = (
    RequestPostsAction |
    ReceivePostsAction |
    FailReceivePostsAction |
    DeletePostsAction
); // Union Types
type PostsActionTypes_I = (
    RequestPostsAction &
    ReceivePostsAction &
    FailReceivePostsAction &
    DeletePostsAction
); // Intersection Types

// =================
// REDUCERS
// =================
interface PostsBySubredditState {
    [subreddit: string]: PostsState;
}

interface PostsState {
    isFetching: boolean;
    items: any[];
    error: Error | null;
    lastUpdated: number;
}
