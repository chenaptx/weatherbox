// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UploadIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UploadIcon(props: UploadIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
      )}
      viewBox={"0 0 24 24"}
      fill={"currentcolor"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.53 7.47l-5-5a.749.749 0 00-1.06 0l-5 5a.749.749 0 101.06 1.06l3.72-3.72V15a.75.75 0 001.5 0V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22a.749.749 0 000-1.06z"
        }
      ></path>

      <path
        d={
          "M19.708 21.944H4.292A2.294 2.294 0 012 19.652V14a.75.75 0 011.5 0v5.652c0 .437.355.792.792.792h15.416a.793.793 0 00.792-.792V14a.75.75 0 011.5 0v5.652a2.294 2.294 0 01-2.292 2.292z"
        }
      ></path>
    </svg>
  );
}

export default UploadIcon;
/* prettier-ignore-end */
