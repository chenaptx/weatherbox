// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AngularSolidBlacksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AngularSolidBlacksvgIcon(props: AngularSolidBlacksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 250 250"}
      fill={"currentcolor"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M108 135.4h34l-17-40.9z"}></path>

      <path
        d={
          "M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1L125 30zm58.1 152.6h-21.7l-11.7-29.2h-49.4l-11.7 29.2H66.9L125 52.1l58.1 130.5z"
        }
      ></path>
    </svg>
  );
}

export default AngularSolidBlacksvgIcon;
/* prettier-ignore-end */
