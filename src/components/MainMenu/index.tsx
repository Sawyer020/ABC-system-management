import {
    DesktopOutlined,
    FileOutlined,
    LogoutOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { Children, useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom"


type MenuItem = Required<MenuProps>['items'][number];

// //'getItem' becomes an object
// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

// //'items' is an array built by objects
// const items: MenuItem[] = [
//     getItem('Option 1', '/page1', <PieChartOutlined />),
//     getItem('Option 2', '/page2', <DesktopOutlined />),
//     getItem('User', 'page3', <UserOutlined />, [
//         getItem('Tom', '3'), 
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];


/*------------------More Intuitive Display------------------*/
//When login successful and request data, 'items' match with MenuItem.
const items: MenuItem[] = [
    {
        label: 'Option 1',
        key: '/page1',
        icon: <PieChartOutlined />
    },
    {
        label: 'Option 2',
        key: '/page2',
        icon: <DesktopOutlined />
    },
    {
        label: 'Option 3',
        key: 'page3',
        icon: <UserOutlined />,
        children: [
            {
                label: 'Option 3-1',
                key: '/page3/page3_1',
            },
            {
                label: 'Option 3-2',
                key: '/page3/page3_2',
            },
            {
                label: 'Option 3-3',
                key: '/page3/page3_3',
            }
        ]
    },
    {
        label: 'Option 4',
        key: 'page4',
        icon: <TeamOutlined />,
        children: [
            {
                label: 'Option 4-1',
                key: '/page4/page4_1',
            },
            {
                label: 'Option 4-2',
                key: '/page4/page4_2',
            }
        ]
    },
    {
        label: 'Log out',
        key: '/login',
        icon: <LogoutOutlined />
    }
]

const Comp: React.FC = () => {
    const navigateTo = useNavigate()
    const currentRoute = useLocation()

    console.log("---",currentRoute.pathname);

    const menuClick = (e: { key: string }) => {
        console.log("Clicked!!", e.key);

        //jump to corresponding router. Using hook jump to new page
        navigateTo(e.key)
    }

    /*
        - Compared between 'currentRoute.pathname' & 'items -> children -> key'
          if matched, set the previous key
          - Result: menu keeps open when refresh page
        - Set 'key' to the initial value of 'openKeys'
    */

    let firstOpenKey:string = "";
    // Contradistinction
    function findKey(obj:{key:string}){
        return obj.key === currentRoute.pathname
    }

    for(let i=0; i<items.length; i++){
        // items[?]['children'].find(findKey) return boolean
        // ('childiren' is exist?) && ('children is empty or not?') && (find key in 'children')
        if(items[i]!['children'] && items[i]!['children'].length>1 && items[i]!['children'].find(findKey)){
            // '!' : items[i]! means 'items' must be not empty
            firstOpenKey = items[i]!.key as string;
            break;
        }
    }

    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const handleOpenChange = (keys: string[]) => {
        //array 'keys' save the value of 'items' and tell which meau button is open
        console.log(keys);
        //change the array to the last menu option (only need the just-clicked option open)
        setOpenKeys([keys[keys.length - 1]])
    }
    return (
        <Menu
            theme="dark"
            //current selected style
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            //data of menu
            items={items}
            onClick={menuClick}
            //open and close for menu option
            onOpenChange={handleOpenChange}
            //key array of current menu option
            openKeys={openKeys}
        />
    )
}

export default Comp;