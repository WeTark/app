import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { RealTimeAPI } from "rocket.chat.realtime.api.rxjs";


export const Login = ({route, navigation }) => {


  const realTimeAPI =  new RealTimeAPI("wss://chat.wetark.in/websocket");

  React.useEffect(()=>{
    realTimeAPI.connectToServer();
    const auth = realTimeAPI.login("prabhat", "prabhat@123");
    // console.log(auth)
    realTimeAPI.onMessage(message=>console.log(message))
    // auth.subscribe(
    //   (data) => console.log(data),
    //   (err) => console.log(err),
    //   () => console.log('completed'));

    // realTimeAPI.callMethod(
    //   "login", 
      
    //     {
    //         "user": { "username": "prabhat" },
    //         "password": {
    //             "digest": "a549d4cf60d6b092584b541ecf18311d5baafe1f3eb30510fb76b85d44c58bd2",
    //             "algorithm":"sha-256"
    //         }
    //     }
    // )
    // .subscribe(
    //   (data) => console.log(data),
    //   (err) => console.log(err),
    //   () => console.log('completed'));


    realTimeAPI.callMethod(
      "loadHistory",  "kLD8b9EvokGL9yERS", null, 50, { "$date": 1480377601 }
    ).subscribe(
          (data) => console.log(data),
          (err) => console.log(err),
          () => console.log('completed'));


    realTimeAPI.getSubscription(
      "stream-room-messages",  "kLD8b9EvokGL9yERS", false
    ).subscribe(
        (data) => console.log(data),
        (err) => console.log(err),
        () => console.log('completed'));


  
  },[])

  const sendMsg = () => {
      realTimeAPI.callMethod(
      "sendMessage",  {
        "rid": "kLD8b9EvokGL9yERS",
        "msg": "Hello World!"
      } 
    ).subscribe(
        (data) => console.log(data),
        (err) => console.log(err),
        () => console.log('completed'));
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => sendMsg()}
      />
    </View>
  );
}