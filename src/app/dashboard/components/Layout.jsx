import React, {useContext} from 'react';
import {useRouter} from "next/router";
import {getModuleInfo} from 'fogg-utils'

//Components
import Header from '@layouts/dashboard/Header'
import Sidebar from '@layouts/dashboard/Sidebar'
import Content from '@layouts/dashboard/Content'
import Title from "@ui/Title";

// Modules
import Home from './modules/Home'
import Blog from './modules/Blog'
import Comments from './modules/Comments'
import Users from './modules/Users'

// Configuration
import cofig from '@config'
//Contexto
import {UserContext} from "@contexts/user";
//Styles
import styles from './Layout.scss'
import {useContext} from "react";

const Layout = () => {
  const router = useRouter();
  const {user} = useContext(UserContext);
  const {module, action} = getModuleInfo(router);
  const moduleProps = {
    action,
    user
  };
  if (!user) {
    return null
  }

  return (
    <>
      <Title content="Dashboard"/>
      <main className={styles.layout}>
        <Header/>
        <div className={styles.wrapper}>
          <Sidebar module={module}/>
          <Content>
            {module === 'home' && <Home {...moduleProps}/>}
            {module === 'blog' && <Blog {...moduleProps}/>}
            {module === 'comments' && <Comments {...moduleProps}/>}
            {module === 'users' && <Users {...moduleProps}/>}
          </Content>
        </div>
      </main>
    </>
  )
}
export default Layout;
