/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PetAdoptionCreateFormInputValues = {
    name?: string;
    age?: string;
    heading?: string;
    imageUrl?: string;
};
export declare type PetAdoptionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    age?: ValidationFunction<string>;
    heading?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetAdoptionCreateFormOverridesProps = {
    PetAdoptionCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    age?: FormProps<TextFieldProps>;
    heading?: FormProps<TextFieldProps>;
    imageUrl?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PetAdoptionCreateFormProps = React.PropsWithChildren<{
    overrides?: PetAdoptionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PetAdoptionCreateFormInputValues) => PetAdoptionCreateFormInputValues;
    onSuccess?: (fields: PetAdoptionCreateFormInputValues) => void;
    onError?: (fields: PetAdoptionCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PetAdoptionCreateFormInputValues) => PetAdoptionCreateFormInputValues;
    onValidate?: PetAdoptionCreateFormValidationValues;
} & React.CSSProperties>;
export default function PetAdoptionCreateForm(props: PetAdoptionCreateFormProps): React.ReactElement;
