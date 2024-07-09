import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

type Result<T> = {
  code: number
  message: string
  result: T
}

export class Request {
  instance: AxiosInstance
  baseConfig: AxiosRequestConfig = {
    baseURL: '10.170.40.47:40001/portal',
    timeout: 50000
  }
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config))

    this.instance.interceptors.request.use(
      (config) => {
        // TODO: token 处理
        const token = localStorage.getItem('token') as string
        if (token) {
          config.headers!.Authorization = token
        }
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res
      },
      (err: any) => {
        // const status = err?.response?.status
        // const message = errorHandler(status)
        return Promise.reject(err) // TODO: 响应异常处理
      }
    )
  }

  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
    return this.instance.get(url, config)
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.post(url, data, config)
  }
}

export default new Request({})
