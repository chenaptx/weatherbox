// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon27Icon(props: Icon27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      stroke={"currentColor"}
      fill={"currentColor"}
      strokeWidth={"0"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"}
        stroke={"none"}
      ></path>
    </svg>
  );
}

export default Icon27Icon;
/* prettier-ignore-end */
