import * as React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
import { customtInputToolbar } from './customtInputToolbar';
import { RealTimeAPI } from "rocket.chat.realtime.api.rxjs";


export const Chat = () => {
    const [messages, setMessages] = React.useState([]);

    const eventId = 'kLD8b9EvokGL9yERS'

    const realTimeAPI =  new RealTimeAPI("wss://chat.wetark.in/websocket");realTimeAPI.connectToServer();
    const auth = realTimeAPI.login("prabhat", "prabhat@123");

    React.useEffect(() => {
        realTimeAPI.onMessage( message => {
          if(message['msg'] === 'ping'){
            realTimeAPI.callMethod(
              "sendMessage",  {
                "msg": "pong"
              }
            )
          }
        })

        realTimeAPI.getSubscription(
          "stream-room-messages",  eventId, false
        ).subscribe(
            (data) => {
              console.log(data)
              setMessages(prevArray =>[
                {
                  _id: data.fields.args[0]._id, 
                  text: data.fields.args[0].msg, 
                  createdAt: data.fields.args[0].ts.$date,
                  user: {
                    _id: data.fields.args[0].u._id,
                    name: data.fields.args[0].u.name,
                    avatar: 'https://placeimg.com/140/140/any',
                  }
                },
                ...prevArray
              ]);

            },
            (err) => console.log(err),
            () => console.log('completed'),
          );

        loadHistory();
        // setMessages([
        //   {
        //     _id: 1,
        //     text: 'Hello developer \n  hiw',
        //     createdAt: new Date(),
        //     user: {
        //       _id: 2,
        //       name: 'React Native',
        //       avatar: 'https://placeimg.com/140/140/any',
        //     },
        //   }
        // ])
      }, [])

    const onSend = (messages) => {
      console.log(messages);
      realTimeAPI.callMethod(
        "sendMessage",  {
          "rid": eventId,
          "msg": messages[0].text
        } 
      ).subscribe(
          (data) => console.log(data),
          (err) => console.log(err),
          () => console.log('completed'));
    }

    const loadHistory = () => {
      realTimeAPI.callMethod(
        "loadHistory",  eventId, null, 20, { "$date": 1480377601 }
      ).subscribe(
            (data) => {
              setMessages(data.result.messages.map(message=>{
                return {
                  _id: message._id, 
                  text: message.msg, 
                  createdAt: message.ts.$date,
                  user: {
                    _id: message.u._id,
                    name: message.u.name,
                    avatar: 'https://placeimg.com/140/140/any',
                  }
                }
              }
              ))
            },
            (err) => console.log(err),
            () => console.log('completed'));
    }

    return(
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: "AgLXf9KeF84yNrLgn",
            }}
            renderInputToolbar={props => customtInputToolbar(props)}
        />
    )
}