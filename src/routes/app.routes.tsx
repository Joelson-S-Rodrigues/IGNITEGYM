import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';
import { History } from '@screens/History';
import { Exercise } from '@screens/Exercise';

const {Navigator, Screen} = createBottomTabNavigator();


type AppRoutes = {
    home: undefined;
    exercise: undefined;
    profile: undefined
    history: undefined;
}
export function AppRoutes() {
    return (
        <Navigator>
            <Screen
             name="home"
              component={Home}
              />

            <Screen
             name="history"
              component={History}
               />

            <Screen 
            name="profile" 
            component={Profile}
            
            />
            <Screen
             name="exercise" 
             component={Exercise}
              />
        </Navigator>
    )
}