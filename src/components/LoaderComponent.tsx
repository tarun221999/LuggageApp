import React from 'react'
import { ActivityIndicator, View, Modal } from 'react-native'
import commonStyles from '../styles/Styles';
import { colors } from '../conifg/theme';
/*
    ---- props available ----
    shouldShow: true/false
    isModalRequired: true/false  
*/

const LoaderComponent = (props: any) => {
    if (props.isModalRequired) {
        return (
            <Modal
                transparent={true}
                visible={props.shouldShow}
                animationType="fade">
                <View
                    style={[commonStyles.container, commonStyles.centerInContainer, { backgroundColor: colors.blurBackground }]}>
                    <ActivityIndicator
                        animating={true}
                        color={colors.white}
                        size={"large"}
                        {...props}
                    />
                </View>
            </Modal>
        );
    } else {
        return (
            <View>
                {props.shouldShow &&
                    <ActivityIndicator
                        animating={true}
                        color={colors.red}
                        size={"large"}
                        {...props}
                    />
                }
            </View>
        );
    }
}

export default LoaderComponent;