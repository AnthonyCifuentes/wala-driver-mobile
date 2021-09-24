import { IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react"
import { close} from "ionicons/icons"
import './Header.scss';

const Header = ({title, defaultHref="/", backButton=false, closeButton=false, onClick=()=>{}, className="", children=null}) => {
    return (
        <IonHeader id="wala_header" mode="ios" className={className}>
        <IonToolbar mode="md">
            <IonButtons slot="start">
              {(!backButton && !closeButton) && <IonMenuButton />}
               {backButton && <IonBackButton  defaultHref={defaultHref} />} 
               {closeButton && <IonButton shape="round" onClick={onClick}> <IonIcon slot="icon-only" color="dark" icon={close} />  </IonButton>} 
            </IonButtons>
          <IonTitle>{title}</IonTitle>
          {children}
        </IonToolbar>
      </IonHeader>
    )
}

export default Header
