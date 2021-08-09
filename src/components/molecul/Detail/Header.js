import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Heading, HStack } from "native-base";
import { TouchableOpacity, View } from "react-native";
import { appColor, dimWidth } from "../../../utils/helper";
import { Actions } from "react-native-router-flux";

const Header = () => {
  return (
    <View style={{ marginTop: dimWidth * 0.05 }}>
      <HStack justifyContent="space-around" alignItems="center">
        <TouchableOpacity
          onPress={() => Actions.replace("app-home")}
          activeOpacity={0.5}
          style={{
            elevation: 0.7,
            borderColor: "#CCC",
            backgroundColor: "#fff",
            borderRadius: 10,
            borderWidth: 1,
            paddingHorizontal: dimWidth * 0.03,
            paddingVertical: dimWidth * 0.03,

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon
            icon="angle-left"
            color={appColor.grey}
            size={dimWidth * 0.03}
          />
        </TouchableOpacity>

        <Heading color={appColor.grey} size="lg">
          Details
        </Heading>

        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            elevation: 0.7,
            borderColor: "#CCC",
            backgroundColor: "#fff",
            borderRadius: 10,
            borderWidth: 1,
            paddingHorizontal: dimWidth * 0.03,
            paddingVertical: dimWidth * 0.03,

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon
            icon="heart"
            color={appColor.colorPrimary}
            size={dimWidth * 0.03}
          />
        </TouchableOpacity>
      </HStack>
    </View>
  );
};

export default Header;
