import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings177873Navigator from '../features/Settings177873/navigator';
import Settings177858Navigator from '../features/Settings177858/navigator';
import NotificationList177857Navigator from '../features/NotificationList177857/navigator';
import Maps177856Navigator from '../features/Maps177856/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings177873: { screen: Settings177873Navigator },
Settings177858: { screen: Settings177858Navigator },
NotificationList177857: { screen: NotificationList177857Navigator },
Maps177856: { screen: Maps177856Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
