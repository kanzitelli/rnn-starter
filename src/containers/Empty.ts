import { connect } from 'react-redux';

import Empty from '../screens/Empty';

import { NavigationComponent } from '.';

interface Props { }

export type EmptyComponentType = NavigationComponent<Props>

export default connect()(Empty);