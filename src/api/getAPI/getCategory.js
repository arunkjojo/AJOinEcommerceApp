import WooCommerceApi from '../WooCommerceConfigure'

export default function getCategory(){
    
    return WooCommerceApi.get("products/categories")
        .then((res) => {
            // console.log("res",res)
            return res;
        })
        .catch((error) => {
            // console.log("error",error)
            return [];
        });
    
}