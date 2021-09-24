import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from 'react-router-dom';
import LoginScreen from "../screens/login/LoginScreen";
import PrivateNavigation from "./PrivateNavigation";
import Sidemenu from "./Sidemenu";

const WalaApp = () => {
    return (
        <IonReactRouter>
            <Sidemenu />
            <IonRouterOutlet id="main">
                <PrivateNavigation />
                    
                <Route path="/login" component={LoginScreen} exact />
                
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
            </IonRouterOutlet>
        </IonReactRouter>
    )
}

export default WalaApp
