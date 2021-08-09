import * as React from "react";
import { Box, View } from "native-base";
import { Fragment } from "react";
import Header from "../components/molecul/Detail/Header";
import Content from "../components/molecul/Detail/Content";
import { SafeAreaView, ScrollView } from "react-native";

const Detail = () => {
  return (
    <ScrollView>
      <Header />
      <Content />
    </ScrollView>
  );
};

export default Detail;
