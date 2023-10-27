import React, { useState} from "react";
import './SettingsPage.scss'
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { ToggleSwitch } from "../../components/ToggleSwitch/ToggleSwitch";
import { LinkButton } from "../../components/LinkButton/LinkButton";

export const SettingsPage = () => {
    return (
        <div>
            <div className="page-content page-container" id="page-content">
                <div className="Linker1">
                    <LinkButton linkerHref="/" linkerText=" Log out"/>
                </div>
                <div className="Linker2">
                    <LinkButton linkerHref="/main" linkerText="Return to main"/>
                </div>
                <div className="padding">
                    <div className="container">
                        <div>
                            <div className="userCard">
                                <div>
                                    <div className="userProfile">
                                        <div className="card-block text-center text-white">
                                            <div className="imgDiv">
                                                <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img" alt="User-Profile-Image"/>
                                            </div>
                                            <AppHeader type="h5" headerText="New user"/>
                                            <p>New user</p>
                                            <div className="ToggleComponent">
                                                <ToggleSwitch/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="cardBlock">
                                            <AppHeader type="h5" headerText="Information"/>
                                            <div className="row">
                                                <div className="info">
                                                    <Paragraph ParagraphText="Email"/>
                                                    <AppHeader type="h6" headerText="random@gmail.com"/>
                                                </div>
                                                <div className="info">
                                                    <Paragraph ParagraphText="Phone"/>
                                                    <AppHeader type="h6" headerText="998989989898"/>
                                                </div>
                                            </div>
                                            <AppHeader type="h5" headerText="Description:"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}