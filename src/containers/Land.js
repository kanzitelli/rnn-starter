import { connect } from 'react-redux';

import Land from '../screens/Land';
import actions from '../store/actions';

const mapStateToProps = state => {
    const { selectedSubreddit, postsBySubreddit } = state
    const { isFetching, items: posts, error } = postsBySubreddit[
      selectedSubreddit
    ] || {
      isFetching: true,
      items: [],
      error: null,
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
        error,
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPosts: subreddit => dispatch(actions.requestPosts(subreddit))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Land);