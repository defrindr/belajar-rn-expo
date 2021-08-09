import { faAngleDown, faBell, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { appColor, dimWidth } from "../../../utils/helper";

const Header = () => {
  return (
    <View
      style={{
        marginHorizontal: dimWidth * 0.03,
        marginBottom: dimWidth * 0.08,
      }}
    >
      <View style={{ marginTop: dimWidth * 0.05 }} />

      <View
        style={{
          display: "flex",
          flex: 1,
          alignItems: "stretch",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={{ fontSize: dimWidth * 0.04 }}>Location</Text>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              flexDirection: "row",
            }}
          >
            <FontAwesomeIcon
              icon="map"
              style={{
                marginRight: dimWidth * 0.02,
                color: appColor.colorPrimary,
              }}
            />
            <Text style={{ fontSize: dimWidth * 0.05 }}>San Jose, CA</Text>
            <FontAwesomeIcon
              icon="angle-down"
              style={{
                marginRight: dimWidth * 0.02,
                color: appColor.colorPrimary,
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            borderColor: "#aaa",
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
            icon="bell"
            style={{ color: "#aaa" }}
            size={dimWidth * 0.05}
          />
          <View
            style={{
              position: "absolute",
              top: dimWidth * 0.025,
              right: dimWidth * 0.025,
              width: dimWidth * 0.03,
              height: dimWidth * 0.03,
              borderRadius: dimWidth,
              borderWidth: dimWidth * 0.005,
              borderColor: appColor.white,
              backgroundColor: appColor.colorPrimary,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
