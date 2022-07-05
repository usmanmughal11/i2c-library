import * as React from 'react';
import Component from '../../components/animation/animation';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & Partial<{
    onI2cCancel: (e: Event) => void;
    onI2cFinish: (e: Event) => void;
    onI2cStart: (e: Event) => void;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onI2cCancel" | "onI2cFinish" | "onI2cStart"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
