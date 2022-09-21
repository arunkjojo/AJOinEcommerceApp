import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import { useNavigation } from "@react-navigation/native";


const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

const CategorySlider = ({ category, selectedItem }) => {
  const flatListRef = React.useRef();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // const navigation = useNavigation();


  const scrollToIndex = (index, id) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index });
    setCurrentIndex(index);
    // console.log("cid",id);
    selectedItem(id);
    // navigation.navigate("Product Details", {
    //   pId: productData.id,
    // })

  };

  const renderItem = ({ item, index }) => { 
    return (
      <TouchableOpacity
        style={[
          styles.item,
          {
            backgroundColor: index == currentIndex ? "#000" : "#fff",
          },
        ]}
        onPress={() => scrollToIndex(index, item.id)}
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
  }

  return (
    <View style={styles.view}>
      <FlatList
        data={category}
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
