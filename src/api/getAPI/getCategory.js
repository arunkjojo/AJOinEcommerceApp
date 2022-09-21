import WooCommerceApi from '../WooCommerceConfigure'

export default function getCategory(){
    
    return WooCommerceApi.get("products/categories")
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return [];
        });
    
}