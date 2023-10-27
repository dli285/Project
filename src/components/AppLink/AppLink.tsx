import React from "react";
import { ThemeLink } from "./AppLink.style";

interface AppLinkProps {
    href: string
    linkText: string
}

export const AppLink = ({href, linkText}: AppLinkProps) => {
    return (
        <ThemeLink href={href}>{linkText}</ThemeLink>
    )
}