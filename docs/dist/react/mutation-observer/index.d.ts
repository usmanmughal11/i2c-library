import * as React from 'react';
import Component from '../../components/mutation-observer/mutation-observer';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & Partial<{
    onI2cMutation: (e: Event) => void;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onI2cMutation"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
