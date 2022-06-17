import * as React from 'react';
import Component from '../../components/icon-button/icon-button';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & Partial<{
    onI2cBlur: (e: Event) => void;
    onI2cFocus: (e: Event) => void;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onI2cBlur" | "onI2cFocus"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
