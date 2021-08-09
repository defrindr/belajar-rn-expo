import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { HStack, Image, VStack } from "native-base";
import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { appColor, dimWidth } from "../../../utils/helper";
import Icon from "../../atoms/Icon";
import Rating from "../../atoms/Rating";
const ItemNearby = ({ reverse }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => Actions.push("app-detail")}
    >
      <HStack
        flex={1}
        style={{
          elevation: 0.7,
          backgroundColor: appColor.white,
          padding: dimWidth * 0.03,
          borderRadius: dimWidth * 0.03,
          flexDirection: reverse ? "row-reverse" : "row",
          marginBottom: dimWidth * 0.03,
        }}
      >
        <Image
          source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
          size="md"
          borderRadius={dimWidth * 0.02}
          resizeMode="cover"
        />
        <VStack paddingX={dimWidth * 0.03} flex={1}>
          {/* nama-tempat */}
          <HStack
            justifyContent="space-between"
            alignItems="flex-end"
            paddingBottom={dimWidth * 0.02}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: dimWidth * 0.05,
              }}
            >
              Premium House
            </Text>
            <Text
              style={{
                color: appColor.colorPrimary,
                fontWeight: "bold",
                fontSize: dimWidth * 0.05,
              }}
            >
              $3400
            </Text>
          </HStack>

          {/* alamat */}
          <HStack
            justifyContent="space-between"
            alignItems="flex-end"
            paddingBottom={dimWidth * 0.02}
          >
            <HStack>
              <FontAwesomeIcon
                icon="map-marked"
                color={appColor.grey}
                style={{ marginRight: dimWidth * 0.03 }}
              />
              <Text style={{ color: appColor.grey }}>RT 03 / RW 03 Pulung</Text>
            </HStack>
            <Rating rate="5.0" color={appColor.grey} />
          </HStack>

          <HStack marginTop={dimWidth * 0.05} justifyContent="space-around">
            <Icon title="3 Beds" icon="bed" color={appColor.grey} />
            <Icon title="3 Baths" icon="bath" color={appColor.grey} />
            <Icon title="3 Sqft" icon="square" color={appColor.grey} />
          </HStack>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

export default ItemNearby;
