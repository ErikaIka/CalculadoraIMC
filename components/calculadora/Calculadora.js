import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Dimensions, Alert } from 'react-native';
import calculaIMC from '../../utils/CalculaIMC';

//Coge el ancho de la pantalla
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



export class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            altura: 0,
            peso: 0,
            imc: 0,
            mostrarResultado: false,
        };
    }

    verificaPeso = (pesoV) => {
        this.setState({ peso: pesoV });
    }
    verificaAltura = (alturaV) => {
        this.setState({ altura: alturaV });
    }
    actualizaIMC = () => {
        this.setState({ imc: calculaIMC(this.state.peso, this.state.altura) });
        this.setState({mostrarResultado: true});
    }


    resultadoIMC = (imcCalculado) => {

        let textoPeso = "";
        let colorTexto = "";

        if (imcCalculado < 18.5) textoPeso = "Peso insuficiente"
        if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
            textoPeso = "Normopeso"
        }
        if (imcCalculado >= 25 && imcCalculado <= 26.9) {
            textoPeso = "Sobrepeso grado I"
        }
        if (imcCalculado >= 27 && imcCalculado <= 29.9) {
            textoPeso = "Sobrepeso grado II (preobesidad)"
        }
        if (imcCalculado >= 30 && imcCalculado <= 34.9) {
            textoPeso = "Obesidad de tipo I"
        }
        if (imcCalculado >= 35 && imcCalculado <= 39.9) {
            textoPeso = "Obesidad de tipo II"
        }
        if (imcCalculado >= 40 && imcCalculado <= 49.9) {
            textoPeso = "Obesidad de tipo III (mórbida)"
        }
        if(imcCalculado >= 50) {
            textoPeso = "Obesidad de tipo IV (extrema)"
        }

        if (imcCalculado < 27) {
            colorTexto = 'green';
        }
        if (imcCalculado >= 27 && imcCalculado <= 39.9) {
            colorTexto = 'orange';
        }
        if (imcCalculado >= 40) {
            colorTexto = 'red'
        }

        return <Text style={{ color: colorTexto, fontSize: 17 }}>{textoPeso}</Text>
    }

    render() {
        return (
            <View>
                <Text style={styles.tituloCalculadora}>Datos</Text>
                <View style={styles.cajaDatos}>
                    <Text style={styles.textoDatos}>PESO</Text>
                    <TextInput
                        placeholder='Peso en kg'
                        onChangeText={this.verificaPeso}
                        value={this.state.peso}
                        underlineColorAndroid={'grey'}
                        fontSize={20}
                        keyboardType="numeric">
                    </TextInput>
                </View>
                <View style={styles.cajaDatos}>
                    <Text style={styles.textoDatos}>ALTURA</Text>
                    <TextInput
                        placeholder='Altura en metros'
                        onChangeText={this.verificaAltura}
                        value={this.state.altura}
                        underlineColorAndroid={'grey'}
                        fontSize={20}
                        keyboardType="numeric">
                    </TextInput>
                </View>
                <View style={styles.cajaBoton}>
                    <Button
                        title="Calcula IMC"
                        color={'#B900FF'}
                        onPress={this.actualizaIMC}
                    />
                </View>
                <View style={styles.cajaResultado}>
                    <Text style={styles.textoResultado}>Resultado</Text>
                    {(this.state.mostrarResultado) && this.resultadoIMC(this.state.imc)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    tituloCalculadora: {
        color: '#00804E',
        fontSize: 40,
        marginTop: 15,
        marginLeft: 25,
    },
    textoDatos: {
        color: '#00CD7D',
        fontWeight: 'bold',
        fontSize: 20,
    },
    cajaDatos: {
        margin: 10,
        marginLeft: 15,
        justifyContent: 'space-between',
        
    },
    textoResultado: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#00804E'
    },
    cajaResultado: {
        margin: 10,
        justifyContent: 'space-between',
    },
    cajaBoton: {
        marginLeft: 17,
        marginRight: 17,
    },
});

