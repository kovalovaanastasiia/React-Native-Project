import React, {useState} from "react";
import {StyleSheet, Text, View, ImageBackground, TextInput, Button, TouchableOpacity} from "react-native";

export const RegistrationScreen = () => {
    // const [focused, setFocused] = useState(false);

    return (<View style={styles.mainContainer}>
        <ImageBackground source={require('../images/bg_image.png')}
                         style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.photoContainer}>
                </View>
                <Text style={styles.title}>Реєстрація</Text>
                <View style={styles.form}>
                    {/*<TextInput onBlur={() => setFocused(false)} onFocus={() => setFocused(true)}*/}
                    {/*           style={focused ? focusedStyles.input : styles.input} placeholder="Логін"/>*/}
                    <TextInput style={styles.input} placeholder="Логін"/>
                    <TextInput style={styles.input} placeholder="Адреса електронної пошти"/>
                    <View>
                        <TextInput style={styles.input} placeholder="Пароль"/>
                        <TouchableOpacity style={styles.showBtn}>
                            <Text style={styles.showText}>Показати</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                {/*<Button title="Зареєстуватися"/>*/}
                {/*<Button title="Вже є акаунт? Увійти"/>*/}
            </View>
        </ImageBackground>
    </View>)
}

// const focusedStyles = StyleSheet.create({
//     input: {
//         marginHorizontal: 20,
//         height: 50,
//         boxSizing: 'border-box',
//         padding: 12,
//         backgroundColor: '#F6F6F6',
//         borderColor: "red",
//         borderWidth: 1,
//         borderRadius: 8,
//     }
// });
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    backgroundImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
        position: 'relative'
    },

    container: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: 549,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },

    photoContainer: {
        position: "absolute",
        bottom: 489,
        backgroundColor: '#3bd200',
        width: 120,
        height: 120,
        // marginTop: -200,
        borderRadius: 16,
    },

    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        letterSpacing: 0.01,

        color: '#212121',
        marginTop: -92,
    },

    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        marginTop: 32,
    },

    input: {
        marginHorizontal: 20,
        height: 50,
        boxSizing: 'border-box',
        padding: 16,
        backgroundColor: '#F6F6F6',
        border: '1px solid #E8E8E8',
        borderRadius: 8,
    },
    showBtn: {
        position: 'absolute',
        width: 72,
        height: 19,
        right: 20,
        top: 15,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,

        textAlign: "right",
    },
    showText: {
        color: '#1B4371',
    }

});