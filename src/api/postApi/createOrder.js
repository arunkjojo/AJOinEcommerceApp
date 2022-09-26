import WooCommerceApi from '../WooCommerceConfigure'

export default function createOrder(order){
    
    return WooCommerceApi.post(`orders`,order)
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return [];
        });
    
}