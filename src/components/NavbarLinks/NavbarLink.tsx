import React from "react";

interface NavbarLinkProps{
    NavLinkText:string
    NavLink:string
}

export const NavbarLinks = ({NavLinkText, NavLink}: NavbarLinkProps) => {
    return (
        <li>
            <a href={NavLink} className="NavLink">{NavLinkText}</a>
        </li>
    )
}