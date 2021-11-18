// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mkraxK26DVUcftaRqUY3yk
// Component: MowUmIKgzml
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
import * as sty from "./PlasmicCompletedProfileCard.module.css"; // plasmic-import: MowUmIKgzml/css

import image11PtgN1IMRoBf from "./images/image11.png"; // plasmic-import: PtgN1I-mROBf/picture

export type PlasmicCompletedProfileCard__VariantMembers = {};

export type PlasmicCompletedProfileCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicCompletedProfileCard__VariantsArgs;
export const PlasmicCompletedProfileCard__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCompletedProfileCard__ArgsType = {
  name?: React.ReactNode;
  username?: React.ReactNode;
  profilePicture?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCompletedProfileCard__ArgsType;
export const PlasmicCompletedProfileCard__ArgProps = new Array<ArgPropType>(
  "name",
  "username",
  "profilePicture"
);

export type PlasmicCompletedProfileCard__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultCompletedProfileCardProps {
  name?: React.ReactNode;
  username?: React.ReactNode;
  profilePicture?: React.ReactNode;
  className?: string;
}

function PlasmicCompletedProfileCard__RenderFunc(props: {
  variants: PlasmicCompletedProfileCard__VariantsArgs;
  args: PlasmicCompletedProfileCard__ArgsType;
  overrides: PlasmicCompletedProfileCard__OverridesType;
  dataFetches?: PlasmicCompletedProfileCard__Fetches;
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
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__d4RVb)}
            displayHeight={"50px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"50px" as const}
            src={{
              src: image11PtgN1IMRoBf,
              fullWidth: 150,
              fullHeight: 184,
              aspectRatio: undefined
            }}
          />
        ),

        value: args.profilePicture
      })}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.freeBox__a8SqX
        )}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox___6KVd
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__mYe1L
            )}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Totoro",
              value: args.name,
              className: classNames(sty.slotTargetName)
            })}
          </p.Stack>
        </p.Stack>

        {p.renderPlasmicSlot({
          defaultContents: "@friendlyneighbor",
          value: args.username,
          className: classNames(sty.slotTargetUsername)
        })}
      </p.Stack>
    </p.Stack>
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
  PlasmicCompletedProfileCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCompletedProfileCard__VariantsArgs;
    args?: PlasmicCompletedProfileCard__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCompletedProfileCard__Fetches;
  } & Omit<PlasmicCompletedProfileCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCompletedProfileCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCompletedProfileCard__ArgProps,
      internalVariantPropNames: PlasmicCompletedProfileCard__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCompletedProfileCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedProfileCard";
  } else {
    func.displayName = `PlasmicCompletedProfileCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedProfileCard = Object.assign(
  // Top-level PlasmicCompletedProfileCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCompletedProfileCard
    internalVariantProps: PlasmicCompletedProfileCard__VariantProps,
    internalArgProps: PlasmicCompletedProfileCard__ArgProps
  }
);

export default PlasmicCompletedProfileCard;
/* prettier-ignore-end */