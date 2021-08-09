import { Box, HStack, Image, VStack } from "native-base";
import { Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { appColor, dimWidth } from "../../../utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Icon from "../../atoms/Icon";
import Rating from "../../atoms/Rating";
import { Actions } from "react-native-router-flux";

const ItemRecommended = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => Actions.push("app-detail")}
    >
      <Box
        paddingX={dimWidth * 0.05}
        paddingY={dimWidth * 0.03}
        width={dimWidth}
        background={appColor.colorPrimary}
      >
        <VStack
          shadow={1}
          style={{
            elevation: 0.7,
            backgroundColor: appColor.white,
            overflow: "hidden",
            width: "100%",
            borderRadius: dimWidth * 0.05,
          }}
        >
          <View
            style={{
              zIndex: 1,
              position: "absolute",
              top: dimWidth * 0.03,
              right: dimWidth * 0.02,
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-end",
              padding: dimWidth * 0.01,
              backgroundColor: "rgba(0,0,0,.5)",
              borderRadius: dimWidth * 0.05,
            }}
          >
            <Rating rate="5.0" />
          </View>
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Gambar"
            height={dimWidth - dimWidth * 0.2}
            resizeMode="cover"
          />
          <View
            style={{
              padding: dimWidth * 0.05,
            }}
          >
            <VStack>
              <HStack justifyContent="space-between" alignItems="flex-end">
                <Text style={{ fontSize: dimWidth * 0.05, fontWeight: "bold" }}>
                  Duplex Home
                </Text>
                <Text
                  style={{
                    color: appColor.colorPrimary,
                    fontSize: dimWidth * 0.05,
                    fontWeight: "bold",
                  }}
                >
                  $200 / month
                </Text>
              </HStack>
              <HStack alignItems="flex-end">
                <FontAwesomeIcon
                  icon="map-marked"
                  color={appColor.grey}
                  style={{ marginRight: dimWidth * 0.03 }}
                />
                <Text style={{ color: appColor.grey }}>
                  RT 03 / RW 03 Pulung
                </Text>
              </HStack>
              <HStack marginTop={dimWidth * 0.05} justifyContent="space-around">
                <Icon title="3 Beds" icon="bed" color={appColor.grey} />
                <Icon title="3 Baths" icon="bath" color={appColor.grey} />
                <Icon title="3 Sqft" icon="square" color={appColor.grey} />
              </HStack>
            </VStack>
          </View>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

export default ItemRecommended;
