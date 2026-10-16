"use client";

import type { FieldValues, UseFormRegister } from "react-hook-form";

import { Label } from "./Label";
import type { LabelProps } from "./Label";

export function Input<T extends FieldValues>({
  label,
  name,
  type,
  register,
  errors,
  required,
  placeholder,
  autoComplete,
  icon = null,
}: InputProps<T>) {
  return (
    <Label
      label={label}
      errors={errors}
      name={name}
      required={required}
      icon={icon}
    >
      <input
        className={errors[name] && "border-red-500 dark:border-red-400"}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name, { required: required })}
      />
    </Label>
  );
}

interface InputProps<
  TFieldValues extends FieldValues,
> extends LabelProps<TFieldValues> {
  type: React.HTMLInputTypeAttribute;
  register: UseFormRegister<TFieldValues>;
  placeholder?: string;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
}
