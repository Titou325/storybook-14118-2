import React, { FC, ReactNode } from "react";

type ButtonProps = {
    /** Button contents */
    children: ReactNode;
    /**
     * Simple click handler
     */
    onClick?: () => void;
};

/**
 * The world's most _basic_ button
 */
export const Button: FC<ButtonProps> = ({ children = "Button", onClick }: ButtonProps) => (
    <button onClick={onClick} type="button">
        {children}
    </button>
);
