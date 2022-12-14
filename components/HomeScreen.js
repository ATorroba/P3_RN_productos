import React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { mockdata } from "./constants/products";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SearchPage from './SearchPage';
import Header from './Header';
import Carga from './Carga';
import CONFIG from './config/config'
import Producto from './Producto';

export default function App() {

    const [producto, setProducto] = useState(mockdata.products);
    const [mostrarCarga, setMostrarCarga] = useState(true);
    const Stack = createStackNavigator();

    const callServer = async (param) => {
        if (USE_SERVER) {
            try {
                const response = await fetch(`${CONFIG.server_url}`);
                const data = await response.json();
                //console.log(data);
                setProducto(data.products);
            } catch (error) {
                console.log(error);
                setProducto({ error: { description: error.message } });
            }
        } else {
            //console.log(mock1.users)
            setProducto(mockdata.products);
        }
    }

    useEffect(() => {
        callServer();
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setMostrarCarga(false);
        }, CONFIG.loading_timeout_ms);
    }, [])


    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Header style={styles.header} />
                {mostrarCarga ? <Carga /> :

                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name="SearchPage">
                                {props => <SearchPage {...props} theproducts={producto} />}
                            </Stack.Screen>
                            <Stack.Screen name="Producto" component={Producto} />
                        </Stack.Navigator>
                    </NavigationContainer>
                }

            </View>
        </SafeAreaProvider>
    );
}




const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
    },
    header: {
        flex: '1',
        padding: 20,
        textAlign: 'center',
        fontSize: 25,
        alignItems: 'center'
    }
});