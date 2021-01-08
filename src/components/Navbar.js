import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { THEME } from '../theme';
import AppTextBold from './ui/AppTextBold';

export default Navbar = (props) => {
    return(
        <View style={{ ...styles.navbar, ...Platform.select({
            ios: styles.navbarIos,
            android: styles.navbarAndroid
        }) }}>
            <AppTextBold style={styles.text}>{props.title}</AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR
    },
    navbarIos: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1
    },
    text: {
        color: Platform.OS === 'ios' ? Theme.MAIN_COLOR : '#fff',
        fontSize: 20
    }
})