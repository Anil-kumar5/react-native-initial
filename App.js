import { MaterialBottomTabView } from '@react-navigation/material-bottom-tabs';
import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import AsyncStorageAdva from './container/asyncstorage/AsyncStorageAdva';
import AsyncStorageCo from './container/asyncstorage/AsyncStorageCo';
import CustomButtonUsage1 from './container/custombutton/CustomButtonUsage1';
import CustomButtonUsage2 from './container/custombutton/CustomButtonUsage2';
import DrawerNav from './container/drawer/Drawer';
import Drawer from './container/drawer/Drawer';
import FetchingData from './container/fetching/FetchingData';
import Flatlist from './container/Flatlist';
import Comp1 from './container/globalstyling/Comp1';
import Images from './container/Images';
import Initial from './container/Initial';
import Input from './container/Input';
import GetMap from './container/maps/GoogleMapss';
import Maps from './container/maps/GoogleMapss';
import Mapsss from './container/maps/Mapssss';
import MaterialBottomTab from './container/materialbottomtab/MaterialBottomTab';
import MaterialTop from './container/materialtop/MaterialTop';
import ModalFile from './container/Modal';
import NavContainer from './container/navigation/NavContainer';
import Scrollviews from './container/ScrollView';
import Sectionslist from './container/Sectionslist';
import TabNavContainer from './container/tabnav/TabNavContainer';
import { Store } from './redux/store';
import {ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client';
import DisplayData from './container/DisplayData';
const App = () => {
  const client = new ApolloClient({
    cache : new InMemoryCache() ,
    uri  :"https://learn.hasura.io/graphql",
  })
 
  return (
  //  <ApolloProvider client = {client}>
  //    <DisplayData/>
  //  </ApolloProvider>
    <Images/>
  );
};
export default App;
{/* <Initial/> */}
   {/* <Scrollviews/> */}
   {/* <Flatlist/> */}
    {/* <Sectionslist/> */}
    {/* <Input/> */}
    {/* <ModalFile/> */}
    {/* <CustomButtonUsage1/> */}
    {/* <CustomButtonUsage2/> */}
  {/* <NavContainer/> */}
  {/* <TabNavContainer/> */}
  {/* <MaterialBottomTab/> */}
  {/* <MaterialTop/> */}
  {/* <DrawerNav/> */}
  {/* <Comp1/> */}
  {/* <Provider store = {Store}>
    <FetchingData/>
  </Provider> */}
{/* <AsyncStorageCo/> */}
{/* <AsyncStorageAdva/> */}
{/* <GetMap/> */}
{/* <Mapsss/> */}

// React.useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(resp => console.log(resp.json(),'response'))
// },[])