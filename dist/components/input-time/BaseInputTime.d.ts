import React from 'react';
declare const BaseInputTime: React.ForwardRefExoticComponent<Omit<import("..").BaseInputProps, "onChange" | "type"> & {
    onValueChange?: ((value: string) => void) | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export default BaseInputTime;
