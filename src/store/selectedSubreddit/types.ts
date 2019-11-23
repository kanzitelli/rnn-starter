// =================
// ACTIONS
// =================
interface SelectedSubredditAction {
    type: string;
    subreddit: string;
}

// =================
// REDUCERS
// =================
type SelectedSubredditState = string;
