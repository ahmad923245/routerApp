import React,{useEffect} from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'
import DeviceInfo from 'react-native-device-info'; 
import SendSMS from 'react-native-sms'


const Details = () => {


    const sendsms =()=>{
        SendSMS.send({
            body:'33109',
            recipients:['668'],
            successTypes:['sent','queued']
        }, (completed, cancelled, error) => {
 
            console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
     
        });
    }


    const getDetails=()=>{
        // DeviceInfo.getPhoneNumber().then(phonenumber=>{
        //     console.log(phonenumber)
        // })
        // DeviceInfo.getMacAddress().then(macaddress=>{
        //     console.log(macaddress)
        // })
        // DeviceInfo.getDeviceName().then(deviceName => {
        //    console.log(deviceName)
        //   });
      
    }

    useEffect(()=>{
        getDetails()
    },[])

    return (
        <View>
            <Text>a</Text>
            <Button
            title="Send sms"
            onPress={sendsms}
            />
        </View>
    )
}

export default Details

const styles = StyleSheet.create({})
