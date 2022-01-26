import { GiftedChat } from 'react-native-gifted-chat'
import { customtInputToolbar } from './customtInputToolbar';
import { RealTimeAPI } from "rocket.chat.realtime.api.rxjs";
import { useSelector } from 'react-redux';
import { RootState } from '../../../App';
import { Spinner } from 'native-base';
import { useEffect, useState } from 'react';

interface IChatProps{
  rcChannelId: string
}
export const Chat = (props: IChatProps) => {
    const {rcChannelId} = props;
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [rcUserId, setRcUserId] = useState();
    const userData = useSelector((state:RootState) => state.userData)

    const realTimeAPI =  new RealTimeAPI("wss://chat.wetark.in/websocket");realTimeAPI.connectToServer();
    const auth = realTimeAPI.login(userData.phoneNo, userData.email);

    useEffect(() => {
        realTimeAPI.onMessage( message => {
          if(message['msg'] === 'added' && message['id']){
            setRcUserId(message['id'])
          }
          if(message['msg'] === 'ping'){
            realTimeAPI.callMethod(
              "sendMessage",  {
                "msg": "pong"
              }
            )
          }
        })

        realTimeAPI.getSubscription(
          "stream-room-messages",  rcChannelId, false
        ).subscribe(
            (data) => {
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
      }, [])

    const onSend = (messages) => {
      realTimeAPI.callMethod(
        "sendMessage",  {
          "rid": rcChannelId,
          "msg": messages[0].text
        } 
      ).subscribe(
          (data) => {},
          (err) => console.log(err),
          () => console.log('completed'));
    }

    const loadHistory = () => {
      realTimeAPI.callMethod(
        "loadHistory",  rcChannelId, null, 20, { "$date": 1480377601 }
      ).subscribe(
            (data) => {
              setIsLoading(false);
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
      <>
        {
           isLoading? (
            <Spinner mt='50%' size={'lg'} color="indigo.500" />
          ):(
            <GiftedChat
              messages={messages}
              onSend={messages => onSend(messages)}
              user={{
                  _id: rcUserId,
              }}
              renderInputToolbar={props => customtInputToolbar(props)}
            />
          )
        }
      </>
    )
}