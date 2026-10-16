"use client";

import type { FieldValues, UseFormRegister } from "react-hook-form";

import { Label } from "./Label";
import type { LabelProps } from "./Label";

export function Select<T extends FieldValues>({
  label,
  errors,
  name,
  required,
  register,
  autoComplete,
  children,
  icon = null,
}: SelectsProps<T>) {
  return (
    <Label
      label={label}
      errors={errors}
      name={name}
      required={required}
      icon={icon}
    >
      <select
        className="col-start-1 row-start-1"
        autoComplete={autoComplete}
        multiple={false}
        {...register(name, { required: required })}
      >
        {children}
      </select>
    </Label>
  );
}

interface SelectsProps<
  TFieldValues extends FieldValues,
> extends LabelProps<TFieldValues> {
  register: UseFormRegister<TFieldValues>;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  children: React.ReactNode;
}
