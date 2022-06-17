import * as React from 'react';
import Component from '../../components/resize-observer/resize-observer';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & Partial<{
    onI2cResize: (e: Event) => void;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onI2cResize"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
