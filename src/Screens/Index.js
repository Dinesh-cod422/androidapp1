import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Components/SplashScreen';

const Stack = createNativeStackNavigator();

function Index() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} hea/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Index;