import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Land from '../screens/Land';

import { requestPosts } from '../store/postsBySubreddit/actions';

type DispatchType = RequestPostsAction;

const mapStateToProps = (
    state: GlobalState,
) => {
    const { selectedSubreddit, postsBySubreddit } = state;
    const { isFetching, items: posts, error } = postsBySubreddit[
        selectedSubreddit
    ] || {
        isFetching: true,
        items: [],
        error: null,
    };

    return {
        selectedSubreddit,
        posts,
        isFetching,
        error,
    };
};

const mapDispatchToProps = (
    dispatch: Dispatch<DispatchType>,
) => ({
    fetchPosts: (sr: string) => dispatch(requestPosts(sr)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Land);
