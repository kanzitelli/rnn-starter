import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Land from '../screens/Land';

import { GlobalState } from '../store/types';
import { NavigationComponent } from '.';
import { requestPosts } from '../store/postsBySubreddit/actions';
import { RequestPostsAction } from '../store/postsBySubreddit/types';

interface Props {
    selectedSubreddit: string,
    posts: Array<any>,
    isFetching: boolean,
    error: Error | null,

    fetchPosts: (sr: string) => void,
}

type DispatchType = RequestPostsAction;

const mapStateToProps = (
    state: GlobalState,
) => {
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

const mapDispatchToProps = (
    dispatch: Dispatch<DispatchType>
) => ({
    fetchPosts: (sr: string) => dispatch(requestPosts(sr))
});

export type LandComponentType = NavigationComponent<Props>

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Land);