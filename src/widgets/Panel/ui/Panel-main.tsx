import React from 'react'
import { PanelDesctop } from './PanelDesctop'
import { PanelMobile } from './PanelMobile'

export const PanelMain = () => {
    return (
        <section>
            <div className='sm:flex hidden'>
                <PanelDesctop />
            </div>
            <div className='flex sm:hidden'>
                <PanelMobile />
            </div>
        </section>
    )
}
