import { View, Text,Image } from 'react-native'
import React from 'react'
import { useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import {LinearGradient} from "expo-linear-gradient";
import { styles } from '@/styles/onboarding/onboard';

export default function OnBoardingScreen() {
    let [fontsLoaded,fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_700Bold,
    });
 
    if(!fontsLoaded && fontError){
        return null;
    }

  return ( 
    <View>
        <LinearGradient 
        colors={["#E5ECF9", "#F6F7F9"]}
        style={{flex: 1, alignItems: "center",justifyContent: "center"}}
        >
          <View style={ styles.firstContainer }>
                <View>
                    <Image
                    source={require("@/assets/logo.png")}
                    style={styles.logo}
                    />
                    <Image source ={require("@/assets/onboarding/shape_9.png")}/>
                </View>
                <View style={styles.titleWrapper}>
                    <Image 
                    style={styles.titleTextShape1}
                    source={require("@/assets/onboarding/shape_3.png")}
                    />
                    <Text style={[styles.titleText,{fontFamily:"Raleway_700Bold"}]}>
                        Start Learning With 
                    </Text>
                </View>
          </View>
        </LinearGradient>
    </View>
  );
}