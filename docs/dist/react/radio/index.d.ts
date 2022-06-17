import * as React from 'react';
import Component from '../../components/radio/radio';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & Partial<{
    onI2cBlur: (e: Event) => void;
    onI2cChange: (e: Event) => void;
    onI2cFocus: (e: Event) => void;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onI2cBlur" | "onI2cFocus" | "onI2cChange"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
