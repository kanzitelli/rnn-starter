interface NavigationComponentProps {
    componentId: string;
}
interface NavigationComponentOptions {
    options?: (passProps?: Record<string, any>) => object;
}

type NavigationComponent_MobX<P> =
    React.FC<P & NavigationComponentProps> & NavigationComponentOptions;
