import React from 'react';
import MyInput from "../components/UI/inout/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = React.useContext(AuthContext)
    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Страница для входа</h1>
            <form onSubmit={login}>
                <MyInput type={"text"} placeholder={"Введите логин"}/>
                <MyInput type={"password"} placeholder={"Введите пароль"}/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;