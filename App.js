import { Box, NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Route from "./router/route.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// add-fas
library.add(fas);

export default function App() {
  return (
    <NativeBaseProvider>
      <Box safeAreaTop backgroundColor="#fff" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Route />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
