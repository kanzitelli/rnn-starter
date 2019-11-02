import { connect } from 'react-redux';

import Land from '../screens/Land';
import { fetchPosts } from '../actions';

const mapStateToProps = state => {
    const { selectedSubreddit, postsBySubreddit } = state
    const { isFetching, items: posts } = postsBySubreddit[
      selectedSubreddit
    ] || {
      isFetching: true,
      items: []
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPosts: subreddit => dispatch(fetchPosts(subreddit))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Land);