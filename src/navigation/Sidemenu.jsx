import { IonContent, IonIcon, IonItem, IonLabel, IonList,  IonListHeader,  IonMenu, IonMenuToggle, IonNote } from '@ionic/react';
import { useLocation } from 'react-router';
import WalaLogo from '../components/common/wala-logo/WalaLogo';
import { MENU_SCREENS } from './menuScreens';
import './Sidemenu.scss';

const Sidemenu = () => {
  const location = useLocation();

    return (
        <IonMenu id="sidemenu" contentId="main" type="overlay">
        <IonContent>
          
        <IonListHeader>
            <WalaLogo size="large"/>
        </IonListHeader>
          
          <IonList>
            {MENU_SCREENS.map((screen, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === screen.path ? 'selected' : ''} routerLink={screen.path} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" icon={location.pathname === screen.path ? screen.icon : screen.iconOutline} />
                    <IonLabel>{screen.label}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
  
 
        </IonContent>
      </IonMenu>
    )
}

export default Sidemenu
