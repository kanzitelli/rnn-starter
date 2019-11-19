import {
    ADD_SUBREDDIT,
    DELETE_SUBREDDIT,
} from './actions';

// =================
// ACTIONS
// =================
export interface AddSubredditAction {
    type: typeof ADD_SUBREDDIT;
    subreddit: string;
}

export interface DeleteSubredditAction {
    type: typeof DELETE_SUBREDDIT;
    subreddit: string;
}

export type SubredditsActionTypes_U = (AddSubredditAction | DeleteSubredditAction); // Union Types
export type SubredditsActionTypes_I = (AddSubredditAction & DeleteSubredditAction); // Intersection Types

// =================
// REDUCERS
// =================
export interface SubredditInfo {
    title: string;
}

export type SubredditsState = SubredditInfo[];
