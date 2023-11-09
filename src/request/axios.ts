import axios, {
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios'

const instance: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL as string,
	timeout: 10000,
	responseType: 'json',
})

export interface ResponseBody<T = unknown> {
	code: number
	data: T
	msg: string
}

instance.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	(response: AxiosResponse) => {
		return response
	},
	(error) => {
		return Promise.reject(error)
	}
)

export async function get<T = unknown>(
	url: string,
	params?: Record<string, unknown>
): Promise<ResponseBody<T>> {
	const res = await instance.get(url, { params })
	return res.data
}

export async function post<T = unknown>(
	url: string,
	data?: Record<string, unknown>
): Promise<ResponseBody<T>> {
	const res = await instance.post(url, data)
	return res.data
}
