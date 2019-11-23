// =================
// ACTIONS
// =================
interface AddSubredditAction {
    type: string;
    subreddit: string;
}

interface DeleteSubredditAction {
    type: string;
    subreddit: string;
}

type SubredditsActionTypes_U = (AddSubredditAction | DeleteSubredditAction); // Union Types
type SubredditsActionTypes_I = (AddSubredditAction & DeleteSubredditAction); // Intersection Types

// =================
// REDUCERS
// =================
interface SubredditInfo {
    title: string;
}

type SubredditsState = SubredditInfo[];
