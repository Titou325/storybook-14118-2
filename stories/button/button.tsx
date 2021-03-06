import React, { FC, ReactNode } from "react";

export type ButtonProps = {
    /** Suffix to apply to the button */
    suffix?: string;
    /** Child elements */
    children: ReactNode;
    /** OnClick event handler */
    onClick?: () => void;
    /** Optional prefix */
    prefix?: "a" | "b"
}

/**
 * The world's most _basic_ button
 */
export const Button = ({ children = "Button", prefix, suffix = "a", onClick }: ButtonProps): JSX.Element => (
    <button onClick={onClick} type="button">
        {prefix}{children} - {suffix}
    </button>
);
