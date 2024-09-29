import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'

const Header = () => {
    return (
        <View style={sytles.container}>
            <View style={sytles.leftContainer}>
                <Text style={sytles.title}>Explore</Text>
            </View>
            <View style={sytles.rightContainer}>
                <Image source={require('../../../assets/nasaimage.png')} style={sytles.image} />
            </View>
        </View>
    )
}

export default Header

const sytles = StyleSheet.create({
   container:{   
    flexDirection:'row',
    alignItems:'center'
    },
    leftContainer:{
        flex:1,
        alignItems:'flex-start'
    },
    rightContainer:{
        flex:1,
        alignItems:'flex-end'
    },
    title:{
        fontSize:20,
        color:"#fff"
    },
    image:{
        width:60,
        height:60,
    }
})