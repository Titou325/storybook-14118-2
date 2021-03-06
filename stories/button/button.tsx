import React, { FC, ReactNode } from "react";

export type IButtonProps = {
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
export const Button: FC<IButtonProps> = ({ children = "Button", onClick }: IButtonProps) => (
    <button onClick={onClick} type="button">
        {children}
    </button>
);
