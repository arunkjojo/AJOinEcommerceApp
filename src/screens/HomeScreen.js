import { SafeAreaView, ScrollView, StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Feather";
import { IconButton } from "@react-native-material/core";

import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import CategorySlider from "../components/CategorySlider";
import Loading from "../components/Loading";

import getCategory from "../api/getApi/getCategory";
import getAllProduct from "../api/getApi/getAllProduct";
import getFilterProducts from "../api/getApi/getFilterProducts";


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
  const [loading, setLoding] = React.useState(true);

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
      setLoding(false)
    })
  },[getAllProduct]);

  React.useEffect(() => {
    setLoding(true)
    getCategory().then((res) => {
      setCategories(res);
      setLoding(false)
    });
  },[getCategory]);

  const handleCategoryItem = (categoryId) => {
    setLoding(true)
    getFilterProducts(categoryId).then(res=>{
      setProducts(res);
      setLoding(false)
    });
  }

  
  React.useEffect(() => {
    if(loading){
      var timer = setTimeout(() =>{
        setLoding(false)
      },5000)
    }
    return () => {
      clearTimeout(timer);
    }
  },[loading]);

  return (
    <SafeAreaView style={styles.container}>
      {loading ?(
        <Loading />
      ) : (
        <>
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
        </>
      )}
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
