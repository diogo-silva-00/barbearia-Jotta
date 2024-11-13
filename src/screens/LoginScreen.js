import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function LoginScreen() {

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/logoMenu.jpg')}
            style={styles.logo}
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Administrador</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Usuário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCriarConta}
            >
              <Text style={styles.textCriarConta}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    },
    logoContainer: {
      marginBottom: 100,
    },
    logo: {
      width: 400,
      height: 400,
      borderRadius: 200
    },
    buttonContainer: {
      width: '80%',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#7e7d7d',
      padding: 15,
      borderRadius: 10,
      marginVertical: 10,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    buttonCriarConta: {
      backgroundColor: '#f0f0f0',
      padding: 15,
      borderRadius: 10,
      marginVertical: 10,
      width: '100%',
      alignItems: 'center',
    },
    textCriarConta: {
      color: '#7e7d7d',
      fontSize: 16,
    },
  });