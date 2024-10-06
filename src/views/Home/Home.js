import React, { useEffect } from 'react'
import { View,StyleSheet } from 'react-native'
import Header from '../../components/Header'
import fetchApi from '../../utils/fetch'

function Home() {
    useEffect(()=>{
        const loadTodaysImage = async () => {
            try {
                const loadTodaysImage = await fetchApi();
                console.log(loadTodaysImage)
            } catch (error) {
                console.log(error)
            }
        }
        loadTodaysImage().catch(null)
    },[])
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
    paddingHorizontal:18,
    paddingTop:55
}
})

