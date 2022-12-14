import { View, Image } from 'react-native';
function Carga(props) {
    return (
      <View>
        <Image testID='loading' source={require ('../assets/images/carga.gif')}/>
      </View>
    );

}

export default Carga;