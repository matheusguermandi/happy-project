import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import OrphanagesMap from "./screens/OrphanagesMap";

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;