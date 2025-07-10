import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';

interface Props {
  children: React.ReactNode;
  navigation?: any;
}

export default function ProtectedRoute({ children, navigation }: Props) {
  const nav = useNavigation();

  const isAdmin = true; // Remplace avec vraie vérif + AsyncStorage plus tard

  useEffect(() => {
    if (!isAdmin) {
      (navigation || nav).navigate('LoginAdmin');
    }
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{children}</>;
}