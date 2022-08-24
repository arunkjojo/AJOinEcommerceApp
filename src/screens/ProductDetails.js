import { ScrollView, View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Button, Stack } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

const ProductDetails = () => {
    const navigation = useNavigation();
    const slideImages= [
        "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg",
        "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg",
        "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg",
        "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg"
    ];
    const flatListRef= React.useRef();
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const onViewRef = React.useRef(({changed}) => {
        if(changed[0].isViewable) {
            setCurrentIndex(changed[0].index)
        }
    })

    const scrollToIndex = (index) => {
        flatListRef.current?.scrollToIndex({animated: true, index: index})
    }

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => console.log('clicked')} activeOpacity={1}>
            <Image
                source={{
                    uri: item
                }}
                style={styles.productSliderImage}
            />
        </TouchableOpacity>
    );
    return (
        <ScrollView style={styles.productBox}>
            
            <FlatList
                data={slideImages} 
                renderItem={renderItem} 
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ref={(ref) => {
                    flatListRef.current = ref;
                }}
                style={styles.productSlider}
                viewabilityConfig={viewConfigRef}
                onViewableItemsChanged={onViewRef.current}
            />

            <View style={styles.dotView}>
                {
                    slideImages.map(({}, index) => (
                        <TouchableOpacity key={index.toString()} style={[styles.circle, {
                            backgroundColor: index == currentIndex ? '#0641c9' : '#5a647d'
                        }]} onPress={()=> scrollToIndex(index)} />
                    ))
                }
            </View>

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
    productSlider: {
        maxHeight: 300,
    },
    productSliderImage: {
        width: (width-20),
        height: 250,
        resizeMode: 'cover',
    },
    dotView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    circle: {
        width: 10,
        height: 10,
        backgroundColor: '#5a647d',
        borderRadius: 50,
        marginHorizontal: 5
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