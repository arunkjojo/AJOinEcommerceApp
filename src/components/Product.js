import React from "react";
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity  } from "react-native";
import { Button } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const cardGap = 16;
const cardWidth = (width - cardGap * 3) / 2;

const Product = ({ productData, index }) => {
  const navigation = useNavigation();
  return (
    <View

      onPress={() =>
        navigation.navigate("Product Details", {
          pId: productData.id,
        })
      }
      
      style={[
        styles.productBox,
        {
          marginLeft: index % 2 !== 0 ? 10 : 0,
          marginRight: index % 2 !== 0 ? 0 : 10,
        },
      ]}
    >
      <TouchableOpacity  onPress={() =>
        navigation.navigate("Product Details", {
          pId: productData.id,
        })
      }>
      <Image
        style={styles.productImage}
        source={productData.image} //{ uri: productData.image }
        alt={productData.name}
        resizeMode="cover"
      />
      </TouchableOpacity>
      <Text
        style={styles.productTitle}
        onPress={() =>
          navigation.navigate("Product Details", {
            pId: productData.id,
          })
        }
      >
        {productData.name.slice(0, 18)}..
      </Text>
      <Text
        style={styles.productRate}
        onPress={() =>
          navigation.navigate("Product Details", {
            pId: productData.id,
          })
        }
      >
        IDR: {productData.prize}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productBox: {
    marginTop: cardGap - 10,
    marginBottom: cardGap,
    width: cardWidth,
    height: 200,
    backgroundColor: "white",
    // borderRadius: 16,
    // shadowOpacity: 0.2,
    justifyContent: "center",
  },
  productImage: {
    width: cardWidth - 0,
    height: 150,
    borderRadius: 25,
  },
  productTitle: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 10,
    overflow: "hidden",
  },
  productRate: {
    fontWeight: "normal",
    marginBottom: 10,
    marginLeft: 10,
    color: "#666",
  },
});

export default Product;
