import React, {useState} from "react";
import { BsPersonCircle } from 'react-icons/bs'
import { AiFillLock } from 'react-icons/ai'
import './LoginPage.scss'
import { AppInput } from "../../components/AppInput/AppInput";
import { AppLink } from "../../components/AppLink/AppLink";
import { AppButton } from "../../components/AppButton/AppButton";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom";

interface LoginForm {
    username: string
    userpassword: string
}

const loginFormSchema = yup.object({
    username: yup.string().required('Обязательное поле'),
    userpassword: yup.string().required('Обязательное поле'),
})

export const LoginPage = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: {errors} } = useForm<LoginForm>({
        resolver: yupResolver(loginFormSchema),
        defaultValues: {
            username: '',
            userpassword: ''
        }
    })

      const onSubmit = (data: LoginForm) => {
        if (data.username === "dong" && data.userpassword === "123") {
            localStorage.setItem("username",data.username);
            localStorage.setItem("userpassword", data.userpassword);
            navigate("/main")
        } else {
            alert("Incorrect username or password")
        }
      }

    return (
        <div className="form">

        <div className="box">
            <form onSubmit={handleSubmit(onSubmit)}>
            <AppHeader type="h2" headerText="Login"/>
                <div className="inputBox">
                    <BsPersonCircle className="ion-icon"/>
                    <Controller
                        name="username"
                        control={control}
                        render={({field}) => 
                            <AppInput 
                            type="text"
                            {...field}
                            spantext="Username"
                            errorText={errors.username?.message}
                            isError={errors.username ? true : false}
                            />
                    }
                    />
                </div>
                <div className="inputBox">
                    <AiFillLock  className="ion-icon"/>
                    <Controller 
                        name="userpassword"
                        control={control}
                        render={({field}) =>
                            <AppInput  
                            type="password"
                            {...field}
                            spantext="UserPassword"
                            errorText={errors.userpassword?.message}
                            isError={errors.userpassword ? true : false}
                            />
                        }
                    />
                </div>
                <div className="forgot">
                    <AppLink href="./forgot" linkText="Forgot password?"/>
                </div>
                <AppButton isDisabled={!!Object.keys(errors).length}  buttonText="Login"/>
            </form>
        </div>
    </div>
    )
}

