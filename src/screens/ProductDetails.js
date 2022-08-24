import { ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Stack } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native';
import Slider from '../components/Slider';

const ProductDetails = () => {
    const navigation = useNavigation();
    const slideImages= [
        "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg",
        "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg",
        "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg",
        "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg"
    ];
    
    return (
        <ScrollView style={styles.productBox}>
            
            <Slider sliderImage={slideImages} />

            <Text style={styles.productTitle}>
                Product 1
            </Text>
            <Text style={styles.productRate}>
                $ 200
            </Text>
            <Text h6 style={styles.productDescription}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.
            </Text>

            <Stack center style={styles.productButton}>
                <Button
                    color="primary" 
                    title="Add Cart"
                    onPress={() => navigation.navigate('Cart')}
                />
            </Stack>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    productBox: {
        margin: 4,
        backgroundColor: '#fff',
        height: '100%',
        padding: 10,
        flexDirection: 'column',
        flex: 1,
    },
    productTitle: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10, 
        marginTop: 20
    },
    productRate: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 20
    },
    productDescription: {
        fontSize: 18,
        color: '#5a647d'
    },
    productButton: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 40
    }
})

export default ProductDetails