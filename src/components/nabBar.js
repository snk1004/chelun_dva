import React from 'react'
import { NavBar , Icon } from 'antd-mobile';

import 'antd-mobile/dist/antd-mobile.css'
import '../views/IndexPage.scss';

// 如果不是使用 List.Item 作为 children


class navBar extends React.Component {
    state = {
    
    };
    render() {
    return (
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >补换驾照</NavBar>
    );
    }
}


export default navBar;