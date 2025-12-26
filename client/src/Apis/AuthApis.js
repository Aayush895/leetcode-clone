import axiosInstance from '../config/axiosConfig'

export async function registerUser(userDetails) {
  try {
    const responseData = await axiosInstance.post('/register', userDetails)
    return responseData?.data
  } catch (error) {
    console.log(error)
    throw error
  }
}
