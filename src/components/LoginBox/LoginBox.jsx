import React,  {useContext, useState} from 'react';
import { BackgroundDiv, LoginForm, InputLogin, H1Title, Logo, LoginButton } from './LoginBox';
import { PointsContext } from '../../contexts/PointsContext';
import { PolygonsContext } from '../../contexts/PolygonsContext';
import LogoImg from "../../images/spotsatLogo.jpg"
import { useNavigate } from 'react-router-dom';

function LoginBox() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const { collectPoints } = useContext(PointsContext)
    const { collectPolygons } = useContext(PolygonsContext)
    
    async function handleLogin(e){
        e.preventDefault()

        const body = {
            email : email,
            password : password
        }

        const options = {
            method:'POST',
            mode: 'cors',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        }

        const data = await fetch('http://localhost:3000/users/login', options)
                           .then(data => data.json())
                           .then(res => res)
                           .catch(error => console.log(error))

        if(data) {

            collectPoints();
            collectPolygons();            
            navigate('/map');

        } 

    }
    

    return (
        <BackgroundDiv>
            <LoginForm>
                <H1Title>
                    Sistema SpotSat
                </H1Title>
                <Logo src={LogoImg} alt="SpotSat Logo"/>
                <InputLogin type='text' placeholder='E-mail' value={email} onInput={event => setEmail(event.target.value)} />
                <InputLogin type='password' placeholder='Senha' value={password} onInput={event => setPassword(event.target.value)} />
                <LoginButton onClick={handleLogin}>Logar</LoginButton>
            </LoginForm>
        </BackgroundDiv>      
    )
}

export default LoginBox;
