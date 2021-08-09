import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { appColor, dimWidth } from "../../../utils/helper";

const ItemCategory = ({ title, icon }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        marginHorizontal: dimWidth * 0.03,
        alignItems: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: appColor.whitesmoke,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          padding: dimWidth * 0.065,
          marginBottom: dimWidth * 0.05,
        }}
      >
        <FontAwesomeIcon
          icon={icon}
          style={{ color: appColor.colorPrimary }}
          size={dimWidth * 0.05}
        />
      </View>
      <Text style={{ color: "#333" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ItemCategory;
