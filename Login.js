import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export function Login() {
    const { width, height } = Dimensions.get('window');
    const circleSize = Math.min(width, height) * 0.5;
    const navigation = useNavigation();
    const [cekbox, setCekbox] = useState(false);
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const handleSubmitLogin = () => {
        console.log(user);
        console.log(pass);
        if ((user === 'admin') && (pass === 'SmartHome23')) {
            navigation.navigate('MenuBar');
        }
    };
    const handleUserChange = (text) => {
        setUser(text);
    };
    const handlePassChange = (text) => {
        setPass(text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../assets/tanblack.png')}
          style={styles.logo}
          resizeMode="stretch"
          /> */}
                <Text style={styles.text_header}>Smart Home</Text>
            </View>
            <View style={[styles.circle, { marginTop: circleSize }]} />
            <Animatable.View animation="fadeInUpBig" style={styles.footer} >
                <ScrollView>
                    <Text style={styles.judul}>Masuk ke Halaman Utama</Text>
                    <View style={styles.formLogin}>
                        <Text style={styles.text_footer}>Username</Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Username"
                                placeholderTextColor="#666666"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(text) => handleUserChange(text)}
                            />
                        </View>
                        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Password"
                                secureTextEntry={data.secureTextEntry ? true : false}
                                placeholderTextColor="#666666"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(text) => handlePassChange(text)}
                            />
                        </View>
                        {/* <TouchableOpacity onPress={() => setCekbox(!cekbox)}>
                            {cekbox ?
                                <Text style={{ marginTop: 15, color: '#fff', fontSize: 20 }}><AntDesign name="checksquare" size={20} color='#fff' /> Remember Password </Text> : <Text style={{ marginTop: 15, color: '#fff', fontSize: 20 }}><Feather name="square" size={20} color='#fff' /> Remember Password </Text>}


                        </TouchableOpacity> */}
                        <View style={styles.button}>
                            {/* onPress={() => Auth()} */}
                            <TouchableOpacity onPress={handleSubmitLogin} style={styles.signIn} >
                                <Text style={styles.textSign}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('LupaPassword')}>
                            <Text style={[styles.text_footer, { margin: 20, textAlign: 'center', fontSize: 20 }]}>Lupa Password?</Text>
                        </TouchableOpacity>
                        <View style={styles.line} />
                        <TouchableOpacity onPress={() => navigation.navigate('LupaPassword')}>
                            <Text style={[styles.text_footer, { margin: 10, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }]}>Belum Memiliki Akun? <Text style={{ color: 'red' }}> Daftar</Text></Text>
                        </TouchableOpacity> */}
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    line: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        marginTop: 50,
        marginBottom: 10
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    logo: {
        width: 50,
        height: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#808080',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: "center",
    },
    judul: {
        color: '#fff',
        fontSize: 25,
        textAlign: "center",
    },
    text_footer: {
        color: '#fff',
        fontSize: 24,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#fff',
        paddingBottom: 5,
        padding: 15,
        borderRadius: 8,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 15,
        height: 50,
        color: '#000',
        backgroundColor: '#fff',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        color: "#08d4c4",
        // backgroundColor: '#EA1F1F',
        backgroundColor: '#79D40C',
        marginTop: 10,
    },
    textSign: {
        fontSize: 24,
        color: "#fff",
    },
    formLogin: {
        marginTop: 15,
    },
    circle: {
        alignSelf: 'center',
        width: 300,
        height: 200,
        borderRadius: 25,
        backgroundColor: '#79D40C',
        position: 'absolute',
        zIndex: -1,
    },
});