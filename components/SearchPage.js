import { useState } from "react";
import { View, FlatList, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import { mockdata } from "./constants/products";
import Producto from "./Producto";



export default function SearchPage(props) {
    const [palabras, setPalabras] = useState(props.theproducts);
    const [valueText, setValueText] = useState('');
    const [valueInput, setValueInput] = useState('');


    function filtrador(texto) {
        setPalabras(props.theproducts.filter((item) => {
            if (item.title.toLowerCase().includes(texto)) {
                return item;
            }
        }))
    }

    const changeText = () => {
        setValueText(valueInput);
    }

    return (
        <View testID="productosresultados">
            <Text testID="catalogo" style={{color:"red"}}>Catálogo</Text>
            <TextInput testID="filtro" placeholder="Escribe aqui lo que quieras buscar" style={styles.input} onChangeText={setValueInput} />
            <Button testID="buscador"
                title="Buscar"
                onPress={() => filtrador(valueInput.toLowerCase())}>
            </Button>
            <FlatList className="unproducto"
                data={palabras}
                renderItem={({ item }) =>
                    <View testID={"item_" + item.id}>
                        <Image
                            style={{ width: 200, height: 100 }}
                            source={{
                                uri: item.thumbnail,
                            }}
                        />
                        <Text testID={"title_" + item.id}>{item.title}</Text>
                        <Button title="Ver"
                            testID={"button_" + item.id}
                            onPress={() => props.navigation.navigate('Producto', {
                                titulo: item.title,
                                precio: item.price,
                                descripcion: item.description,
                            })}
                            
                        />
                    </View>}
            />
        </View>
    )

}
const styles = StyleSheet.create({
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
