import React from 'react'
import { Layout } from './layout'
import { LogoHead } from './logo-head'
import { Nav } from './nav-desctop'
import { Auth } from './auth'

export const AppHeader = () => {
    return (
        <Layout
            logo={<LogoHead />}
            nav={<Nav/>}
            auth={<Auth />}
        />
    )
}
