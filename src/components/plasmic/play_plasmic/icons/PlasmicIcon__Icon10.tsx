// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -10 511.987 511"}
      fill={"currentcolor"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M114.594 491.14c-5.61 0-11.18-1.75-15.934-5.187a27.223 27.223 0 01-10.582-28.094l32.938-145.09L9.312 214.81a27.188 27.188 0 01-7.976-28.907 27.208 27.208 0 0123.402-18.71l147.797-13.419L230.97 17.027C235.277 6.98 245.089.492 255.992.492s20.715 6.488 25.024 16.512l58.433 136.77 147.774 13.417c10.882.98 20.054 8.344 23.425 18.711 3.372 10.368.254 21.739-7.957 28.907L390.988 312.75l32.938 145.086c2.414 10.668-1.727 21.7-10.578 28.098-8.832 6.398-20.61 6.89-29.91 1.3l-127.446-76.16-127.445 76.203c-4.309 2.559-9.11 3.864-13.953 3.864zm141.398-112.874c4.844 0 9.64 1.3 13.953 3.859l120.278 71.938-31.086-136.942a27.21 27.21 0 018.62-26.516l105.473-92.5-139.543-12.671a27.18 27.18 0 01-22.613-16.493L255.992 39.895 200.844 168.96c-3.883 9.195-12.524 15.512-22.547 16.43L38.734 198.062l105.47 92.5c7.554 6.614 10.858 16.77 8.62 26.54l-31.062 136.937 120.277-71.914c4.309-2.559 9.11-3.86 13.953-3.86zm-84.586-221.848s0 .023-.023.043zm169.13-.063l.023.043c0-.023 0-.023-.024-.043zm0 0"
        }
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
