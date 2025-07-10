import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LoginAdminScreen from '../screens/LoginAdminScreen';
import AdminDashboardScreen from '../screens/AdminDashboardScreen';
import CategorieScreen from '../screens/CategorieScreen';
import ProtectedRoute from '../components/ProtectedRoute';

const Stack = createNativeStackNavigator();

// ⚠️ Cette fonction protège le Dashboard
const AdminDashboardWithProtection = (props: any) => (
  <ProtectedRoute navigation={props.navigation}>
    <AdminDashboardScreen {...props} />
  </ProtectedRoute>
);

export default function Index() {
  return (
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginAdmin" component={LoginAdminScreen} />
        <Stack.Screen name="Catégories" component={CategorieScreen} />
        <Stack.Screen
          name="AdminDashboard"
          options={{ title: 'Dashboard Admin' }}
          component={AdminDashboardWithProtection}
        />
      </Stack.Navigator>
    
  );
}