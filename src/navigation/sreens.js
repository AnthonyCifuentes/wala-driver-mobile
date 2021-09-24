import OrderScreen from "../screens/order/OrderScreen";

export const SCREENS = [
    {
        label: 'Orden',
        path: '/order/:id',
        screen: (props) => < OrderScreen {...props} />
    }
]