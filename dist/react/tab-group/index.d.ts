import * as React from 'react';
import Component from '../../components/tab-group/tab-group';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & Partial<{
    onI2cTabShow: (e: Event) => void;
    onI2cTabHide: (e: Event) => void;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onI2cTabShow" | "onI2cTabHide"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
