import React from 'react'
import { Layout } from './layout'
import { Nav } from './Navigation/nav-desctop'
import { Auth } from './auth'

export const AppHeader = () => {
    return (
        <Layout
            nav={<Nav/>}
            auth={<Auth />}
        />
    )
}
