import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { THEME } from '../theme';

export default AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {    
        if(value.trim()){
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
        } else{
            Alert.alert('Название дела не может быть пустым')
        }
    }

    return(
        <View style={styles.block}>
           <TextInput 
            style={styles.input}
            onChangeText={text => setValue(text)}
            value={value}
            placeholder="Введите название дела..."
            autoCorrect={false}
            autoCapitalize='none'
           />
           <AntDesign.Button name='pluscircleo' onPress={pressHandler}>
               Добавить
            </AntDesign.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})