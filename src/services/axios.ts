import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://iaa-strapi.herokuapp.com/api'
})