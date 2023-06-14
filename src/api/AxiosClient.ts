import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export default function AxiosClient(){
    return axios.create({
        baseURL: API_URL,
      })
}