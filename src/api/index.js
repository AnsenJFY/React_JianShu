import Axios from 'axios';

const fetch = Axios.create({
  baseURL: '',
  headers: {},
})

export const searchItem = () => (
  fetch({
    url: '/mock/search_Item.json',
    method: 'get',
    params: ''
  })
)

export const queryHomepageData = () => (
  fetch({
    url: '/mock/home.json',
    method: 'get',
    params: ''
  })
)

export const queryMoreArticle = params => (
  fetch({
    url: '/mock/homeList.json',
    method: 'get',
    params
  })
)

export const queryDetailContent = params => (
  fetch({
    url: '/mock/detailContent.json',
    method: 'get',
    params
  })
)

export const login = params => (
  fetch({
    url: '/mock/login.json',
    method: 'get',
    params
  })
)