import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import Titulo from '../components/Titulo';
import Input from '../components/Input';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const submitLogin = () => {
        if (verificar()) {
            navigation.navigate('Aplicativo');
        }
    }

    const verificar = () => {
        if (email.trim() === '') {
            alert('O campo de email está vazio!');
            return false;
        }
        else if (senha.trim() === '') {
            alert('O campo de senha está vazio!');
            return false;
        }
        return true;
    }

    return (
        <View style={style.geral}>
            <Container
                padding={15}
                width="80%"
            >
                <Header title="Conta" fontSize={30} />
                <Input
                    value={email}
                    marginVertical={5}
                    placeholder="Email"
                    keyboardType="email-address"
                    paddingVertical={4}
                    paddingHorizontal={10}
                    placeholderColor="#999"
                    onChangeText={(texto) => setEmail(texto)}
                />
                <Input
                    password
                    value={senha}
                    placeholder="Senha"
                    marginVertical={5}
                    paddingVertical={4}
                    paddingHorizontal={10}
                    placeholderColor="#999"
                    onChangeText={(texto) => setSenha(texto)}
                />
                <Container
                    marginTop={10}
                    gap={5}
                    flexDirection="row"
                    justifyContent="start"
                >
                    <Button
                        title="Entrar"
                        onPress={submitLogin}
                        style={style.btn}
                    />
                    <Button title="Cadastro" />
                </Container>
            </Container>
        </View>
    );
}

const style = StyleSheet.create({
    geral: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        margin: 0,
        marginTop: 0,
        padding: 0,
        backgroundColor: '#fff',
        width: 'auto',
        borderRadius: 12,
        gap: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
});