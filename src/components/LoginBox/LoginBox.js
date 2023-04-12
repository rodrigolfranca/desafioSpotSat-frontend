import Styled from 'styled-components';

export const BackgroundDiv = Styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #2a2a9f;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginForm = Styled.form`
    border: 1px solid black;
    border-radius: 5%;
    box-shadow: black 13px 11px 20px;
    background-color: #fdfdfd;

    height: 600px;
    width: 500px;
    padding: 30px 50px;
    

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`

export const H1Title = Styled.h1`
    text-align: center;
    margin-top: 30px;
    font-size: 40px;    
`

export const Logo = Styled.img`
    height: 100px;
    width: 100px;
    margin: 50px;     
`

export const InputLogin = Styled.input`
    border-radius: 8px;
    border: 1px black solid;
    padding-left: 10px;
    margin-bottom: 20px;
    
    height: 50px;
    width: 100%;
    font-size: 20px;
`

export const LoginButton = Styled.button`
    border: 1px black solid;
    border-radius: 15px;
    
    margin: 30px;

    height: 50px;    
    width: 100%;
    font-size: 20px;
`