import React from "react";
import { ThemeButton } from "./AppButton.style";

interface AppButtonProps {
    buttonText: string
    isDisabled?: boolean
}

export const AppButton = ({buttonText,isDisabled}: AppButtonProps) => {
    return (
        <div>
            <ThemeButton disabled={isDisabled}>{buttonText}</ThemeButton>
        </div>
    )
}