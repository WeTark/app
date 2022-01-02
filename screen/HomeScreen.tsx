import axios from 'axios';
import * as React from 'react';
import { View, Text, Button } from 'react-native';

interface dataType{
  id: number,
  email: string,
  first_name: string
}

interface responseType{
  page: number,
  data: Array<dataType>
}

export const HomeScreen = ({route, navigation }) => {
  const [ a, setA ] = React.useState(10);
  const [response, setResponse] = React.useState<responseType>({
    page: null, data: []
  });


  React.useEffect(
    ()=>{
      axios.get('https://reqres.in/api/users?page=2')
      .then(function (response) {
        // handle success
        setResponse(response.data)
        console.log(response);
      })
    }, []
  )


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {
        response.data && response.data.map(row=>(
          row.id !=7?<Text>{row['email']}</Text>:<Text>Error</Text>
          
        ))
      }
      <Button
        title="Go to Details"
        onPress={()=>{setA(a+1)}}
      />
    </View>
  );
}