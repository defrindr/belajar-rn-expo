import { HStack } from "native-base";
import { SafeAreaView, ScrollView } from "react-native";
import * as React from "react";
import ItemRecommended from "./ItemRecommended";

const Recommended = () => {
  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16}>
        <HStack>
          <ItemRecommended />
          <ItemRecommended />
          <ItemRecommended />
        </HStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recommended;
