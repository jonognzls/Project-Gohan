import React from "react";
import {
    View,
    Text,
    ImageBackground,
    StatusBar
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { images, COLORS, SIZES, FONTS } from "../constants";

import { CustomButton } from "../components";

const Account = ({ navigation }) => {

    function renderHeader() {
        return (
            <View
                style={{
                    height: SIZES.height > 700 ? "65%" : "60%"
                }}
            >
                <ImageBackground
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end'
                    }}
                    resizeMode="cover"
                    source={images.AccountBackground}
                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[
                            COLORS.transparent,
                            COLORS.black
                        ]}
                        style={{
                            height: 200,
                            justifyContent: 'flex-end',
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <Text
                            style={{
                                width: "80%",
                                color: COLORS.white,
                                lineHeight: 35,
                                ...FONTS.largeTitle
                            }}
                        >
                            Login or create an account to rate your favorite recipes!
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }

    function renderDetail() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding,
                }}
            >

                {/* Buttons */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}
                >
                    <CustomButton
                        buttonText="Login"
                        buttonContainerStyle={{
                            paddingVertical: 18,
                            borderRadius: 20
                        }}
                        colors={[COLORS.darkGreen, COLORS.lime]}
                        onPress={() => navigation.replace("Login")}
                    />

                    <CustomButton
                        buttonText="Sign Up"
                        buttonContainerStyle={{
                            marginTop: SIZES.radius,
                            paddingVertical: 18,
                            borderRadius: 20,
                            borderColor: COLORS.darkLime,
                            borderWidth: 1,
                        }}
                        colors={[]}
                        onPress={() => navigation.replace("SignUp")}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            <StatusBar barStyle="light-content" />

            {/* Header */}
            {renderHeader()}

            {/* Detail */}
            {renderDetail()}
        </View>
    )
}



export default Account;