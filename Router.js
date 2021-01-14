import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
import {NetworkInfo} from 'react-native-network-info';
import {WebView} from 'react-native-webview';



const Router = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [ipv4Address, setIpv4Address] = useState('');
  const [subnet, setsubnet] = useState('');
  const [bssid, setBssid] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  React.useEffect(() => {
    NetworkInfo.getGatewayIPAddress().then((defaultGateway) => {
      setIpAddress(defaultGateway);
    });

    NetworkInfo.getSubnet().then((subnet) => {
      setsubnet(subnet)
    });
    NetworkInfo.getIPV4Address().then(ipv4Address => {
        setIpv4Address(ipv4Address)
      })
    
  }, []);

  return (
    <>
      <View style={styles.adView}>
        <Text>Ads Here</Text>

      


      </View>
      <WebView style={styles.web} source={{uri: `http://${ipAddress}`}} />

      <View style={styles.defaultArea}>
    <TouchableOpacity onPress={()=>setModalVisible(true)} style={{left:'70%',top:10}}>
        <Text>Show Wifi Details</Text>
    </TouchableOpacity>
        <Text
          style={
            ([styles.defaultAreaText], {color: 'gray'})
          }>{`Router Ip Address is : ${ipAddress}`}</Text>
        <Text style={styles.defaultAreaText}>Default UserName: Admin</Text>
        <Text style={styles.defaultAreaText}>Default Password: Admin</Text>
      </View>
      {/* //modal start */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Wifi Network Details!</Text>
            <Text
          style={{
             color: 'gray'}}>{`Router Ip Address is : ${ipAddress}`}</Text>
            <Text>{`Subnet : ${subnet}`}</Text>
            <Text>{`ipV4 : ${ipv4Address}`}</Text>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Ok</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Router;

const styles = StyleSheet.create({
  adView: {
    padding: 10,
    height: 60,
    width: '100%',
    backgroundColor: 'cyan',
  },
  web: {
    height: '100%',
    width: '100%',
  },
  defaultArea: {
    height: 100,
    width: '100%',
    backgroundColor: 'lightgray',
  },
  defaultAreaText: {
    marginLeft: 10,
    padding: 2,
    fontFamily: 'san-serf',
    fontWeight: 'bold',
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
      justifyContent:'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

