import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';

export default class Java extends Component {
    
    constructor(props){
        super(props)
        this.state={
            menus : []
        }
    }

    getMenus=()=>{
        fetch('http://18.188.251.115:3000/version/cat/1')
        .then(response => response.json())
        .then((items) => {
            this.setState({menus : items})
        })
    }

    render() {
        const {menus} = this.state
        return (
            <View style={styles.container}>
                {
                    menus.map((item, index) => {
                        return(
                            <View style={{height : 42, width:400, justifyContent:'center'}}>
                                <Text>{item.category}</Text>
                            </View>
                        )
                    })
                }
                <TouchableOpacity 
                onPress={this.getMenus}>
                    <Text> Click </Text>
                </TouchableOpacity>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                        <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            margin: 1
                        }}>
                        <Image
                            style={styles.imageThumbnail}
                            source={{ uri: item.src }}
                        />
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    />
                
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

