interface IHydratedStore {
  STORAGE_ID: string;
  hydrate: () => Promise<any>;
}

interface IService {
  init: () => Promise<void>;
}

type ThemeNameType = 'dark' | 'light';

type ThemeType = {
  colors: any;
  sizes: any;
}

type ThemesType = {
  [key in ThemeNameType]: ThemeType;
};

type ThemedStylesFuncType<T> = (theme: ThemeType) => T;

type UseStylesOptionsType = {
  normalize?: boolean;
  darkmode?: boolean;
}

type GenerateShadowProps = {
  shadowColor?: string;
  shadowRadius?: number;
  shadowOpacity?: number;
  shadowOffsetW?: number;
  shadowOffsetH?: number;
}