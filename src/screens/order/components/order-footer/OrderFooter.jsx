import { IonButton, IonFooter } from '@ionic/react';
import './OrderFooter.scss';

const OrderFooter = ({disabled=true}) => {
    return (
        <IonFooter id="order_footer">
            <IonButton disabled={disabled} mode="md" expand="full" shape="round" fill="solid" color="success">
                INICIAR ENTREGA   
            </IonButton>
        </IonFooter>
    )
}

export default OrderFooter
