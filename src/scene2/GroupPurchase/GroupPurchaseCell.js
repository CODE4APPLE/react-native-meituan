// @flow
import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {Heading2, Heading3, Paragraph} from '../../widget/Text'
import {screen} from '../../common'
import {color} from '../../widget'

type Props = {
    info: Object,
    onPress: Function
}

export default class GroupPurchaseCell extends PureComponent<Props> {

    render() {

        let {info, onPress} = this.props
        let imageUrl = info.imageUrl.replace('w.h', '160.0')

        return (
            <TouchableOpacity style={styles.container} onPress={() => onPress(info)}>
                <Image source={{uri: imageUrl}} style={styles.icon} />

                <View style={styles.rightContainer}>
                    <Heading2>{info.title}</Heading2>

                    <Paragraph
                        numberOfLines={0}
                        style={{marginTop: 8}}>
                        {info.subtitle}
                    </Paragraph>

                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Heading2 style={styles.price}>{info.price}元</Heading2>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: screen.onePixel,
        borderColor: color.border,
        backgroundColor: 'white'
    },

    icon: {
        width: 80,
        height: 80,
        borderRadius: 5
    },

    rightContainer: {
        flex: 1,
        paddingLeft: 20
    },

    price: {
        color: color.primary
    }
})
