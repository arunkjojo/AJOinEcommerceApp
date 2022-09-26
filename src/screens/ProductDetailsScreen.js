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
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

import HtmlContent from "../components/HtmlContent";
import getProduct from "../api/getApi/getProduct";



const { width } = Dimensions.get("window");
const ProductDetails = ({ route }) => {

  const dispatch = useDispatch();

  const { pId } = route.params;
  const navigation = useNavigation();
  const [productDetails, setProductDetails] = React.useState(null);

  React.useEffect(() => {
    getProduct(pId).then(res =>{
      setProductDetails(res);
    })
  },[getProduct]);

  const handleAddToCart = (data) => {
    let product = {
      id: data.id,
      name: data.name,
      price: data.price,
      image: data.images[0].src
    }
    // addToLocalStorage(product);
    dispatch(addToCart(product));
    navigation.navigate("Cart");
  }

  // const addToLocalStorage = (product) => {
  //   var cart = JSON.parse(localStorage.getItem('cart') || '[]');
  //   if(cart.length > 0) {
  //     const itemInCart = cart.find((item) => item.id === product.id);
  //     if (itemInCart) {
  //       itemInCart.quantity++;
  //     } else {
  //       cart.push({ ...product, quantity: 1 });
  //     }
  //   }else{
  //     let newCart = {
  //       ...product,
  //       quantity: 1
  //     }
  //     localStorage.setItem("cart", JSON.stringify(newCart))
  //   }
  // }


  const imgUrl=productDetails?.images[0]?.src;
  return (
    <>
      {productDetails && (
        
        <ScrollView style={styles.productBox}>
          <View key={productDetails?.slug}>
            <Image style={styles.productImage} source={{ uri: imgUrl }} alt={productDetails?.name} />

            <Text style={styles.productTitle}>{productDetails?.name}</Text>
            <View style={styles.productRate}>
              {productDetails.sale_price!=''? (
                <Text style={styles.productOldRate}>₹ {productDetails?.regular_price}</Text>
              ):null}

              <Text style={styles.productNewRate}>₹ {productDetails?.price}</Text>
            </View>
            <Text style={{ fontWeight: "bold" }}>Product Description</Text>
            {/* <Text style={styles.productDescription}>
              {productDetails?.short_description}
            </Text> */}
            <HtmlContent style={styles.productDescription} data={productDetails?.description}/>
            
              
          </View>
          <Stack center style={styles.productButton}>
            <Button
              color="primary"
              title="Add Cart"
              onPress={() => handleAddToCart(productDetails)}
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
    fontWeight: "bold",
    flexDirection: 'row',
    justifyContent:'space-around',   
    marginBottom: 20,
  },
  productNewRate: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#666",
  },
  productOldRate: {
    color: 'red',
    fontSize: 20,
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid'
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
