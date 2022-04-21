import request from './request'

export const getCategoryList = () => request({
    url: '/product/getBaseCategoryList',
    method: 'get'
}) 