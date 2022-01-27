import orderPlace from "../../assets/order-placed.json";
import { Center, Modal, Text } from 'native-base';
import { LottieAnimation } from "../../utils/lottie/LottieAnimation.component";

interface IOrderPlacedProps{
    showModal: boolean,
    setShowModal: (showModal: boolean) => void,
    selectedType: number,
    response: any
}
export const OrderPlaced = (props: IOrderPlacedProps) => {
    const {showModal, setShowModal, selectedType, response} = props;

    return(
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="300px" bg='#003241'>
            {/* <Modal.CloseButton />
            <Modal.Header></Modal.Header> */}
            <Modal.Body>
                <Center>
                    <LottieAnimation animationData={orderPlace}/>
                </Center>
                <Center><Text fontWeight={'bold'} fontSize={'20'} color={'white'}>Order Placed for {selectedType===1?'Yes':'No'}!</Text></Center>
                <Center><Text fontSize={'15'} color={'white'}>{response?.initialSize-response?.size} Matched | {response?.size} in Process</Text></Center>
            </Modal.Body>
            </Modal.Content>
        </Modal>
    )
}