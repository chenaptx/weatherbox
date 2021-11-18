// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon25Icon(props: Icon25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M26 31h4v4h-4v-4zM6 31h4v4H6v-4zm24-21h-2V8h-2V6h-3V2h-2v4h-6V2h-2v4h-3v2H8v2H6v7H2v2h4v7h4v5h5v-5h6v5h5v-5h4v-7h4v-2h-4v-7zM16 21h-4v-8h4v8zm4 0v-8h4v8h-4zM34 6h2v11h-2V6zM0 6h2v11H0V6z"
        }
      ></path>
    </svg>
  );
}

export default Icon25Icon;
/* prettier-ignore-end */