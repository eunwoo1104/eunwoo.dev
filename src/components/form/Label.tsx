"use client";

import type { FieldErrors, FieldValues, Path } from "react-hook-form";

export function Label<T extends FieldValues>({
  label,
  name,
  errors,
  required,
  children,
  icon = null,
}: LabelBaseProps<T>) {
  return (
    <label>
      <div className="flex flex-row items-center space-x-0.5">
        {icon}
        <p>
          {label} {required && <span className="text-red-400">*</span>}
        </p>
        <div className="flex-1" />
        {errors[name] && (
          <p className="font-light text-sm text-red-500 dark:text-red-400">
            {errors[name].message as string}
          </p>
        )}
      </div>
      {children}
    </label>
  );
}

export interface LabelProps<TFieldValues extends FieldValues> {
  label: string;
  name: Path<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  required: boolean;
  icon?: React.ReactElement | null;
}

interface LabelBaseProps<
  TFieldValues extends FieldValues,
> extends LabelProps<TFieldValues> {
  children: React.ReactNode;
}
