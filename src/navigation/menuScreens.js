import {
    cash,
    cashOutline,
    home,
    homeOutline,
} from "ionicons/icons";

import HomeScreen from "../screens/home/HomeScreen";
import PaymentsScreen from "../screens/payments/PaymentsScreen";


export const MENU_SCREENS = [    
{
    label: 'Inicio',
    path: '/home',
    icon: home,
    iconOutline: homeOutline,
    screen: (props) => < HomeScreen {...props }/>
},
{
    label: 'Pagos',
    path: '/payments',
    icon: cash,
    iconOutline: cashOutline,
    screen: (props) => < PaymentsScreen {...props }/>
}
]