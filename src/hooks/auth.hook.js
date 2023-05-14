import {useState, useCallback,useEffect} from 'react';

const storageName = 'userData'
 
export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const login= useCallback((jwtToken,id) => {
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem(storageName, JSON.stringify({
            userId:id, token:jwtToken

        }))

    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)

        setTimeout (() => {
            localStorage.removeItem('token');
          } , 7*24*60*60*1000); // удаление ч/з 7 дней

    }, [])

     

    return {login, logout, token , userId}
}