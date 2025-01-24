import React from "react";
import { colors } from "../conifg/theme";
import { View } from "react-native";

const Divider = () => {
    return (
      <View style={{backgroundColor: colors.greyLineColor, paddingVertical: 1, marginVertical: 10}}></View>
    )
}

export default Divider;