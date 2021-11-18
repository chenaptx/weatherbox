// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon26Icon(props: Icon26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#xx-E58Xk3dqa)"}>
        <path
          fill={"#FDD888"}
          d={
            "M28.865 7.134c7.361 7.359 9.35 17.304 4.443 22.209-4.907 4.907-14.85 2.918-22.21-4.441-.25-.25-.478-.51-.716-.766l4.417-4.417c5.724 5.724 13.016 7.714 16.286 4.442 3.271-3.271 1.282-10.563-4.441-16.287l.022.021-.021-.022C20.104 1.331 11.154-.326 6.657 4.171 4.482 6.346 3.76 9.564 4.319 13.044c-.858-4.083-.15-7.866 2.338-10.353 4.906-4.906 14.849-2.917 22.208 4.443z"
          }
        ></path>

        <path
          fill={"#FFAC33"}
          d={
            "M19.403 34c-.252 0-.503-.077-.719-.231l-5.076-3.641-5.076 3.641c-.433.31-1.013.31-1.443-.005a1.23 1.23 0 01-.45-1.369l1.894-6.11-5.031-3.545a1.236 1.236 0 01-.442-1.375 1.236 1.236 0 011.165-.851l6.147-.012 2.067-5.957a1.233 1.233 0 012.34 0l1.866 5.957 6.347.012a1.233 1.233 0 01.723 2.226l-5.031 3.545 1.893 6.11A1.23 1.23 0 0119.403 34z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"xx-E58Xk3dqa"}>
          <path fill={"#fff"} d={"M0 0h36v36H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon26Icon;
/* prettier-ignore-end */