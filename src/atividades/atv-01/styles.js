import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eeeab9',
        // margin: 20, 
        padding: RFPercentage(2),
        flex: 1,
        borderRadius: RFPercentage(2),
    },
    titulo: {
        fontSize: RFPercentage(3),
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: RFPercentage(5),
    },
    texto: {
        fontSize: RFPercentage(2),
        width: '100%',
        textAlign: 'center',
    },
    texto2: {
        fontSize: RFPercentage(1.4),
        width: '100%',
        textAlign: 'right',
        color: 'rgb(78, 58, 150)',
        marginTop: RFPercentage(5),
    },
});

export default styles;
