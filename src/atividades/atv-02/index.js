import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import img from '../../../assets/002-1-react-native.png'; 

import Mensagem from './mensagens';

function atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 02</Text>
            <Image source={img} style={styles.imagem} /> 

            <Mensagem titulo={'Sucesso'} descricao={'ainda vazia'} preco={'valor'} imagem={img}>
                Valor enviado corretamente!
            </Mensagem>
            <Mensagem titulo={'Erro'} descricao={'ainda vazia'} preco={'valor'} imagem={img}>
                O programa não respondeu como esperado!
            </Mensagem>
            <Mensagem titulo={'Alerta'} descricao={'ainda vazia'} preco={'valor'} imagem={img}>
                Você não pode fazer isso!
            </Mensagem>
        </View>
    );
}

export default Exemplo02;