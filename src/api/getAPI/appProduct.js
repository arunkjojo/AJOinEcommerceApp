import WooCommerceMainApi from '../WooCommerceAPI'

export default async function getAllProduct(){
    const responceData= {
        success:false,
        data:[],
        error:''
    }
    try {
        const { data } = await WooCommerceMainApi.get('products',{
            per_page: 50
        });
        responceData.success=true;
        responceData.data=data;

        res.json( responceData )
    } catch (error) {
        responceData.error=error.massage;
        res.status( 500 ).json( responceData )
    }
    
}