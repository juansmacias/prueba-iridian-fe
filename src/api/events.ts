import axiosClient from '@/api/AxiosClient'

export const getEvents = () => axiosClient().get('')

export const getEventsAsync = async () => {
    try {
      const response = await axiosClient().get('')
      return {data:response.data}
    } catch (error) {
      console.error('Error fetching data:', error)
      return {error:error}
    }
  };