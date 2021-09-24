import { IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import './HeaderCondense.scss';

const HeaderCondense = ({title, className, children}) => {
    return (
        <IonHeader className={className} collapse="condense" id="header_condense">
        <IonToolbar>
          <h3>{title}</h3>
        {children && <IonButtons slot="end">
            {children}
        </IonButtons>}
        </IonToolbar>
      </IonHeader>
    )
}

export default HeaderCondense
