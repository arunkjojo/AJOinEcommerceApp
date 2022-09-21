import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

const Slider = ({ sliderImages }) => {
  const flatListRef = React.useRef();
  const [currentIndex, setCurrentIndex] = React.useState(-1);
  const maxImg=sliderImages?.length || 0;

  const delay = 1;
  React.useEffect(
    () => {
      let timer = setInterval(() =>{
        let scrollIndexValue = currentIndex<(maxImg-1)?currentIndex:-1;
        scrollIndexValue++;
        scrollToIndex(scrollIndexValue);
        setCurrentIndex(scrollIndexValue)
      },delay*1000)

      return () => {
        clearInterval(timer);
      }
    },
    [currentIndex]
  );

  const onViewRef = React.useRef(({ changed }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const scrollToIndex = (index) => {
    // console.log(index, flatListRef.current)
    flatListRef.current?.scrollToIndex({ animated: true, index: index });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => console.log("clicked")}
        activeOpacity={1}
      >
        <Image
          source={item} // { uri: item }
          style={styles.sliderImages}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.sliderView}>
      <FlatList
        data={sliderImages}
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
        {sliderImages.map(({}, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
              styles.circle,
              {
                backgroundColor: index == currentIndex ? "#fff" : "#666",
              },
            ]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderView: {
    marginLeft: 8,
    marginRight: 8,
  },
  slider: {
    maxHeight: 255,
  },
  sliderImages: {
    width: width - 20,
    height: 200,
    resizeMode: "cover",
    margin: 4,
    borderRadius: 10,
  },
  dotView: {
    flexDirection: "row",
    marginTop: -15,
    marginLeft: 15,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: "#666",
    borderRadius: 50,
    marginHorizontal: 5,
  },
});

export default Slider;
