import React from 'react';
import {Header} from 'react-native-elements';

function HeaderCommon({nav}){
    const opn = () => nav.toggleDrawer();
  
    return(
        <Header leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: opn,
          }}
          centerComponent={{text: 'ShopKaro',  style: {color: '#fff', fontSize:20, }}}
        backgroundColor="green"/>
    )
}
export default HeaderCommon;