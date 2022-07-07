import * as React from 'react';
import Component from '../../components/badge-group/badge-group';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & Partial<{
    onI2cEventName: (e: Event) => void;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onI2cEventName"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
