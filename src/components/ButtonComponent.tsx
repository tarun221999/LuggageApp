import React from "react";
import { ImageComponent, Text, TouchableOpacity } from "react-native";
import commonStyles from '../styles/Styles';
import { colors } from "../conifg/theme";

const ButtonComponent = (props: any) => {
    return (
            <TouchableOpacity
                {...props}
                style={[props.isFillRequired ? commonStyles.buttonBgFilled : commonStyles.buttonBgOutline,
                { borderColor: props.color ? props.color : colors.primaryColor },
                { backgroundColor: props.isFillRequired ? props.color ? props.color : colors.primaryColor : colors.white },
                props.style]}
                onPress={() => {
                    if (props.onPress) {
                        props.onPress()
                    }
                }}>
                {props.icon &&
                    <ImageComponent source={props.icon}
                        style={[{ marginRight: 10 }, props.iconStyle]} />
                }
                <Text
                    style={[commonStyles.buttonText,
                    { color: props.isFillRequired ? colors.white : colors.primaryColor },
                    props.fontStyle]}>
                    {props.title}
                </Text>
                {
                    props.rightIcon && <ImageComponent source={props.rightIcon}
                        style={[{ marginLeft: 10 }, props.rightIconStyle]} />
                }
            </TouchableOpacity>
    )
};

export default ButtonComponent;