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
import { products } from "../database/DataBase";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const { width } = Dimensions.get("window");
const ProductDetails = ({ route }) => {

  const dispatch = useDispatch();

  const { pId } = route.params;
  const navigation = useNavigation();
  const [productData, setProductData] = React.useState([{}]);

  React.useEffect(() => {
    let data = products.filter((element) => {
      return element.id === pId;
    });
    setProductData(data);
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
    var cart = localStorage.getItem('cart');
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
  return (
    <ScrollView style={styles.productBox}>
      {productData.map((data, index) => (
        <View key={index.toString()}>
          <Image style={styles.productImage} source={data.image} />

          <Text style={styles.productTitle}>{data.name}</Text>

          <Text style={styles.productRate}>$ {data.prize}</Text>

          <Text style={{ fontWeight: "bold" }}>Product Description</Text>
          <Text style={styles.productDescription}>{data.description}</Text>
          <Stack center style={styles.productButton}>
            <Button
              color="primary"
              title="Add Cart"
              onPress={() => handleAddToCart(data)}
            />
          </Stack>
        </View>
      ))}
    </ScrollView>
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
