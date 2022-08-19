import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    contadorText: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    },
    BotonMas: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    BotonMasText: {
         color: 'white',
         fontSize: 25,
         fontWeight: 'bold',
         alignSelf: 'center'
    },
    BotonMasLocation: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    BotonMasLocationMenos: {
        position: 'absolute',
        bottom: 25,
        left: 25
    }
})


const Contador = () => {

    const [contador, setContador] = useState(10);




    return (
        <View style={estilos.container}>
            <Text style={estilos.contadorText}>
                Contador: {contador}
            </Text>
            <TouchableOpacity
                style={estilos.BotonMasLocation}
                onPress={() => setContador(contador + 1)}
            >
                <View style={estilos.BotonMas}>
                    <Text style={estilos.BotonMasText}>+1 </Text>

                </View>

            </TouchableOpacity>

            <TouchableOpacity
                style={estilos.BotonMasLocationMenos}
                onPress={() => setContador(contador - 1)}
            >
                <View style={estilos.BotonMas}>
                    <Text style={estilos.BotonMasText}>-1 </Text>

                </View>

            </TouchableOpacity>

        </View>
    )
}

export default Contador
