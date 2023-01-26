import { ChangeEvent, useEffect, useState } from "react"
import styles from "./login.module.scss"
import { Input, Space, Button, message} from 'antd';
import initLoginBg from "./init.ts"
import './login.less';
import { CaptchaAPI, LoginAPI} from "@/request/api";
import {useNavigate} from "react-router-dom"

const view = () => {
    let navigateTo = useNavigate();
    //after finish loading, initial view of the page
    useEffect(() => {
        initLoginBg();
        getCaptchaImg();
        // resize interface when size changing
        window.onresize = function () { initLoginBg() };
        //getCaptchaImg();
    }, [])

    // define user input and store usernameChange & passwordChange & captcha
    const [usernameval, setUsernameval] = useState("")
    const [passwordval, setPasswordval] = useState("")
    const [captchaval, setCaptchaval] = useState("")
    // define a variable to store captcha image info.
    const [captchaImg, setCaptchaImg] = useState("")

    // obtain user input and be stored in usernameval 
    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target.value);
        setUsernameval(e.target.value)
    }
    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target.value);
        setPasswordval(e.target.value)
    }
    const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target.value);
        setCaptchaval(e.target.value)
    }

    // click event for Login
    const goLogin = async() => {
        console.log("Username, Pw, and captcha are: ", usernameval, passwordval, captchaval)
        //verify if empty or not
        if(!usernameval.trim() || !passwordval.trim() || !captchaval.trim()){
            message.warning("The columns can't be empty")
            return
        }
        // send login request
        let loginAPIRes = await LoginAPI ({
            username:usernameval,
            password:passwordval,
            code:captchaval,
            uuid:localStorage.getItem("uuid") as string
        })
        console.log(loginAPIRes);
        if(loginAPIRes.code==200){
            //1. Login successfully reminder
            message.success("Login Successfully!");
            //2. Store token
            localStorage.setItem("abc-management-token",loginAPIRes.token);
            //3. Jump to page1
            navigateTo("/page1")
            //4. Deleted local 'uuid'
            localStorage.removeItem("uuid")
        }
    }

    // click event for captcha image
    const getCaptchaImg = async () => {
        // create new captcha request
        // CaptchaAPI().then((res)=>{
        //      console.log(res);
        // })
        let captchaAPIRes = await CaptchaAPI();
        console.log(captchaAPIRes)
        if (captchaAPIRes.code === 200) {
            //1. Display the captcha image
            setCaptchaImg("data:image/gif;base64," + captchaAPIRes.img)
            //2. Local store 'uuid' for login 
            localStorage.setItem("uuid",captchaAPIRes.uuid)
        }
 
    }

    return (
        <div className={styles.loginPage}>
            {/* Background */}
            <canvas id="canvas" style={{ display: "block" }}></canvas>
            {/* LoginBox */}
            {/* The space before 'loginbox' is neccessary*/}
            <div className={styles.loginBox + " loginbox"}>
                {/* Title */}
                <div className={styles.title}>
                    <h1>ABC Mangement&nbsp; - &nbsp;Background System</h1>
                </div>
                {/* InputBox */}
                <div className="form">
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Input placeholder="Username" onChange={usernameChange} />
                        <Input.Password placeholder="Password" onChange={passwordChange} />
                        <div className="captchaBox">
                            <Input placeholder="CAPTCHA" onChange={captchaChange} />
                            <div className="captchaImg" onClick={getCaptchaImg}>
                                <img height="38" src={captchaImg} alt="captcha" />
                            </div>
                        </div>
                        <Button type="primary" className="loginBtn" block onClick={goLogin}>Login</Button>
                    </ Space>
                </div>
            </div>
        </div>
    )
}
export default view