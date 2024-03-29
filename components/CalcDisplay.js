import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CalcDisplay extends React.Component {

    static defaultProps = {
        display: "",
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.display}>{this.props.display}</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: { 
        padding: 20,
    },
    display: { 
        fontSize: 60,
        textAlign: "right",
        color: "white",
    },
});