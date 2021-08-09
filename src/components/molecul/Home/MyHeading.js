import { Heading, useToast } from "native-base";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { dimWidth } from "../../../utils/helper";

const MyHeading = ({ title }) => {
  const toast = useToast();
  return (
    <View style={{ margin: dimWidth * 0.03, marginTop: dimWidth * 0.05 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Heading>{title}</Heading>
        <TouchableOpacity>
          <Text style={{ color: "#aaa" }}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyHeading;
