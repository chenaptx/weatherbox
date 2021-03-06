// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mkraxK26DVUcftaRqUY3yk
// Component: 7gN8zJqnvIH
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_play_plasmic.module.css"; // plasmic-import: mkraxK26DVUcftaRqUY3yk/projectcss
import * as sty from "./PlasmicCompletedButton5.module.css"; // plasmic-import: 7gN8zJqnvIH/css

export type PlasmicCompletedButton5__VariantMembers = {
  type: "primary" | "danger" | "success";
  border: "rounded" | "link";
  size: "small" | "large";
};

export type PlasmicCompletedButton5__VariantsArgs = {
  type?: SingleChoiceArg<"primary" | "danger" | "success">;
  border?: SingleChoiceArg<"rounded" | "link">;
  size?: SingleChoiceArg<"small" | "large">;
};

type VariantPropType = keyof PlasmicCompletedButton5__VariantsArgs;
export const PlasmicCompletedButton5__VariantProps = new Array<VariantPropType>(
  "type",
  "border",
  "size"
);

export type PlasmicCompletedButton5__ArgsType = {};
type ArgPropType = keyof PlasmicCompletedButton5__ArgsType;
export const PlasmicCompletedButton5__ArgProps = new Array<ArgPropType>();

export type PlasmicCompletedButton5__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultCompletedButton5Props {
  type?: SingleChoiceArg<"primary" | "danger" | "success">;
  border?: SingleChoiceArg<"rounded" | "link">;
  size?: SingleChoiceArg<"small" | "large">;
  className?: string;
}

function PlasmicCompletedButton5__RenderFunc(props: {
  variants: PlasmicCompletedButton5__VariantsArgs;
  args: PlasmicCompletedButton5__ArgsType;
  overrides: PlasmicCompletedButton5__OverridesType;
  dataFetches?: PlasmicCompletedButton5__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        defaultcss.__wab_text,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root__border_link]: hasVariant(variants, "border", "link"),
          [sty.root__border_rounded]: hasVariant(variants, "border", "rounded"),
          [sty.root__size_large]: hasVariant(variants, "size", "large"),
          [sty.root__size_small]: hasVariant(variants, "size", "small"),
          [sty.root__type_danger]: hasVariant(variants, "type", "danger"),
          [sty.root__type_primary]: hasVariant(variants, "type", "primary"),
          [sty.root__type_success]: hasVariant(variants, "type", "success")
        }
      )}
    >
      {"Click me"}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCompletedButton5__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCompletedButton5__VariantsArgs;
    args?: PlasmicCompletedButton5__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCompletedButton5__Fetches;
  } & Omit<PlasmicCompletedButton5__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCompletedButton5__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCompletedButton5__ArgProps,
      internalVariantPropNames: PlasmicCompletedButton5__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCompletedButton5__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedButton5";
  } else {
    func.displayName = `PlasmicCompletedButton5.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedButton5 = Object.assign(
  // Top-level PlasmicCompletedButton5 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCompletedButton5
    internalVariantProps: PlasmicCompletedButton5__VariantProps,
    internalArgProps: PlasmicCompletedButton5__ArgProps
  }
);

export default PlasmicCompletedButton5;
/* prettier-ignore-end */
