import React, {useState} from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity,
    FlatList,
    Dimensions
} from 'react-native';


/*
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
*/



const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
  
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  
    return data;
};

const Java = () => {

   

    getMenus=()=>{
        fetch('http://18.188.251.115:3000/version/cat/1')
        .then(response => response.json())
        .then((items) => {
            this.setState({menus : items})
        })
    }


   return (
        const {menus} = this.state

        <FlatList
            data={formatData(menus, numColumns)}
            style={styles.container}
            renderItem={this.renderItem}
            numColumns={numColumns}
      />
   );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
      },
      item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width / numColumns, // approximate a square
      },
      itemInvisible: {
        backgroundColor: 'transparent',
      },
      itemText: {
        color: '#fff',
      },
});



export default Java;