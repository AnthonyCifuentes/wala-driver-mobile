import { IonContent, IonPage } from '@ionic/react'
import Header from '../../components/common/header/Header'
import DeliveryRequestCard from './components/delivery-request-card/DeliveryRequestCard'
import EarningAmountIndicator from './components/earning-amount-indicator/EarningAmountIndicator'
import ViewStatus from './components/view-status/ViewStatus'
const HomeScreen = () => {
    return (
        <IonPage>
            <Header className="transparent" />
            <IonContent>
            {/* <EarningAmountIndicator />
            <ViewStatus /> */}
            <DeliveryRequestCard />
            </IonContent>
        </IonPage>
    )
}

export default HomeScreen
