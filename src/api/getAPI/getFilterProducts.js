import WooCommerceApi from '../WooCommerceConfigure'

export default function getFilterProduct(categoryId){
    return WooCommerceApi.get("products")
      .then((res) => {
        let responceData = res?.filter((p) => {
          return p?.categories?.find(c=>{
            return c?.id===categoryId
          })
        }).map(res=> res);
        return responceData;
      })
      .catch((error) => {
        return [];
      });
}