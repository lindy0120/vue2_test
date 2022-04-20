import request from './request'

export const getCategoryList = () => request({
    url: '/proxy/api/product/getBaseCategoryLis',
    method: 'get'
}) 