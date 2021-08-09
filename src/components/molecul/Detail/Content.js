import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, HStack, Image, VStack } from "native-base";
import * as React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { appColor, dimWidth } from "../../../utils/helper";
import Icon from "../../atoms/Icon";
import Rating from "../../atoms/Rating";
import _Gallery from "./Gallery";
const Content = () => {
  return (
    <View
      style={{
        paddingHorizontal: dimWidth * 0.07,
        paddingTop: dimWidth * 0.05,
      }}
    >
      <VStack>
        <View>
          <View
            style={{
              zIndex: 1,
              position: "absolute",
              top: dimWidth * 0.03,
              right: dimWidth * 0.02,
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-end",
              padding: dimWidth * 0.02,
              backgroundColor: "rgba(0,0,0,.5)",
              borderRadius: dimWidth * 0.05,
            }}
          >
            <Rating rate="5.0" />
          </View>
          <Image
            source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
            height={dimWidth - dimWidth * 0.3}
            alt="Image"
            borderRadius={dimWidth * 0.03}
          />
        </View>

        <View
          style={{
            paddingVertical: dimWidth * 0.07,
          }}
        >
          <VStack>
            <HStack
              justifyContent="space-between"
              alignItems="flex-end"
              marginBottom={dimWidth * 0.02}
            >
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
              <Text style={{ color: appColor.grey }}>RT 03 / RW 03 Pulung</Text>
            </HStack>
            <HStack marginTop={dimWidth * 0.05} justifyContent="space-around">
              <Icon title="3 Beds" icon="bed" color={appColor.grey} />
              <Icon title="3 Baths" icon="bath" color={appColor.grey} />
              <Icon title="3 Sqft" icon="square" color={appColor.grey} />
            </HStack>
          </VStack>
        </View>

        <VStack
          style={{
            paddingBottom: dimWidth * 0.07,
          }}
        >
          <Text style={{ fontSize: dimWidth * 0.05, fontWeight: "bold" }}>
            Description
          </Text>
          <Text
            style={{
              color: appColor.grey,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rhoncus blandit molestie. Donec in neque ut odio ultricies mollis id
            ut turpis. In convallis enim nec diam faucibus vulputate vel sed
            urna. Duis ornare euismod mollis...
          </Text>
          <TouchableHighlight>
            <Text style={{ color: appColor.colorPrimary }}>Read More</Text>
          </TouchableHighlight>
        </VStack>

        <_Gallery />
        <Button>Rent Now</Button>
      </VStack>
    </View>
  );
};

export default Content;
