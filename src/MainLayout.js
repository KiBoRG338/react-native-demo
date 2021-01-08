import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import Navbar from './components/Navbar';
import { MainScreen } from './screens/Main.screen';
import { TodoScreen } from './screens/Todo.screen';
import { THEME } from './theme';
import screenContext from './context/screen/screenContext';

export default MainLayout = () => {
    const {todoId } = useContext(screenContext);

    return (
        <View>
            <Navbar title="Todo app"/>
            <View style={styles.container}>
                { todoId ? <TodoScreen /> : <MainScreen />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 20
    }
  });