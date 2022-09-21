import React from "react";
import { ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import HTML from "react-native-render-html";


export default function HtmlContent({data, customStyle}) {
  const { width } = useWindowDimensions();
  return (
    <ScrollView style={[customStyle]}>
      <HTML contentWidth={width} source={{ html:`${data}` }} />
    </ScrollView>
  );
}
