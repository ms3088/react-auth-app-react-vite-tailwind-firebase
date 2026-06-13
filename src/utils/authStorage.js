const TTL = 24 *60 * 60 * 1000;
export const saveUser = (user) => {
    const item = {
        value:user,
        expire :Date.now() + TTL,
    };
    localStorage.setItem("user",JSON.stringify(item));
};
export const getUser = ()=>{
    const itemStr = localStorage.getItem("user");
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);

    if (Date.now() > item.expiry){
        localStorage.removeItem("user");
        return null;
    }
    return item.value;
};
export const clearUser = ()=>{
    localStorage.removeItem("user");
};