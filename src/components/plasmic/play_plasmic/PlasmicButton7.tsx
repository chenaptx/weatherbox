// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mkraxK26DVUcftaRqUY3yk
// Component: kwsIU5GGEcN8
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
import * as sty from "./PlasmicButton7.module.css"; // plasmic-import: kwsIU5GGEcN8/css

export type PlasmicButton7__VariantMembers = {
  type: "primary" | "danger";
  border: "rounded" | "link";
  size: "small" | "large";
};

export type PlasmicButton7__VariantsArgs = {
  type?: SingleChoiceArg<"primary" | "danger">;
  border?: SingleChoiceArg<"rounded" | "link">;
  size?: SingleChoiceArg<"small" | "large">;
};

type VariantPropType = keyof PlasmicButton7__VariantsArgs;
export const PlasmicButton7__VariantProps = new Array<VariantPropType>(
  "type",
  "border",
  "size"
);

export type PlasmicButton7__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicButton7__ArgsType;
export const PlasmicButton7__ArgProps = new Array<ArgPropType>("children");

export type PlasmicButton7__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultButton7Props {
  children?: React.ReactNode;
  type?: SingleChoiceArg<"primary" | "danger">;
  border?: SingleChoiceArg<"rounded" | "link">;
  size?: SingleChoiceArg<"small" | "large">;
  className?: string;
}

function PlasmicButton7__RenderFunc(props: {
  variants: PlasmicButton7__VariantsArgs;
  args: PlasmicButton7__ArgsType;
  overrides: PlasmicButton7__OverridesType;
  dataFetches?: PlasmicButton7__Fetches;
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
        projectcss.root_reset,
        sty.root,
        {
          [sty.root__border_link]: hasVariant(variants, "border", "link"),
          [sty.root__border_rounded]: hasVariant(variants, "border", "rounded"),
          [sty.root__size_large]: hasVariant(variants, "size", "large"),
          [sty.root__size_small]: hasVariant(variants, "size", "small"),
          [sty.root__type_danger]: hasVariant(variants, "type", "danger"),
          [sty.root__type_primary]: hasVariant(variants, "type", "primary")
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Click me",
        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildren__border_link]: hasVariant(
            variants,
            "border",
            "link"
          ),
          [sty.slotTargetChildren__border_rounded]: hasVariant(
            variants,
            "border",
            "rounded"
          ),
          [sty.slotTargetChildren__size_large]: hasVariant(
            variants,
            "size",
            "large"
          ),
          [sty.slotTargetChildren__size_small]: hasVariant(
            variants,
            "size",
            "small"
          ),
          [sty.slotTargetChildren__type_danger]: hasVariant(
            variants,
            "type",
            "danger"
          ),
          [sty.slotTargetChildren__type_primary]: hasVariant(
            variants,
            "type",
            "primary"
          )
        })
      })}
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
  PlasmicButton7__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton7__VariantsArgs;
    args?: PlasmicButton7__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicButton7__Fetches;
  } & Omit<PlasmicButton7__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButton7__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicButton7__ArgProps,
      internalVariantPropNames: PlasmicButton7__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicButton7__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton7";
  } else {
    func.displayName = `PlasmicButton7.${nodeName}`;
  }
  return func;
}

export const PlasmicButton7 = Object.assign(
  // Top-level PlasmicButton7 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicButton7
    internalVariantProps: PlasmicButton7__VariantProps,
    internalArgProps: PlasmicButton7__ArgProps
  }
);

export default PlasmicButton7;
/* prettier-ignore-end */