// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon22Icon(props: Icon22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 181 130"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"currentColor"} d={"M181 61L0 0l54 69-30 61 157-69z"}></path>
    </svg>
  );
}

export default Icon22Icon;
/* prettier-ignore-end */
