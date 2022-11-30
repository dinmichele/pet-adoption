/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PetAdoption } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PetAdoptionUpdateFormInputValues = {
    name?: string;
    age?: string;
    heading?: string;
    imageUrl?: string;
};
export declare type PetAdoptionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    age?: ValidationFunction<string>;
    heading?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetAdoptionUpdateFormOverridesProps = {
    PetAdoptionUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    age?: FormProps<TextFieldProps>;
    heading?: FormProps<TextFieldProps>;
    imageUrl?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PetAdoptionUpdateFormProps = React.PropsWithChildren<{
    overrides?: PetAdoptionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    petAdoption?: PetAdoption;
    onSubmit?: (fields: PetAdoptionUpdateFormInputValues) => PetAdoptionUpdateFormInputValues;
    onSuccess?: (fields: PetAdoptionUpdateFormInputValues) => void;
    onError?: (fields: PetAdoptionUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PetAdoptionUpdateFormInputValues) => PetAdoptionUpdateFormInputValues;
    onValidate?: PetAdoptionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PetAdoptionUpdateForm(props: PetAdoptionUpdateFormProps): React.ReactElement;
