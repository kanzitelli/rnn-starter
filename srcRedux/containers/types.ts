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
interface HomeComponentProps {
    subreddits: SubredditInfo[];

    onSelectSubreddit: (sr: string) => void;
    onAddSubreddit: (sr: string) => void;
    onDeleteSubreddit: (sr: string) => void;
}
type HomeComponentType = NavigationComponent<HomeComponentProps>;

interface LandComponentProps {
    selectedSubreddit: string;
    posts: any[];
    isFetching: boolean;
    error: Error | null;

    fetchPosts: (sr: string) => void;
}
type LandComponentType = NavigationComponent<LandComponentProps>;

interface EmptyComponentProps { }
type EmptyComponentType = NavigationComponent<EmptyComponentProps>;
