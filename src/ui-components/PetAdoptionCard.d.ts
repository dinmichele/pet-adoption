/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PetAdoption } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PetAdoptionCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    adoption?: PetAdoption;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function PetAdoptionCard(props: PetAdoptionCardProps): React.ReactElement;
