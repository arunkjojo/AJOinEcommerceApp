import { View, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window');
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

const Slider = ({sliderImage}) => {
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
                style={styles.sliderImage}
            />
        </TouchableOpacity>
    );
  return (
    <View>
        <FlatList
            data={sliderImage} 
            renderItem={renderItem} 
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            ref={(ref) => {
                flatListRef.current = ref;
            }}
            style={styles.slider}
            viewabilityConfig={viewConfigRef}
            onViewableItemsChanged={onViewRef.current}
        />

        <View style={styles.dotView}>
            {
                sliderImage.map(({}, index) => (
                    <TouchableOpacity key={index.toString()} style={[styles.circle, {
                        backgroundColor: index == currentIndex ? '#0641c9' : '#5a647d'
                    }]} onPress={()=> scrollToIndex(index)} />
                ))
            }
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    slider: {
        maxHeight: 300,
    },
    sliderImage: {
        width: (width-20),
        height: 250,
        resizeMode: 'cover',
        margin: 4,
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
})

export default Slider