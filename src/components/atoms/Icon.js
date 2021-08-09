import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { HStack } from "native-base";
import * as React from "react";
import { Text } from "react-native";
import { dimWidth } from "../../utils/helper";

const Icon = ({ title, icon, color }) => {
  return (
    <HStack>
      <FontAwesomeIcon
        icon={icon}
        color={color}
        style={{ marginRight: dimWidth * 0.03 }}
      />
      <Text style={{ color: color }}>{title}</Text>
    </HStack>
  );
};

export default Icon;
