import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as React from "react";
import { Text } from "react-native";
import { appColor, dimWidth } from "../../utils/helper";

const { HStack } = require("native-base");

const Rating = ({ rate, color }) => {
  return (
    <HStack alignItems="flex-end">
      <FontAwesomeIcon icon="star" style={{ color: appColor.gold }} />
      <Text
        style={{ color: color ?? appColor.white, marginLeft: dimWidth * 0.01 }}
      >
        {rate}
      </Text>
    </HStack>
  );
};

export default Rating;
