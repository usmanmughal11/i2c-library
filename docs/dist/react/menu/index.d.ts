import * as React from 'react';
import Component from '../../components/menu/menu';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & Partial<{
    onI2cSelect: (e: Event) => void;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onI2cSelect"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
