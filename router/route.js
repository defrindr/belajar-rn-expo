import React, { useEffect } from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import Detail from "../src/screens/Detail.js";
import Home from "../src/screens/Home.js";
import MyFirstLoad from "../src/screens/MyFirstLoad.js";

const Route = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="app-firstload" component={MyFirstLoad} initial hideNavBar />
        <Scene key="app-login" component={Home} hideNavBar />
        <Scene key="app-home" component={Home} hideNavBar />
        <Scene key="app-detail" component={Detail} hideNavBar />
      </Stack>
    </Router>
  );
};

export default Route;
