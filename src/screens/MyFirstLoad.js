import { Box, Button, Input, VStack } from "native-base";
import * as React from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { height } from "styled-system";
import { dimHeight, dimWidth } from "../utils/helper";

export default function MyFirstLoad() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const send = () => {
    let form = new FormData();
    form.append("input1", input1);
    form.append("input2", input2);
    console.log(form);
  };
  return (
    <ScrollView>
      <VStack
        backgroundColor="#aaa"
        padding={dimWidth * 0.05}
        style={{
          height: dimHeight,
        }}
      >
        <Input variant="filled" onChangeText={(val) => setInput1(val)} />
        <Input variant="filled" onChangeText={(val) => setInput2(val)} />
        <Button onPress={() => send()}>Mulai</Button>
      </VStack>
    </ScrollView>
  );
}
