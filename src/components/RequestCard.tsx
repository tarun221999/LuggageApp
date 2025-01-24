import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors, fontNames, sizes } from "../conifg/theme";

const RequestCard = (props: any) => {
    return (
        <View style={[props.style, styles.container]}>
            {props.label && <View style={[props.labelView, styles.labelView]}>
                <Text
                    style={[props.labelText, styles.labelText]}>
                    {props.label}
                </Text>
            </View>}
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View>
                        <Text>Order Name</Text>
                        <Text>Name</Text>
                    </View>
                    <View>
                        <Text>Status</Text>
                    </View>
                </View>
                <View style={styles.cardContent1}>
                    <View>
                        <View style={styles.iconCard}>
                            <Text>ic0</Text>
                        </View>
                    </View>
                    <View style={styles.addressBox}>
                        <Text>Order Name</Text>
                        <Text>Name</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RequestCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
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
    card: {
        backgroundColor: colors.pendingCardBg,
        borderRadius: 10,
        padding: 10,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardContent1: {
        flexDirection: 'row',
        marginTop: 10
    },
    iconCard: {
        backgroundColor: colors.lightBlueBg,
        borderRadius: 10,
        padding: 10,
    },
    addressBox: {
        marginHorizontal: 10,
    },
    buttonBgFilled: {
        backgroundColor: colors.primaryColor,
    },
})