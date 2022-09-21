import WooCommerceApi from '../WooCommerceConfigure'

export default function getAllProduct(){
    return WooCommerceApi.get("products")
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return [];
        });
}