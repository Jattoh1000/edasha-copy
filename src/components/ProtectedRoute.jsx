import { useEffect } from "react"
import { useAuth } from "../contex/AuthContext"
import {replace, useNavigate} from 'react-router-dom'
import { dashboard } from "../utills/api"

export default function ProtectedRoute({ children }) {
    const {user, setUser} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        const getUser = async () => {
            if (!user || Object.keys(user).length === 0) {
                try {
                    const userData = await dashboard();
                    if (!userData) {
                        setUser({});
                        navigate('/login', { replace: true });
                    } else {
                        setUser(userData);
                    }
                } catch (err) {
                    console.error(err);
                    setUser({});
                    navigate('/login', { replace: true });
                }
            }
        };
        getUser()
    }, [user, navigate, setUser])
    return children
}