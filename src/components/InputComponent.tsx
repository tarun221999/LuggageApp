import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors, fontNames, sizes } from "../conifg/theme";

const InputComponent = (props: any) => {
    return (
        <View style={[props.style, styles.container]}>
            {props.label && <View style={[props.labelView, styles.labelView]}>
                <Text
                    style={[props.labelText, styles.labelText]}>
                    {props.label} {props.isRequired && <Text style={styles.requiredStar}>*</Text>}
                </Text>
            </View>}
            <View style={[props.textInputView, styles.textInputView]}>
                {props.leftIcon &&
                    <View style={[{ marginRight: 10, }, props.leftIconStyle]}>
                        {props.leftIcon}
                    </View>
                }
                <TextInput
                    value={props.value}
                    editable={props.editable}
                    placeholder={props.placeholder}
                    underlineColorAndroid='transparent'
                    onChangeText={props.onChangeText}
                    style={[props.textInput, styles.textInput]}
                />
                {
                    props.rightIcon &&
                    <View style={[props.rightIconStyle, styles.rightIconStyle]}>
                        {props.rightIcon}
                    </View>
                }
            </View>
        </View>
    )
}

export default InputComponent;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20
    },
    labelView: {
        marginBottom: 8
    },
    labelText: {
        fontFamily: fontNames.regularFont,
        textAlignVertical: 'center',
        includeFontPadding: false,
        color: colors.black
    },
    requiredStar: {
        color: colors.red,
    },
    textInputView: {
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center'
    },
    textInput: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '100%',
        fontFamily: fontNames.mediumFont,
        fontSize: sizes.mediumTextSize,
        color: colors.black,
        backgroundColor: colors.white
    },
    rightIconStyle: {
        position: 'absolute',
        right: 15
    },
    buttonBgFilled: {
        backgroundColor: colors.primaryColor,
    },
})