import axios, { type AxiosResponse } from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_PLATZI_API_URL,
  withCredentials: false,
  timeout: 60000
})

export default {
  listProducts(): Promise<AxiosResponse> {
    return client('/products')
  },
  getProduct(id: number): Promise<AxiosResponse> {
    return client(`/products/${ id }`)
  },
}