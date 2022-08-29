// `stores` layer
interface IStore {
  hydrate?: () => PVoid;
}
type Stores = Record<string, IStore>;

type StoreDefaultKeys = 'set' | 'setMany' | 'hydrate';
type StoreKeysOf<S> = keyof Omit<S, StoreDefaultKeys>;

// `services` layer
interface IService {
  init: () => PVoid;
}
type Services = Record<string, IService>;

// System
type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;
type PureFunc = () => void;
type PureFuncAsync = () => PVoid;
type PureFuncArg<T> = (value?: T) => void;

// Design system
type StatusBarStyle = 'light' | 'dark' | undefined;
type ThemeColors = {
  textColor: string;
  bgColor: string;
  bg2Color: string;
};
