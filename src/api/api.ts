import axios from 'axios'
import { IList } from './../Types/Types'

export const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://www.algoexpert.io/api/fe/'
})

export const listsAPI = {
  getLists() {
    return instance.get<IList>('questions').then(res => res.data)
  }
}