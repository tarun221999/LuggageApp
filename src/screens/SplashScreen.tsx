import React, { useEffect, useState } from "react";
import { screenNames } from "../conifg/constants";
import { getAsyncData } from "../utils/AsyncStorageHelper";
import { View } from "react-native";
import LoaderComponent from "../components/LoaderComponent";

const SplashScreen = ({ navigation }: { navigation: any }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
    const [showModalLoader, setShowModalLoader] = useState<boolean>(false);

    useEffect(() => {
        const checkAuthStatus = async () => {
            // const token = await getAsyncData("auth_token");
            // if (token) {
            //     navigation.navigate(screenNames.APP_STACK);
            // } else {
            //     navigation.navigate(screenNames.AUTH_STACK);
            // }
            navigation.navigate(screenNames.APP_STACK);

        };

        checkAuthStatus();
    }, [5000]);


    return (
        <View>
            <LoaderComponent
                isModalRequired={true}
                shouldShow={showModalLoader} />
        </View>
    );
};

export default SplashScreen;
