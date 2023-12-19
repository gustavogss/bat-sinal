import React from 'react';
import { TextInput, TouchableOpacity, Text, Alert, View } from 'react-native';

import { styles } from './styles';
import { HeaderForm } from '../../components/HeaderForm';


export function Form() {
    
  return (
    <>
    <HeaderForm />
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder='Digite seu nome'
      keyboardType='default'/>
       <TextInput 
      style={styles.input}
      placeholder='Digite seu email'
      keyboardType='email-address'/>
      <TextInput 
      style={styles.input}
      placeholder='Digite seu telefone'
      keyboardType='phone-pad'/>
       <TextInput 
      style={styles.input}
      placeholder='Digite sua localização'
      keyboardType='default'/>
      <TextInput
      style={styles.input}
       multiline
       numberOfLines={4}
       maxLength={40}
       placeholder='Observação'
      />
      <TouchableOpacity onPress={()=> Alert.alert('Dados enviados com sucesso')}
      style={styles.btnSend}
      >
        <Text style={styles.txtbtn}>Enviar</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}