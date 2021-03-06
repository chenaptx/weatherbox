// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mkraxK26DVUcftaRqUY3yk
// Component: L6TrhOhxBlBZ
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
import * as sty from "./PlasmicWorkspace.module.css"; // plasmic-import: L6TrhOhxBlBZ/css

export type PlasmicWorkspace__VariantMembers = {};

export type PlasmicWorkspace__VariantsArgs = {};
type VariantPropType = keyof PlasmicWorkspace__VariantsArgs;
export const PlasmicWorkspace__VariantProps = new Array<VariantPropType>();

export type PlasmicWorkspace__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicWorkspace__ArgsType;
export const PlasmicWorkspace__ArgProps = new Array<ArgPropType>("children");

export type PlasmicWorkspace__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultWorkspaceProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicWorkspace__RenderFunc(props: {
  variants: PlasmicWorkspace__VariantsArgs;
  args: PlasmicWorkspace__ArgsType;
  overrides: PlasmicWorkspace__OverridesType;
  dataFetches?: PlasmicWorkspace__Fetches;
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
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          defaultcss.__wab_text,
          sty.text
        )}
      >
        {"Objective:"}
      </div>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__x1TbR
              )}
            />
          ),

          value: args.children
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "freeBox"],
  text: ["text"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWorkspace__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWorkspace__VariantsArgs;
    args?: PlasmicWorkspace__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicWorkspace__Fetches;
  } & Omit<PlasmicWorkspace__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicWorkspace__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicWorkspace__ArgProps,
      internalVariantPropNames: PlasmicWorkspace__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicWorkspace__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWorkspace";
  } else {
    func.displayName = `PlasmicWorkspace.${nodeName}`;
  }
  return func;
}

export const PlasmicWorkspace = Object.assign(
  // Top-level PlasmicWorkspace renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicWorkspace
    internalVariantProps: PlasmicWorkspace__VariantProps,
    internalArgProps: PlasmicWorkspace__ArgProps
  }
);

export default PlasmicWorkspace;
/* prettier-ignore-end */
