import { isRight } from 'fp-ts/lib/Either';
import axios, { AxiosRequestConfig } from 'axios';
import * as t from 'io-ts';
import { PathReporter } from 'io-ts/lib/PathReporter'

export function get<T>(url: string, type: t.Type<T>, config?: AxiosRequestConfig): Promise<T> {
  return axios.get(url, config)
    .then(res => {
      const value = type.decode(res.data);
      if(isRight(value)) {
        console.log(value.right)
        return value.right;
      } else {
        console.log(value.left)
        const message = PathReporter.report(value)
        throw value.left
      }  
    })
}
