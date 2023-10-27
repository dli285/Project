import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import { MainPage } from "./pages/Main/Main";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./store/theme/theme";
import { FavouritePage } from "./pages/FavouritesPage/FavouritesPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

const MyApp: React.FC = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<LoginPage/>
        },
        {
            path: '/forgot',
            element:<ForgotPasswordPage/>
        },
        {
            path: '/settings',
            element: <SettingsPage/>
        },
        {
            path: '/favourites',
            element: <FavouritePage/>
        },
        {
            path: '/main',
            element: <MainPage/>
        }
    ])
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </Provider>
        
    )
}

export default MyApp