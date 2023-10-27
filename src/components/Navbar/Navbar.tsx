import React from "react";
import './Navbar.scss'
import { NavbarLinks } from "../NavbarLinks/NavbarLink";

export const Navbar = () => {
    return (
        <nav className="NavbarItem">
            <h1 className="NavbarLogo">Travel app</h1>
            <ul className="NavbarMenu">
                <NavbarLinks NavLinkText="logout" NavLink="/forgot"/>
                <NavbarLinks NavLinkText="settings" NavLink="/settings"/>
                <NavbarLinks NavLinkText="favourites" NavLink="/favourites"/>
                <NavbarLinks NavLinkText="sign up" NavLink="/"/>
            </ul>
        </nav>
    )
}