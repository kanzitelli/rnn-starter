interface NavigationComponentProps {
    componentId: string;
}
interface NavigationComponentOptions {
    options?: (passProps?: Record<string, any>) => object;
}

type NavigationComponent_MobX<P> =
    React.FC<P & NavigationComponentProps> & NavigationComponentOptions;

// ====================================================================
// ====================================================================
interface HomeComponentProps_MobX { }
type HomeComponentType_MobX = NavigationComponent_MobX<HomeComponentProps_MobX>;

interface LandComponentProps_MobX { }
type LandComponentType_MobX = NavigationComponent_MobX<LandComponentProps_MobX>;

interface EmptyComponentProps_MobX { }
type EmptyComponentType_MobX = NavigationComponent_MobX<EmptyComponentProps_MobX>;
