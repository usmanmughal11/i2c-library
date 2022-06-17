import * as React from 'react';
import Component from '../../components/details/details';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & Partial<{
    onI2cShow: (e: Event) => void;
    onI2cAfterShow: (e: Event) => void;
    onI2cHide: (e: Event) => void;
    onI2cAfterHide: (e: Event) => void;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onI2cShow" | "onI2cAfterShow" | "onI2cHide" | "onI2cAfterHide"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;