// This file is created for declaring the type of request parameters and response

// Extension - JSON to TS: (shift+control+option) + V
// The Response Type Constraint of Captcha
interface CaptchaAPIRes {
  msg: string;
  img: string;
  code: number;
  captchaEnabled: boolean;
  uuid: string;
}
// The Request Type Constraint of Login
interface LoginAPIReq{
    username:string;
    password:string;
    code:string;
    uuid:string;
}
// The Response Type Constraint of Login
interface LoginAPIRes{
    msg:string;
    code:number;
    token:string;
}