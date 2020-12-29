import {
  Options,
  Layout,
  LayoutStackChildren,
  LayoutRoot,
  LayoutTabsChildren,
} from 'react-native-navigation';

// Set of methods which help building RNN layout without long boring code like {stack:component:{...}}

const Root =
  (root: Layout): LayoutRoot =>
    ({ root });

const BottomTabs =
  (children?: LayoutTabsChildren[], options?: Options): Layout =>
    ({ bottomTabs: { children, options }});

const Stack =
  (children?: LayoutStackChildren[], options?: Options): Layout =>
    ({ stack: { children, options }});

const StackWith =
  (c: LayoutStackChildren, options?: Options): Layout =>
    Stack([c], options);

const Component =
  <P = {}>(name: string, passProps?: P, options?: Options): Layout =>
    ({ component: { name, passProps, options }})

export {
  Root,
  BottomTabs,
  Stack,
  StackWith,
  Component,
}