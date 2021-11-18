// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "r-111h2gw r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-zso239 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
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
          "M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm0 1.5c2.28 0 4.368.834 5.982 2.207L4.957 17.982A9.202 9.202 0 012.75 12c0-5.1 4.15-9.25 9.25-9.25zm0 18.5a9.206 9.206 0 01-5.982-2.207L19.043 6.018A9.202 9.202 0 0121.25 12c0 5.1-4.15 9.25-9.25 9.25z"
        }
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
