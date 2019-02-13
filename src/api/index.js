import Axios from 'axios';

const fetch = Axios.create({
    baseURL:'',
    headers:{},
})

export const searchItem = () => (
    fetch({
        url:'/mock/search_Item.json',
        method:'GET',
        params:''
    })
)

export const queryHomepageData = () => (
    fetch({
        url:'/mock/home.json',
        method:'GET',
        params:''
    })
)

export const queryMoreArticle = (params) => (
    fetch({
        url:'/mock/homeList.json',
        method:'GET',
        params:params
    })
)

export const queryDetailContent = (params)=>(
    fetch({
        url:'/mock/detailContent.json',
        method:'GET',
        params:params
    })
)