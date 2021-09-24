import { IonButton } from '@ionic/react';
import { person, storefront } from 'ionicons/icons';
import { useHistory } from 'react-router';
import ItemDetailIcon from '../../../../components/common/item-detail-icon/ItemDetailIcon';
import Timer from './components/timer/Timer';
import './DeliveryRequestCard.scss';

const DeliveryRequestCard = () => {

    const history = useHistory();

    return (
        <div className="delivery_request_card">
            <div className="delivery_request_card_title">
            <h3>Nueva orden</h3>
            <IonButton color="danger" className="wala-button" mode="md" fill="clear" expand="full">
                Rechazar
            </IonButton>
            </div>
            <div className="delivery_request_card_container">
                <div className="delivery_request_card_header">
                    <div className="delivery_request_card_header_id">
                        <span>Identificador</span>
                        <h3>#A12341</h3>
                    </div>
                <Timer />
                </div>
                <div className="delivery_request_card_location">
                <ItemDetailIcon itemColor="secondary" color="light" lines="none" icon={storefront} title="McDonalds Coatepeque" subtitle="4ave 6calle zona 1" />
                <span></span>
                <ItemDetailIcon itemColor="secondary" color="light" lines="none" icon={person} title="Andre Lopez" subtitle="Zona 2, Coatepeque" />
                </div>
                <div className="delivery_request_card_amount">
                <h3><span>GTQ</span>12.00</h3>                
                    <span>Precio de entrega</span>
                </div>
            </div>
            <IonButton routerLink="/order/A2452" color="success" className="wala-button delivery_request_card_accept" mode="md" shape="round" expand="full">
                ACEPTAR
            </IonButton>
        </div>
    )
}

export default DeliveryRequestCard
