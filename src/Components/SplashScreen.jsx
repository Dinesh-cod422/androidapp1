import { useEffect } from "react";
import { StatusBar, Text, View } from "react-native"
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function SplashScreen() {
    const ring1padding = useSharedValue(0)
    const ring2padding = useSharedValue(0)

    useEffect(() => {
        ring1padding.value = 0
        ring2padding.value = 0
        setTimeout(() => ring1padding.value = withSpring(ring1padding.value + hp(5)), 100)
        setTimeout(() => ring2padding.value = withSpring(ring2padding.value + hp(5.5)), 200)
    })

    return (
        <View className="flex-1 bg-amber-500 justify-center items-center">
            <StatusBar backgroundColor="#F59E0B" barStyle="light-content" />
            <Animated.View className="bg-white/20 rounded-full" style={{ padding: ring1padding }}>
                <Animated.View className="bg-white/20 rounded-full" style={{ padding: ring2padding }}>
                    <Text className="">Home Screen</Text>
                </Animated.View>
            </Animated.View>

            <View className="flex item-center space-y-2">
                <Text style={{ fontSize: hp(7) }} className="font-bold text-white tracking-widest text-6xl">
                    Welcome
                </Text>
                <Text style={{ fontSize: hp(2) }} className="font-bold text-white tracking-widest text-lg">
                    Hii Friends
                </Text>
            </View>
        </View>
    )
}