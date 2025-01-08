import axios from 'axios'

export const login = async ({ email, password }) => {

    const body = {
        email,
        password
   }
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASEURL}/auth/login`, body, {withCredentials: true})
        return response
    } catch (err) {
        return err
    }
}

export const dashboard = async ()=> {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_BASEURL}/user/dashboard`, { withCredentials: true })
        return data.msg
    } catch (err) {
        console.log(err)
    }
}

export const updatePassWord = async ({ oldPassword, newPassword }) => {
    const body = {
        oldPassword,
        newPassword
    }
    try {
        const { data } = await axios.post(`${import.meta.env.VITE_BASEURL}/user/update-password`, body, { withCredentials: true })
        return data
    } catch(err) {
        return err
    }
}

export const addNin = async ({ valid_id }) => {
    const body = {
       valid_id
    }
    try {
        const { data } = await axios.post(`${import.meta.env.VITE_BASEURL}/user/user-validate`, body, { withCredentials: true })
        return data
    } catch (err) {
        return err?.response?.data
    }
}