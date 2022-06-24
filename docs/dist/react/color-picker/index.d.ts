import * as React from 'react';
import Component from '../../components/color-picker/color-picker';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & Partial<{
    onI2cChange: (e: Event) => void;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onI2cChange"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
