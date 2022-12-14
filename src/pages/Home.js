import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import House from '../components/House';
import Recomended from '../components/Recomended';

export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView
        showsVerticalScrollIndicator={ false }
        style={{ backgroundColor: '#fff' }}
        >

            <View style={ styles.header }>
                <View style={ styles.inputArea }>
                    <Feather name='search' size={ 14 } color='black' />
                    <TextInput placeholder='O que está procurando?' style={ styles.input } />
                </View>
            </View>

            <View style={ styles.contentNew }>
                <Text style={ styles.title }> Novidades </Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={ false } style={{ paddingHorizontal: 15 }}>
                <New
                cover={ require('../../assets/house1.jpg') }
                name='Casa de Praia' 
                description='Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.'
                price='1.200,90'
                onPress={() => navigation.navigate('detail')}
                />
                <New
                cover={ require('../../assets/house2.jpg') }
                name='Casa Maravilha' 
                description='Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.'
                price='2.200,90'
                onPress={() => {}}
                />
                <New
                cover={ require('../../assets/house3.jpg') }
                name='Rancho São Pedro' 
                description='Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.'
                price='5.200,90'
                onPress={() => {}}
                />
            </ScrollView>

            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                <Text style={[ styles.title,  { marginTop: 20 } ]}> Próximo de você </Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={ false } style={{ paddingHorizontal: 15 }}>
                <House
                cover={require('../../assets/house4.jpg')}
                description='DESCRIÇÃO QUAQUER COISA AQUI!'
                price='970,89'
                />
                <House
                cover={require('../../assets/house5.jpg')}
                description='DESCRIÇÃO QUAQUER COISA AQUI!'
                price='770,89'
                />
                <House
                cover={require('../../assets/house6.jpg')}
                description='DESCRIÇÃO QUAQUER COISA AQUI!'
                price='1070,89'
                />
            </ScrollView>

            <Text style={[ styles.title,  { marginTop: 20 } ]}> 
                Dica do dia
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={ false } style={{ paddingHorizontal: 15 }} endFillColor='#000'>
                <Recomended
                cover={require('../../assets/house1.jpg')} 
                house='Casa Floripa'
                offer='25% OFF'
                />
                <Recomended
                cover={require('../../assets/house6.jpg')} 
                house='Casa São Paulo'
                offer='20% OFF'
                />
                <Recomended
                cover={require('../../assets/house2.jpg')} 
                house='Casa Rio de Janeiro'
                offer='15% OFF'
                />
            </ScrollView>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        backgroundColor: '#fff',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10
    },
    input: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%'
    },

    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a'
    }


});