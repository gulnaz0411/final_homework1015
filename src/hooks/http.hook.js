import {useState, useCallback} from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const baseUrl = 'https://sf-final-project-be.herokuapp.com/api/';

    const request = useCallback (async (url,method = 'Get', body=null, headers = {}) =>{
        setLoading (true)
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-type'] = 'aplication/json';
            }
            const response = await fetch(baseUrl+url, {method, body, headers});
            const data = await response.json();

            if (!response.ok) {
                throw new Error( 'Не удалось отправить сообщение')
            }

            setLoading (false);
           return data;
        } catch(e) {
        
           setLoading(false);
           setError(e.message);
           throw e;
        }
    }, [])
    const clearError = useCallback(() => setError(null),[]);
    return {loading, request, error,clearError};
};
