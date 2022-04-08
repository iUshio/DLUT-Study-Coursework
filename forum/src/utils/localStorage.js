// 管理本地存储的用户姓名
export const setUserName = (userName)=>{
    localStorage.setItem('USERNAME',userName)
}

export const getUserName = (userName)=>{
    return localStorage.getItem('USERNAME')
}

export const removeUserName = ()=>{
    localStorage.removeItem('USERNAME')
}