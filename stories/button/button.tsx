import React, { FC, ReactNode } from "react";

export type IButtonProps = {
    /** Button contents */
    children: ReactNode;
    /**
     * Simple click handler
     */
    onClick?: () => void;
    /** Example enum prop */
    suffix: "a" | "b" | "c";
    /** Example optional enum prop */
    prefix?: "a" | "b" | "c";
};

/**
 * The world's most _basic_ button
 */
export const Button: FC<IButtonProps> = ({ children = "Button", suffix = "a", onClick }: IButtonProps) => (
    <button onClick={onClick} type="button">
        {children} - {suffix}
    </button>
);
