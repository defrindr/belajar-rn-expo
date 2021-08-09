import { HStack, Image, VStack } from "native-base";
import * as React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { left } from "styled-system";
import { appColor, dimWidth } from "../../../utils/helper";
const _ItemGallery = ({ onPress, total }) => {
  return total ? (
    <TouchableOpacity activeOpacity={0.7} style={{ padding: dimWidth * 0.01 }}>
      <Image
        source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
        height={dimWidth * 0.195}
        width={dimWidth * 0.195}
        borderRadius={dimWidth * 0.05}
      />
      <View
        style={{
          position: "absolute",
          top: dimWidth * 0.01,
          left: dimWidth * 0.01,
          right: dimWidth * 0.01,
          bottom: dimWidth * 0.01,
          borderRadius: dimWidth * 0.05,
          backgroundColor: "rgba(0,0,0,.5)",
          zIndex: 1,
        }}
      >
        <Text
          style={{
            color: appColor.white,
            alignSelf: "center",
            textAlignVertical: "center",
            flex: 1,
          }}
        >
          +{total}
        </Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity activeOpacity={0.7} style={{ padding: dimWidth * 0.01 }}>
      <Image
        source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
        height={dimWidth * 0.195}
        width={dimWidth * 0.195}
        borderRadius={dimWidth * 0.05}
      />
    </TouchableOpacity>
  );
};

export default _ItemGallery;
