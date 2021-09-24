import { IonButton, IonContent, IonPage } from '@ionic/react'
import { call, location, navigate, thumbsDownOutline, thumbsUpOutline } from 'ionicons/icons'
import { useState } from 'react'
import HeaderCondense from '../../components/common/header-condense/HeaderCondense'
import Header from '../../components/common/header/Header'
import ItemDetailIcon from '../../components/common/item-detail-icon/ItemDetailIcon'
import RoundButton from '../../components/common/round-button/RoundButton'
import ItemCustomerCheckbox from './components/item-customer-checkbox/ItemCustomerCheckbox'
import OrderFooter from './components/order-footer/OrderFooter'


const OrderScreen = () => {

    const [disabled, setDisabled] = useState(true);

    return (
        <IonPage mode="ios">
            <Header backButton title="Nombre del restaurante" defaultHref="/home" />
            <IonContent className="wala-content">
                <HeaderCondense title="Nombre del restaurante">
                    <RoundButton icon={call} />
                </HeaderCondense>
                <section>
                    <p>Nota del restaurante</p>
                    <span>Recoger en el mostrador.</span>
                </section>
                <ItemDetailIcon lines="full" icon={location} title="Dirección del restaurante" subtitle="4ave 6calle zona 1">
                    <RoundButton icon={navigate} size="small" />
                </ItemDetailIcon>
                <section>
                    <p>1 pedido para recolectar</p>
                    <ItemCustomerCheckbox onChecked={(value) => setDisabled(!value)} /> 
                </section>
                <section>
                    <p>¿Qué tal estuvo la recolección?</p>
                    <RoundButton icon={thumbsDownOutline} />
                    <RoundButton icon={thumbsUpOutline} />
                    
                </section>
            </IonContent>
            <OrderFooter disabled={disabled} />
        </IonPage>
    )
}

export default OrderScreen
