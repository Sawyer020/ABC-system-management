import { ChangeEvent, useEffect, useState } from "react"
import styles from "./login.module.scss"
import { Input, Space, Button } from 'antd';
import initLoginBg from "./init.ts"
import './login.less';


const view = () => {
    //after finish loading
    useEffect(() => {
        initLoginBg();
        // resize interface when size changing
        window.onresize = function () { initLoginBg() };
    }, [])

    // define user input and store usernameChange & passwordChange & captcha
    const [usernameval, setUsernameval] = useState("")
    const [passwordval, setPasswordval] = useState("")
    const [captchaval, setCaptchaval] = useState("")

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

    const goLogin = () => {
        console.log("Username, Pw, and captcha are: ", usernameval, passwordval, captchaval)
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
                            <div className="captchaImg">
                                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.uh.edu%2Fengines%2Fepi3043.htm&psig=AOvVaw1WJMrRkqAsM_0fLF1f3bd6&ust=1674158400306000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJCs4pf00fwCFQAAAAAdAAAAABAR" alt="captcha" />
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