// Type definitions for re-resizable 4.4
// Project: https://github.com/bokuweb/re-resizable
// Definitions by: Kalle Ott <https://github.com/kaoDev>
// Definitions: https://github.com/kaoDev/re-resizable
// TypeScript Version: 2.2

import * as React from 'react';

export type ResizableDirection = 'top' | 'right' | 'bottom' | 'left' | 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft';

export interface ResizableState {
  width: number | string;
  height: number | string;
  direction?: ResizableDirection;
  original?: {
    x: number,
    y: number,
    width: number,
    height: number,
  },
  isResizing?: boolean;
  resizeCursor: string,
}

export type NumberSize = {
  width: number;
  height: number;
}

export type Size = {
  width: string | number,
  height: string | number,
};

export type CSSSize = {
  width: string;
  height: string;
}

export type HandleComponent = {
  top?: ReactElement<any>,
  right?: ReactElement<any>,
  bottom?: ReactElement<any>,
  left?: ReactElement<any>,
  topRight?: ReactElement<any>,
  bottomRight?: ReactElement<any>,
  bottomLeft?: ReactElement<any>,
  topLeft?: ReactElement<any>,
};


export type ResizeCallback = (
  event: MouseEvent | TouchEvent,
  direction: ResizeDirection,
  elementRef: HTMLElement,
  delta: NumberSize,
) => void;

export type ResizeStartCallback = (
  e: React.MouseEvent<any> | React.TouchEvent<any>,
  dir: ResizeDirection,
  elementRef: HTMLElement,
  delta: NumberSize,
) => void;

export interface ResizableProps {
  onResizeStart?: ResizeStartCallback,
  onResize?: ResizeCallback,
  onResizeStop?: ResizeCallback,  
  style?: React.CSSProperties;
  handleStyles?: {
    top?: React.CSSProperties,
    right?: React.CSSProperties,
    bottom?: React.CSSProperties,
    left?: React.CSSProperties,
    topRight?: React.CSSProperties,
    bottomRight?: React.CSSProperties,
    bottomLeft?: React.CSSProperties,
    topLeft?: React.CSSProperties,
  },
  handleClasses?: {
    top?: string,
    right?: string,
    bottom?: string,
    left?: string,
    topRight?: string,
    bottomRight?: string,
    bottomLeft?: string,
    topLeft?: string,
  },
  enable?: {
    top?: boolean,
    right?: boolean,
    bottom?: boolean,
    left?: boolean,
    topRight?: boolean,
    bottomRight?: boolean,
    bottomLeft?: boolean,
    topLeft?: boolean,
  },
  className?: string,
  defaultSize?: {
    width: string | number,
    height: string | number,
  },
  size?: {
    width: string | number,
    height: string | number,
  },  
  minWidth?: number | string,
  minHeight?: number | string,
  maxWidth?: number | string,
  maxHeight?: number | string,
  grid?: number[],
  bounds?: 'parent' | 'window' | HTMLElement,
  lockAspectRatio?: boolean,
  lockAspectRatioExtraWidth: number,
  lockAspectRatioExtraHeight: number,
  handleWrapperStyle?: {
    width: string | number,
    height: string | number,
  },
  handleWrapperClass?: string,
  handleComponent?: HandleComponent,
  defaultSize?: {
    width: string | number,
    height: string | number,
  }

  onResizeStart?: ResizeStartCallback,
  onResize?: ResizeCallback,
  onResizeStop?: ResizeCallback,


}

export type HandleComponent = {
  top?: React.ElementType,
  right?: React.ElementType,
  bottom?: React.ElementType,
  left?: React.ElementType,
  topRight?: React.ElementType,
  bottomRight?: React.ElementType,
  bottomLeft?: React.ElementType,
  topLeft?: React.ElementType,
};

export default class Resizable extends React.Component<ResizableProps, ResizableState> {

  resizable: HTMLElement;

  size: {
    width: number,
    height: number,
  };

  updateSize({ width, height }: Size): void;
}
