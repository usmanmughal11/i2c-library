import * as React from 'react';
import Component from '../../components/include/include';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & Partial<{
    onI2cLoad: (e: Event) => void;
    onI2cError: (e: Event) => void;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onI2cLoad" | "onI2cError"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
