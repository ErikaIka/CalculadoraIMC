/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Calculadora} from './components/calculadora/Calculadora';

class App extends Component {
  render() {
    return (
      <View style={styles.colorBackground}>
        <View>
          <Text style={styles.titulo}>Calculadora IMC</Text>
        </View>
        <View style={styles.cajaCalculadora}>
          <Calculadora></Calculadora>
        </View>
        <View style={styles.pie}>
          <Text style={styles.textoPie}>Erika Serra Ruiz{"\n"}2ºDAM Online</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  colorBackground: {
    flex: 1,
    backgroundColor: '#B41DFF',
  },
  titulo: {
    fontSize: 40,
    color: '#1DFFA6',
    textAlign: 'center',
    margin: 15,
    fontWeight: 'bold',
  },
  cajaCalculadora: {
    backgroundColor: '#F2D8FF',
    borderRadius: 20,
    borderColor: '#BFFFEE',
    borderWidth: 5,
    flex: 3,
  },
  pie: {
    flex: 1,
  },
  textoPie: {
    fontSize: 20,
    color: '#404040',
    textAlign: 'right',
    marginTop: 80,
    marginRight: 7,
  },
});

export default App;
