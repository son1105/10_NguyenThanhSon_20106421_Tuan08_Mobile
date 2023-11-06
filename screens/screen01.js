import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
export default function Screen01() {
    const data = [
        {
            id: 1,
            imgPath: './assets/donutGreen.jpg',
            title: 'Tasty Donut',
            shop: 'Spicy tasty donut family',
            price: 10.00
        },
        {
            id: 2,
            imgPath: './assets/donutGreen.jpg',
            title: 'Pink Donut',
            shop: 'Spicy tasty donut family',
            price: 10.00
        },
        {
            id: 3,
            imgPath: './assets/donutGreen.jpg',
            title: 'Floating Donut',
            shop: 'Spicy tasty donut family',
            price: 10.00
        }
    ]
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: '2.5%' }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 700 }}>Welcome, Jala!</Text>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>Choice you Best food</Text>
            </View>
            <View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
                <TextInput style={{ fontSize: 16, width: '90%', height: 46, borderWidth: 1, borderColor: '#C4C4C4', backgroundColor: '#ffffff', paddingHorizontal: '2%' }} placeholderTextColor={'gray'} placeholder={'Seach food'}></TextInput>
                <TouchableOpacity style={{ backgroundColor: '#F1B000', height: 46, width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="search" size={24} color="#FAFAFA" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 8 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#F1B000' }]}>
                        <Text>Donut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>Donut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>Donut</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 7 }}>
                    <FlatList data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={{flexDirection: 'row'}}>
                                    <Image/>
                                    <View>
                                    <Text>{item.title}</Text>
                                    <Text>{item.shop}</Text>
                                    <Text>${item.price}</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    button: {
        width: '30%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1
    }
})