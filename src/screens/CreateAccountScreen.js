import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CreateAccountScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSignup = () => {
      
      if (password !== confirmPassword) {
        alert("As senhas não coincidem");
        return;
      }
  
      console.log('Nome:', name);
      console.log('Email:', email);
      console.log('Senha:', password);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={text => setName(text)}
        />
  
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
  
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
  
        <Text style={styles.label}>Confirme sua Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry
        />
  
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
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
    label: {
      fontSize: 16,
      marginBottom: 8,
      color: '#7e7d7d',
    },
    input: {
      width: '80%',
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginBottom: 16,
      paddingHorizontal: 10,
      backgroundColor: '#f0f0f0',
      color: '#7e7d7d'
    },
    button: {
      backgroundColor: '#7e7d7d',
      padding: 15,
      borderRadius: 10,
      marginVertical: 10,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });