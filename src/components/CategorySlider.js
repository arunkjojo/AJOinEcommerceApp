import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

const CategorySlider = ({ list }) => {
  const flatListRef = React.useRef();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const navigation = useNavigation();

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index });
    setCurrentIndex(index);

    // navigation.navigate("Product Details", {
    //   pId: productData.id,
    // })
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.item,
        {
          backgroundColor: index == currentIndex ? "#000" : "#fff",
        },
      ]}
      onPress={() => scrollToIndex(index)}
      activeOpacity={1}
    >
      <Text
        style={[
          styles.text,
          {
            color: index == currentIndex ? "#fff" : "#000",
          },
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.view}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => {
          flatListRef.current = ref;
        }}
        style={styles.view}
        viewabilityConfig={viewConfigRef}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  item: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 25,
    width: 75,
    height: 30,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
});
export default CategorySlider;
