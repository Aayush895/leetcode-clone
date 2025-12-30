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

export async function loginUser(userDetails) {
  try {
    const responseData = await axiosInstance.post('/login', userDetails)
    return responseData?.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function verifyCookie() {
  try {
    const responseData = await axiosInstance.get('/verify-cookie', {
      withCredentials: true,
    })
    console.log('LOGGING DATA: ', responseData?.data)
    return responseData?.data
  } catch (error) {
    console.log(error)
    throw error
  }
}
