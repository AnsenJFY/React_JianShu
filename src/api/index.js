import Axios from 'axios';

const fetch = Axios.create({
    baseURL:'',
    headers:{},
})

export const searchItem = () => {
    return fetch({
        url:'/mock/search_Item.json',
        method:'GET',
        params:''
    })
}