import * as React from 'react';
import Component from '../../components/dialog/dialog';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & Partial<{
    onI2cShow: (e: Event) => void;
    onI2cAfterShow: (e: Event) => void;
    onI2cHide: (e: Event) => void;
    onI2cAfterHide: (e: Event) => void;
    onI2cInitialFocus: (e: Event) => void;
    onI2cRequestClose: (e: Event) => void;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onI2cShow" | "onI2cAfterShow" | "onI2cHide" | "onI2cAfterHide" | "onI2cInitialFocus" | "onI2cRequestClose"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
