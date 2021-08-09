import { VStack } from "native-base";
import * as React from "react";
import { dimWidth } from "../../../utils/helper";
import ItemNearby from "./ItemNearby";

const Nearby = () => {
  return (
    <VStack paddingX={dimWidth * 0.05} paddingY={dimWidth * 0.03}>
      <ItemNearby />
      <ItemNearby reverse />
      <ItemNearby />
      <ItemNearby reverse />
      <ItemNearby />
      <ItemNearby reverse />
    </VStack>
  );
};

export default Nearby;
