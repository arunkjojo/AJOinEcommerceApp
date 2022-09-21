import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Slider from "../components/Slider";
import ProductList from "./ProductList";
import CategorySlider from "../components/CategorySlider";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Feather";
import { IconButton } from "@react-native-material/core";

import getAllProduct from "../api/getAPI/getAllProduct";
import getCategory from "../api/getAPI/getCategory";
import getFilterProduct from "../api/getAPI/getFilterProducts";

// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCategory, fetchProduct } from '../redux/productSlice';

function BottomNav() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        maxHeight: 50,
        flex: 1,
        flexDirection: "row",
        alignItems: "baseline",
      }}
    >
      <IconButton
        style={{ flex: 1 }}
        icon={(props) => <Icon name="home" {...props} />}
        color="primary"
        onPress={() => navigation.navigate("Home")}
      />
      <IconButton
        style={{ flex: 1 }}
        icon={(props) => <Icon name="search" {...props} />}
        color="primary"
        onPress={() => navigation.navigate("Home")}
      />
      <IconButton
        style={{ flex: 1 }}
        icon={(props) => <Icon name="heart" {...props} />}
        color="primary"
        onPress={() => navigation.navigate("Favorite")}
      />
      <IconButton
        style={{ flex: 1 }}
        icon={(props) => <Icon name="user" {...props} />}
        color="primary"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
}

const Home = () => {
  // const dispatch = useDispatch();

  // React.useEffect(() => { 
  //   dispatch(fetchCategory());
  //   dispatch(fetchProduct());  
  // }, []);

  // const {product, category} = useSelector(state => state.product);

  
  const [categories, setCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);

  // React.useEffect(() => {
  //   setProducts(product);
  // },[product]);

  // React.useEffect(() => {
  //   setCategories(category);
  // },[category]);

  const sliderImages = [
    require("../assets/images/banner/banner1.png"),
    require("../assets/images/banner/banner1.png"),
    require("../assets/images/banner/banner1.png"),
    require("../assets/images/banner/klo.png"),
    require("../assets/images/banner/banner1.png"),
    require("../assets/images/banner/banner1.png"),
    require("../assets/images/banner/klo.png"),
    // "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg",
  ];
  
  React.useEffect(() => {
    getAllProduct().then(res =>{
      setProducts(res);
    })
  },[getAllProduct]);

  React.useEffect(() => {
    getCategory().then((res) => {
      setCategories(res);
    });
  },[getCategory]);

  const handleCategoryItem = (categoryId) => {
    getFilterProduct(categoryId).then(res=>{
      setProducts(res);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Slider sliderImages={sliderImages} />
          </View>
          <View style={{ marginVertical: 20 }}>
            <CategorySlider selectedItem={(id)=>handleCategoryItem(id)} category={categories} />
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  marginHorizontal: 20,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                New Arrival
              </Text>
              <Text style={{ marginHorizontal: 20 }}>See All</Text>
            </View>
            <ProductList products={products} />
          </View>
        </ScrollView>
      </View>
      <BottomNav />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 16,
  },
});
export default Home;
