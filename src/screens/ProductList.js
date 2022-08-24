import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Flex } from '@react-native-material/core'

import Product from '../components/Product';
import DataBase from '../database/DataBase.json'

const ProductList = ({route}) => {
    React.useEffect(()=>{

        const productListIds = route.params.productListIds;
        console.log("productListIds", productListIds)

        // // let data = DataBase.products.filter(function(item){
        //     return item.id == productListIds;
        // }).map(function(productsData){
        //     return productsData;
        // });
    }, [])
    return (
        <ScrollView style={styles.container}>
            <View style={styles.row}>
                {DataBase.products.map((element,index)=>(
                    <Product key={index} productData={element} />
                ))}
                
            </View>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})

export default ProductList