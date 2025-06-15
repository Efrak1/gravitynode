import React from 'react'
import { PanelMobile } from './PanelMobile'
import { Panel2xl } from './Panel2xl'

export const PanelMain = () => {
    return (
        <section id='panel'>
            <div className='sm:flex hidden'>
                <Panel2xl />
            </div>
            <div className='flex sm:hidden'>
                <PanelMobile />
            </div>
        </section>
    )
}
