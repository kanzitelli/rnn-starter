import {
  Options,
  Layout,
  LayoutStackChildren,
  LayoutRoot,
  LayoutTabsChildren,
} from 'react-native-navigation';

// Set of methods which help building RNN layout without long boring code like {stack:component:{...}}

const Layout_Root =
  (root: Layout): LayoutRoot =>
    ({ root });

const Layout_BottomTabs =
  (children?: LayoutTabsChildren[], options?: Options): Layout =>
    ({ bottomTabs: { children, options }});

const Layout_Stack =
  (children?: LayoutStackChildren[], options?: Options): Layout =>
    ({ stack: { children, options }});

const Layout_StackWith =
  (c: LayoutStackChildren, options?: Options): Layout =>
    Layout_Stack([c], options);

const Layout_Component =
  <P = {}>(name: string, options?: Options, passProps?: P): Layout =>
    ({ component: { name, options, passProps, }})

export {
  Layout_Root,
  Layout_BottomTabs,
  Layout_Stack,
  Layout_StackWith,
  Layout_Component,
}