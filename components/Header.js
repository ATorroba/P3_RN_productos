// import logo from './logo.svg';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Header() {
  return (
    <SafeAreaView>
      <View testID='cabecera' style={{backgroundColor:"#282c34"}}>
        <Text testID='mensaje' style={{color:"aqua"}}>Bienvenido a la página web de Álvaro Torroba de Linos</Text>
        <Image testID='logo'  style={styles.image}  source={require ('../assets/images/imagen1.png')}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width:60,
    height:60,
  }
});