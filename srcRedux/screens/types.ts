interface NavigationComponentProps {
    componentId: string;
}
interface NavigationComponentOptions {
    options?: (passProps?: Record<string, any>) => object;
}

type NavigationComponent<P> =
    React.FC<P & NavigationComponentProps> & NavigationComponentOptions;

// ====================================================================
// ====================================================================
interface HomeComponentProps { }
type HomeComponentType = NavigationComponent<HomeComponentProps>;

interface LandComponentProps { }
type LandComponentType = NavigationComponent<LandComponentProps>;

interface EmptyComponentProps { }
type EmptyComponentType = NavigationComponent<EmptyComponentProps>;
