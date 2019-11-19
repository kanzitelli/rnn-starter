import React from 'react';
import { Options } from "react-native-navigation";

export const HOME = 'rnn-starter.Home';
export const LAND = 'rnn-starter.Land';
export const EMPTY = 'rnn-starter.Empty';

interface NavigationComponentProps {
    componentId: string,
}
interface NavigationComponentOptions {
    options?: (passProps?: Record<string, any>) => Options,
}

export type NavigationComponent<P> = 
    React.FC<P & NavigationComponentProps> & NavigationComponentOptions;