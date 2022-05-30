
import { observable, action } from "mobx";
import { createContext } from 'react'
import ROOT_URL from '../services/api/URLApi';

class ProductStore {
    @observable product = []
    @observable productDetail = []

    @action getProduct = async () => {
        const getData = await ROOT_URL.get('getProduct')
        this.product = getData.data.data
    }

    @action getProductDetail = async (param) => {
        const getData = await ROOT_URL.get(`getProductDetail/${param}`)
        this.productDetail = getData.data.data[0]

        return getData.data
    }

    @action updateProduct = async (param, payload) => {
        const getData = await ROOT_URL.post(`updateProduct/${param}`, payload)

        return getData.data
    }

    @action getProductFromElevenia = async (param) => {
        const action = await ROOT_URL.get(`getProductFromElevenia/${param}`)
        const getDataNew = await ROOT_URL.get('getProduct')
        this.product = getDataNew.data.data

        return action.data
    }
}

const store = createContext(new ProductStore())
export default store