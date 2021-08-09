import { HStack, VStack } from "native-base";
import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import { dimWidth } from "../../../utils/helper";
import _ItemGallery from "./_ItemGallery";
const _Gallery = () => {
  return (
    <VStack
      style={{
        paddingBottom: dimWidth * 0.07,
      }}
    >
      <Text style={{ fontSize: dimWidth * 0.05, fontWeight: "bold" }}>
        Description
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack marginTop={dimWidth * 0.02} justifyContent="space-around">
          <_ItemGallery />
          <_ItemGallery />
          <_ItemGallery />
          <_ItemGallery total={10} />
        </HStack>
      </ScrollView>
    </VStack>
  );
};

export default _Gallery;
