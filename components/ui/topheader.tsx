import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const LOGO = require('@/assets/images/edeprnse.png');

interface TopHeaderProps {
    onBackPress?: () => void;
    logoSize?: number;
}

const TopHeader: React.FC<TopHeaderProps> = ({
    onBackPress,
    logoSize = 36,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.side}>
                {onBackPress ? (
                    <TouchableOpacity onPress={onBackPress}>
                        <MaterialIcons name="arrow-back" size={28} color="black" />
                    </TouchableOpacity>
                ) : null}
            </View>
            <View style={styles.center}>
                <Image
                    source={LOGO}
                    style={{ width: logoSize, height: logoSize, resizeMode: 'contain' }}
                />
            </View>
            <View style={styles.side} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        elevation: 3,
        borderBottomWidth: 0.5,
        borderBottomColor: '#eee',
        paddingHorizontal: 8,
    },
    side: {
        width: 48,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TopHeader;
