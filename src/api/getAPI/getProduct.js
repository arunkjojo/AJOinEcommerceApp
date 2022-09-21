import WooCommerceApi from '../WooCommerceConfigure'

export default function getProduct(productId){
    
    return WooCommerceApi.get(`products/${productId}`)
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return [];
        });
    
}