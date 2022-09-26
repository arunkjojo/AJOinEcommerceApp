
import WooCommerceApi from '../WooCommerceConfigure'

export default function getCategory(id){
    
    return WooCommerceApi.get(`customers/${id}`)
    .then((res) => {
    //   console.log(res);
    return res;
    })
    .catch((error) => {
    //   console.log(error);
        return {};
    });
    
}