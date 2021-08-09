import { Box, VStack } from "native-base";
import * as React from "react";
import { Fragment } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import MyHeader from "../components/molecul/Home/Header.js";
import Categories from "../components/molecul/Home/Categories.js";
import MyHeading from "../components/molecul/Home/MyHeading.js";
import Recommended from "../components/molecul/Home/Recommended.js";
import Nearby from "../components/molecul/Home/Nearby.js";

export default function Home() {
  return (
    <ScrollView>
      <VStack>
        <MyHeader />
        <Categories />
        <MyHeading title="Recommended" />
        <Recommended />
        <MyHeading title="Nearby your location" />
        <Nearby />
      </VStack>
    </ScrollView>
  );
}
