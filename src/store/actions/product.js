
import { listApis } from '../../services/products'

export const loadProduct = payload => dispatch => {
    const res = await listApi();
    dispatch({
        type: 'PRODUCT_LOADED',
        payload: res
    })
}