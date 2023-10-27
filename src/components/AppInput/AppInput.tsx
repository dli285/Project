import React, {useState, forwardRef} from "react";
import { ThemeInput, ThemeInputError } from "./AppInput.style";

interface AppInputProps {
    type: string
    spantext: string
    isError?: boolean
    errorText?: string
}

export const AppInput =  forwardRef<HTMLInputElement, AppInputProps>(
    function AppInput({ spantext, type, isError, errorText, ...props }: AppInputProps) 
    {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
        <div className="input">
            <ThemeInput 
                type={type} 
                value={inputValue}
                onChange={handleInputChange}
                {...props}
            />
            <span className="input-span">{spantext}</span>
            <i></i>
        </div>
        <div>
        {isError &&
                <ThemeInputError $isError={isError}>
                    {errorText}
                </ThemeInputError>
        }
        </div>
        </div>
        )
    }
)