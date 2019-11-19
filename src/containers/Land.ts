import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Land from '../screens/Land';

import { GlobalState } from '../store/types';
import { requestPosts } from '../store/postsBySubreddit/actions';
import { RequestPostsAction } from '../store/postsBySubreddit/types';

export interface Props {
  selectedSubreddit: string,
  posts: Array<any>,
  isFetching: boolean,
  error: Error,

  fetchPosts: Function,
}

type DispatchType = RequestPostsAction;

const mapStateToProps = (
  state: GlobalState,
): Partial<Props> => {
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
): Partial<Props> => ({
    fetchPosts: (sr: string) => dispatch(requestPosts(sr))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Land);