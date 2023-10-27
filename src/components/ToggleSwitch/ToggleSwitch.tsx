import React, {useState, useEffect} from "react";
import { ToggleDiv } from "./ToggleSwitch.style";

export const ToggleSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const selectedColor = localStorage.getItem("selectedColor");
      if (selectedColor) {
        setIsDarkMode(selectedColor === "black");
        document.body.style.backgroundColor = selectedColor;
      }
    }, []);

    const handleToggle = () => {
      setIsDarkMode(!isDarkMode);
      const selectedColor = isDarkMode ? "Lavender" : "black";
      localStorage.setItem("selectedColor", selectedColor);
      document.body.style.backgroundColor = selectedColor;
    };
    
    return (
        <ToggleDiv>
        <label className="ToggleLabel">
            <input className="ToggleInput" 
            type="checkbox"
            checked={isDarkMode}
            onChange={handleToggle}
            />
            <span className="Slider"></span>
        </label>
        </ToggleDiv>
    )
}