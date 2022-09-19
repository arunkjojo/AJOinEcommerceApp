import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Slider from "../components/Slider";
import ProductList from "./ProductList";
import CategorySlider from "../components/CategorySlider";
import { 
  // products, 
  // categories 
} from "../database/DataBase";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Feather";
import { IconButton } from "@react-native-material/core";

// import { WooCommerceConfig } from '../config/Constant'
import WooCommerceAPI from 'react-native-woocommerce-api'

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
  const [categories, setCategories] = React.useState([]);
  const [product, setProduct] = React.useState([]);


  const sliderImages = [
    require("../assets/images/banner/banner1.png"),
    require("../assets/images/banner/banner1.png"),
    require("../assets/images/banner/banner1.png"),
    require("../assets/images/banner/banner1.png"),
    require("../assets/images/banner/banner1.png"),
    // "https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg",
  ];

  
  React.useEffect(() => {
    
    // WooCommerceAPI configurations
    const WooCommerceAPIs = new WooCommerceAPI({
      url: 'https://123koin.com', // Your store URL
      consumerKey: 'ck_e3277b1b5ea1fd74f0a3d65c5500894a15adf568', // Your consumer key
      consumerSecret: 'cs_c9fe962981454ac13951e5fa111b8092a999a761', // Your consumer secret
      version: 'wc/v3', // WooCommerce WP REST API version
      wpAPI: true, // Enable the WP REST API integration
      ssl: true,
      queryStringAuth: true
    });
    
    // get all product
    WooCommerceAPIs.get("products")
    .then((data) => {
      // console.log(JSON.stringify(data));
      setProduct(data)
    })
    .catch((error) => {
      console.log(error.data.message);
    });

    // get all product/categories
    WooCommerceAPIs.get("products/categories")
    .then((data) => {
      setCategories(data)
    })
    .catch((error) => {
      console.log(error.data.message);
    });
    
  }, []);

  const handleCategoryItem = (categoryId) => {

    // WooCommerceAPI configurations
    const WooCommerceAPIs = new WooCommerceAPI({
      url: 'https://123koin.com', // Your store URL
      consumerKey: 'ck_e3277b1b5ea1fd74f0a3d65c5500894a15adf568', // Your consumer key
      consumerSecret: 'cs_c9fe962981454ac13951e5fa111b8092a999a761', // Your consumer secret
      version: 'wc/v3', // WooCommerce WP REST API version
      wpAPI: true, // Enable the WP REST API integration
      ssl: true,
      queryStringAuth: true
    });
    
    // get all product
    WooCommerceAPIs.get("products")
    .then((data) => {
      let newProduct = data?.filter((p) => {
        return p?.categories?.find(c=>{
          return c?.id===categoryId
        })
      }).map(data=>{
        return data;
      });

      setProduct(newProduct);
    })
    .catch((error) => {
      console.log(error.data.message);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Slider sliderImage={sliderImages} />
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
            <ProductList products={product} />
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
