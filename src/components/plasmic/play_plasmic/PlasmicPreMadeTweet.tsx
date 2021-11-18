// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mkraxK26DVUcftaRqUY3yk
// Component: aMXT9V90D9D
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
import * as sty from "./PlasmicPreMadeTweet.module.css"; // plasmic-import: aMXT9V90D9D/css

export type PlasmicPreMadeTweet__VariantMembers = {};

export type PlasmicPreMadeTweet__VariantsArgs = {};
type VariantPropType = keyof PlasmicPreMadeTweet__VariantsArgs;
export const PlasmicPreMadeTweet__VariantProps = new Array<VariantPropType>();

export type PlasmicPreMadeTweet__ArgsType = {};
type ArgPropType = keyof PlasmicPreMadeTweet__ArgsType;
export const PlasmicPreMadeTweet__ArgProps = new Array<ArgPropType>();

export type PlasmicPreMadeTweet__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultPreMadeTweetProps {
  className?: string;
}

function PlasmicPreMadeTweet__RenderFunc(props: {
  variants: PlasmicPreMadeTweet__VariantsArgs;
  args: PlasmicPreMadeTweet__ArgsType;
  overrides: PlasmicPreMadeTweet__OverridesType;
  dataFetches?: PlasmicPreMadeTweet__Fetches;
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
        sty.root
      )}
    >
      <div
        className={classNames(
          defaultcss.all,
          projectcss.all,
          defaultcss.__wab_text,
          sty.text__ddSr
        )}
      >
        {"Mark Dalgleish"}
      </div>

      <div
        className={classNames(
          defaultcss.all,
          projectcss.all,
          defaultcss.__wab_text,
          sty.text__iqkzr
        )}
      >
        {
          "Other industries figured out a long time ago that you can't go straight from concept design to construction. If we want to do design systems right, we're missing a step."
        }
      </div>

      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"70px" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={"none" as const}
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={"70px" as const}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPreMadeTweet__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPreMadeTweet__VariantsArgs;
    args?: PlasmicPreMadeTweet__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPreMadeTweet__Fetches;
  } & Omit<PlasmicPreMadeTweet__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPreMadeTweet__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPreMadeTweet__ArgProps,
      internalVariantPropNames: PlasmicPreMadeTweet__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPreMadeTweet__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPreMadeTweet";
  } else {
    func.displayName = `PlasmicPreMadeTweet.${nodeName}`;
  }
  return func;
}

export const PlasmicPreMadeTweet = Object.assign(
  // Top-level PlasmicPreMadeTweet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicPreMadeTweet
    internalVariantProps: PlasmicPreMadeTweet__VariantProps,
    internalArgProps: PlasmicPreMadeTweet__ArgProps
  }
);

export default PlasmicPreMadeTweet;
/* prettier-ignore-end */