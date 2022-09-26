import WooCommerceApi from '../WooCommerceConfigure'

export default function updateCustomerAddress(id,data){
    
    return WooCommerceApi.put(`customers/${id}`,data)
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return [];
        });
    
} 