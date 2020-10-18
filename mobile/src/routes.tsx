import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import OrphanagesMap from "./screens/OrphanagesMap";
import OrphanageDetails from "./screens/OrphanageDetails";
import SelectMapPosition from "./screens/CreateOrphanage/SelectMapPosition";
import OrphanageData from "./screens/CreateOrphanage/OrphanageData";

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <Screen
          name="OrphanagesMap"
          component={OrphanagesMap}
        />

        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
        />

        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
        />

        <Screen
          name="OrphanageData"
          component={OrphanageData}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;