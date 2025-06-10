import React from 'react'
import { Layout } from './ui/layout'
import { LogoHead } from './ui/logo-head'
import { Nav } from './ui/nav-desctop'
import { Auth } from './ui/auth'

export const AppHeader = () => {
    return (
        <Layout
            logo={<LogoHead />}
            nav={<Nav/>}
            auth={<Auth />}
        />
    )
}
