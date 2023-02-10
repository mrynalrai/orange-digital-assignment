import React from "react";

// A wrapper component for all buttons
// Accepts onClick action and title as props
export const ButtonWrapper: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title: string;
  }
> = ({ title, ...props }) => <button {...props}>{title}</button>;
