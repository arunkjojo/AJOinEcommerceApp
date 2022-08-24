import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Category from '../components/Category';
import DataBase from '../database/DataBase.json'
import Slider from '../components/Slider';

const Home = () => {
    const slideImages= [
        "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg",
        "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg",
        "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg",
        "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg"
    ];
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Slider sliderImage={slideImages} />
                    </View>
                    <View style={styles.row}>
                        {DataBase.categories.map((element,index)=>(
                            <Category i={index} key={index} data={element} />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})
export default Home