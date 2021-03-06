import React, { FC, ReactNode } from "react";

export type ButtonProps = {
    suffix?: string;
    children: ReactNode;
    onClick?: () => void;
}

/**
 * The world's most _basic_ button
 */
export const Button = ({ children = "Button", suffix = "a", onClick }: ButtonProps): JSX.Element => (
    <button onClick={onClick} type="button">
        {children} - {suffix}
    </button>
);
