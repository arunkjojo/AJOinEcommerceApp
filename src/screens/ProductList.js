import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Product from "../components/Product";

const ProductList = ({ products }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        {products?.map((element, index) => (
          <Product index={index} key={index.toString()} productData={element} />
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: 'space-around',
    marginHorizontal:10,
  },
});

export default ProductList;
