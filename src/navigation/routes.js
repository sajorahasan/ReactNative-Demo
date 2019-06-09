import React from "react";
import { Actions, Scene } from "react-native-router-flux";

import {
  ////////// Splash /////////
  Splash,
  ////////// AUTH ////////////
  Login,
  ////////// HOME ////////////
} from "../screens";
import { transitionCustomConfig } from "./config/transitionConfig";

const interpolator = {
  screenInterpolator: props => transitionCustomConfig(props)
};

const routes = Actions.create(
  <Scene key="app" hideNavBar transitionConfig={() => interpolator}>
    {/* SplashScreen */}
    <Scene key="splash" component={Splash} initial />

    {/* AUTH */}
    <Scene key="login" component={Login} />
    
    {/* HOME > COMMON */}
    <Scene key="home" component={Home} />

  </Scene>
);

export default routes;
