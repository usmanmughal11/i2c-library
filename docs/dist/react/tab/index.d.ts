import * as React from 'react';
import Component from '../../components/tab/tab';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & Partial<{
    onI2cClose: (e: Event) => void;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onI2cClose"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
