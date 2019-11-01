import { connect } from 'react-redux';

import Land from '../screens/Land';

const mapStateToProps = state => {
    const { selectedSubreddit } = state;

    return {
        selectedSubreddit,
    }
};

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Land);