import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./security/AuthContext";

export default function LoginComponent(){

    const [username, setUsername] = useState('maicoding')
    const [password, setPassword] = useState('');

    const [showError, setShowError] = useState(false)

    const navigate = useNavigate();

    const authContext = useAuth()

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    async function handleSubmit(){
        if(await authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        }else{
            setShowError(true)
        }
    }

    return(
        <div className="Login">
            <h1>Login</h1>
            {showError && <div className="errorMessage">인증 실패. 자격 증명(credential)을 확인하세요.</div>}

            <div className="loginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}