import React from "react";
import { AiOutlineMail } from 'react-icons/ai'
import './ForgotPasswordPage.scss'
import { AppLink } from "../../components/AppLink/AppLink";
import { AppInput } from "../../components/AppInput/AppInput";
import { AppButton } from "../../components/AppButton/AppButton";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom";

interface ForgotForm {
    useremail: string
}

const ForgotFormSchema = yup.object({
    useremail: yup.string().required('Обязательное поле'),
})

export const ForgotPasswordPage = () => {
    const navigate = useNavigate()
    const { control, handleSubmit, formState: {errors} } = useForm<ForgotForm>({
        resolver: yupResolver(ForgotFormSchema),
        defaultValues: {
            useremail: '',
        }
    })

    const onSubmit = (data: ForgotForm) => {
        if (data.useremail === "dong@gmail.com") {
            localStorage.setItem("useremail",data.useremail);
            navigate("/main")
        } else {
            alert("Incorrect useremail")
        }
      }

    return (
        <div className="form">
        <div className="box">
            <form onSubmit={handleSubmit(onSubmit)}>
                <AppHeader type="h2" headerText="Write your email"/>
                <div className="inputBox">
                    <AiOutlineMail className="ion-icon"/>
                    <Controller 
                        name="useremail"
                        control={control}
                        render={({field}) => 
                            <AppInput 
                                type="text" 
                                spantext="Useremail"
                                {...field}
                                errorText={errors.useremail?.message}
                                isError={errors.useremail ? true : false}
                                />
                            }
                    />
                </div>
                <div className="forgot">
                    <AppLink href="/" linkText="Return"/>
                </div>
                <AppButton buttonText="Send"/>
            </form>
        </div>
    </div>
    )
}