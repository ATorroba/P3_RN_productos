import { View, Text, Button, Image } from "react-native";
import { useRoute } from '@react-navigation/native';



export default function Producto(props) {
 const route = useRoute();
    return (
        <View>
            <Text testID="detalle">{route.params.titulo}</Text>
            <Text>Precio:{route.params.precio}€</Text>
            <Text>Descripción: {route.params.descripcion}</Text>
            <Button
                title="Volver"
                testID="volver"
                onPress={() => props.navigation.goBack()}
                text={"Volver"} /> 
        </View>
    )
}