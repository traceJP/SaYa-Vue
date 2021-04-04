const local = {

    // 设置token
    setToken(token){
        localStorage.setItem("token", token);
    },
    // 获取token
    getToken(){
        return localStorage.getItem("token");
    },

    // 设置用户实体
    setUserInfo(userInfo){
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
    // 获取用户实体
    getUserInfo(){
        if(localStorage.getItem("userInfo")){
            return JSON.parse(localStorage.getItem("userInfo"))
        }else{
            return null;
        }
    },

    // 清空本地保存
    clear(){
        localStorage.clear()
    },

}

export default local
