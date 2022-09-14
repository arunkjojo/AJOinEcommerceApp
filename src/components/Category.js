import React from "react";
import { View,  } from "react-native";
import CategorySlider from "./CategorySlider";
const Category = ({ categories }) => {
  return (
    <View>
      <CategorySlider list={categories} />
    </View>
  );
};

export default Category;
