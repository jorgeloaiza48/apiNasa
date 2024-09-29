import React from 'react'
import { View,StyleSheet } from 'react-native'
import Header from '../../components/Header'

function Home() {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
container:{
    flex:1,
    paddingHorizontal:16,
}
})