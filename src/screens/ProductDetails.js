import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { Button, Stack } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
// import { products } from "../database/DataBase";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';


import WooCommerceAPI from 'react-native-woocommerce-api'

const { width } = Dimensions.get("window");
const ProductDetails = ({ route }) => {

  const dispatch = useDispatch();

  const { pId } = route.params;
  const navigation = useNavigation();
  const [productDetails, setProductDetails] = React.useState(null);

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
    WooCommerceAPIs.get(`products/${pId}`)
    .then((productDetails) => {
      // console.log("productDetails",JSON.stringify(productDetails));
      setProductDetails(productDetails);
    })
    .catch((error) => {
      console.log(error.data.message);
      setProductDetails(null);
    });

  }, []);

  const handleAddToCart = (data) => {
    let product = {
      id: data.id,
      name: data.name,
      price: data.prize,
      image: data.image
    }
    addToLocalStorage(product);
    dispatch(addToCart(product));
    navigation.navigate("Cart");
  }

  const addToLocalStorage = (product) => {
    var cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if(cart.length > 0) {
      const itemInCart = cart.find((item) => item.id === product.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
    }else{
      let newCart = {
        ...product,
        quantity: 1
      }
      localStorage.setItem("cart", JSON.stringify(newCart))
    }
  }

  const imgUrl=productDetails?.images[0]?.src;
  return (
    <>
      {productDetails && (
        
        <ScrollView style={styles.productBox}>
          <View key={productDetails?.slug}>
            <Image style={styles.productImage} source={{ uri: imgUrl }} alt={productDetails?.name} />

            <Text style={styles.productTitle}>{productDetails?.name}</Text>

            <Text style={styles.productRate}>$ {productDetails?.regular_price}</Text>

            <Text style={{ fontWeight: "bold" }}>Product Description</Text>
            <Text style={styles.productDescription}>{productDetails?.description}</Text>
            
          </View>
          <Stack center style={styles.productButton}>
            <Button
              color="primary"
              title="Add Cart"
              onPress={() => handleAddToCart(data)}
            />
          </Stack>
          
        </ScrollView>
      )}

    </>
  );
};

const styles = StyleSheet.create({
  productBox: {
    margin: 4,
    backgroundColor: "#fff",
    height: "100%",
    padding: 10,
    flexDirection: "column",
    flex: 1,
  },
  productImage: {
    width: width - 30,
    borderRadius: 30,
    height: 200,
  },
  productTitle: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
    marginTop: 20,
  },
  productRate: {
    fontWeight: "normal",
    marginBottom: 20,
    fontSize: 19,
    color: "#666",
  },
  productDescription: {
    fontSize: 18,
    color: "#666",
  },
  productButton: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 40,

  },
});

export default ProductDetails;
