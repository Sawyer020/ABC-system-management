import axios from "axios"

// Create 'axios' instance
const instance = axios.create({
    // Fetch base request url
    baseURL:"http://xue.cnkdl.cn:23683",
    timeout:20000
})

// Request interceptors
instance.interceptors.request.use(config=>{

    return config
},err=>{
    return Promise.reject(err)
});

// Respond interceptors
instance.interceptors.response.use(res=>{

    return res.data
},err=>{
    return Promise.reject(err)
});

export default instance