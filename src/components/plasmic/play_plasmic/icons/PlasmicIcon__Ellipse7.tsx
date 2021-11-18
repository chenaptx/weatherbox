// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse7Icon(props: Ellipse7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 15"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <ellipse
        cx={"7.851"}
        cy={"7.5"}
        rx={"7.851"}
        ry={"7.5"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse7Icon;
/* prettier-ignore-end */
