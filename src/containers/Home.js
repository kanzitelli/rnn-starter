import { connect } from 'react-redux';

import Home from '../screens/Home';
import { selectSubreddit } from '../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onSelectSubreddit: sr => dispatch(selectSubreddit(sr))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);