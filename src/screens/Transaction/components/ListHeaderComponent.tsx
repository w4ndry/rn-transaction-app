import React, { FC } from 'react'
import { StyleSheet, View, TextInput, Image, Pressable } from 'react-native'
import { MARGIN_BOTTOM, MARGIN_LEFT, MARGIN_RIGHT, BORDER_RADIUS_NORMAL, FONT_WEIGHT_BOLD, FONT_SIZE_SMALL, LINE_HEIGHT_20 } from '../../../themes/themes'
import { Card } from '../../../components/cards'
import { SEARCH_PLACEHOLDER, URUTKAN } from '../../../constants/label'
import { Label } from '../../../components/texts'
import { LINE_HEIGHT_16 } from '../../../themes/themes'
import { GREY_COLOR, DARK_GREY_COLOR } from '../../../themes/colors'


type Props = {
    value: string,
    onChange: (text: string) => void,
    clearSearch: () => void,
}

const ListHeaderComponent: FC<Props> = ({ value, onChange, clearSearch }: Props) => {
    const renderButtonClearText = () => {
        if (value.length > 0) {
            return (
                <Pressable style={styles.clearButton} onPress={clearSearch}>
                    <Label style={styles.clearText}>x</Label>
                </Pressable>
            )
        }
        return null
    }

    return (
        <Card style={styles.container}>
            <View style={styles.inputContainer}>
                <Image
                    source={require('../../../assets/icons/outline_search_black_48.png')}
                    style={styles.iconSearch}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={SEARCH_PLACEHOLDER}
                        style={styles.inputSearch}
                        value={value}
                        onChangeText={text => onChange(text)}
                    />
                    {renderButtonClearText()}
                </View>
            </View>
            <Pressable style={styles.sortedContainer}>
                <Label style={styles.sortedText}>{URUTKAN}</Label>
                <Image
                    source={require('../../../assets/icons/outline_keyboard_arrow_down_black_48.png')}
                    style={styles.iconSearch}
                />
            </Pressable>
        </Card>
    )
}

export default ListHeaderComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: MARGIN_BOTTOM,
        // marginLeft: MARGIN_LEFT,
        // marginRight: MARGIN_RIGHT,
        borderRadius: BORDER_RADIUS_NORMAL,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSearch: {
        width: 30,
        height: 30,
        tintColor: GREY_COLOR,
    },
    inputSearch: {
        flex: 1,
        fontSize: FONT_SIZE_SMALL,
    },
    clearButton: {
        marginRight: MARGIN_RIGHT,
        backgroundColor: GREY_COLOR,
        width: 18,
        height: 18,
        borderRadius: 18,
        alignItems: 'center',
    },
    clearText: {
        fontSize: FONT_SIZE_SMALL,
        lineHeight: LINE_HEIGHT_16,
        color: DARK_GREY_COLOR,
    },
    sortedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sortedText: {
        fontWeight: FONT_WEIGHT_BOLD,
        fontSize: FONT_SIZE_SMALL,
    }
})