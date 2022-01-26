import ReactSwipeButton from 'react-swipe-button'
import React, { useState } from 'react'
import { Button } from 'native-base'

interface ISwipeButtonProps{
    selected: number,
    newTrade: ()=>void
}

export interface INewTrade{
    event_id: string,
    initialSize: number,
    price: number,
    tradeType: string
}

export const SwipeButton = (props: ISwipeButtonProps) => {
    const { selected, newTrade } = props;
    const [ swipeComplete, setSwipeComplete ] = useState(false)

    const onSucces = () => {
        setSwipeComplete(true)
        newTrade();
    }

    return (
        <>
        {
            swipeComplete?(
                <Button style={{height:'50px'}} borderRadius='50px' backgroundColor={selected===1?'#1E738E':'#D2434C'} isLoading>Processing</Button>
            ):(
                <ReactSwipeButton 
                text={`Swipe to buy ${selected===1?'YES':'NO'}`}
                color={selected===1?'#1E738E':'#D2434C'}
                onSuccess={onSucces}
              />
            )
        }
        </>
    )
}