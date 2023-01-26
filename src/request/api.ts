// Unified all path in request api
import exp from "constants";
import request from "./index"

// During request: requested parameters and return type need to be constrained

// Captcha request
export const CaptchaAPI = ():Promise<CaptchaAPIRes> => request.get("/prod-api/captchaImage");

// Login request
export const LoginAPI = (params:LoginAPIReq):Promise<LoginAPIRes> => request.post("/prod-api/login",params);