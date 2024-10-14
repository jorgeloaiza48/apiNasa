import React, { useEffect, useState } from 'react'
import { View,StyleSheet } from 'react-native'
import Header from '../../components/Header'
import fetchApi from '../../utils/fetch'
import TodaysImage from '../../TodaysImage'

function Home() {
    const [todaysImage, setTodaysImage] = useState([])
    useEffect(()=>{
        const loadTodaysImage = async () => {
            try {
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse)               
            } catch (error) {
                console.log(error)
                setTodaysImage(undefined)
            }
        }
        loadTodaysImage().catch(null)
    },[])

    console.log(todaysImage)
    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage  url={todaysImage.url} date={todaysImage.date} title={todaysImage.title}/>
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

