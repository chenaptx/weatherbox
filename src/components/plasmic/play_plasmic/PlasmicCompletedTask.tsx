// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mkraxK26DVUcftaRqUY3yk
// Component: MJTx7eUk5eh
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
import * as sty from "./PlasmicCompletedTask.module.css"; // plasmic-import: MJTx7eUk5eh/css

export type PlasmicCompletedTask__VariantMembers = {};

export type PlasmicCompletedTask__VariantsArgs = {};
type VariantPropType = keyof PlasmicCompletedTask__VariantsArgs;
export const PlasmicCompletedTask__VariantProps = new Array<VariantPropType>();

export type PlasmicCompletedTask__ArgsType = {};
type ArgPropType = keyof PlasmicCompletedTask__ArgsType;
export const PlasmicCompletedTask__ArgProps = new Array<ArgPropType>();

export type PlasmicCompletedTask__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultCompletedTaskProps {
  className?: string;
}

function PlasmicCompletedTask__RenderFunc(props: {
  variants: PlasmicCompletedTask__VariantsArgs;
  args: PlasmicCompletedTask__ArgsType;
  overrides: PlasmicCompletedTask__OverridesType;
  dataFetches?: PlasmicCompletedTask__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, projectcss.all, sty.freeBox)}
      />

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          defaultcss.__wab_text,
          sty.text
        )}
      >
        {"Request application extension"}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text"],
  freeBox: ["freeBox"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCompletedTask__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCompletedTask__VariantsArgs;
    args?: PlasmicCompletedTask__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCompletedTask__Fetches;
  } & Omit<PlasmicCompletedTask__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCompletedTask__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCompletedTask__ArgProps,
      internalVariantPropNames: PlasmicCompletedTask__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCompletedTask__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedTask";
  } else {
    func.displayName = `PlasmicCompletedTask.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedTask = Object.assign(
  // Top-level PlasmicCompletedTask renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicCompletedTask
    internalVariantProps: PlasmicCompletedTask__VariantProps,
    internalArgProps: PlasmicCompletedTask__ArgProps
  }
);

export default PlasmicCompletedTask;
/* prettier-ignore-end */
