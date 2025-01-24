import React, { Component } from 'react'
import { Image } from 'react-native'
import commonStyles from '../styles/Styles'

/*
    all built in props for image
*/

const ImageComponent = (props: any) => {
    return (
        <Image
            {...props}
            style={[commonStyles.image, props.style]} />
    );
}

export default ImageComponent;