import { createSwitchNavigator, createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

// Import pages here

const Routes = createAppContainer(
  createSwitchNavigator({
    // Login,
    App: createStackNavigator(
      {
        // Home,
        // ...
      },
      {
        navigationOptions: {
          headerStyle: {
            backgroundColor: "#D3D3D3"
          },
          headerTintColor: "#000"
        }
      }
    )
  })
);

export default Routes;
