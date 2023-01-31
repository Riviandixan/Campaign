/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/database'
        icon='/media/icons/duotune/finance/fin002.svg'
        title={intl.formatMessage({id: 'Database'})}
        fontIcon='bi-database'
      />
      <SidebarMenuItem
        to='/crafted/pages/profile/campaigns'
        icon='/media/icons/duotune/art/art006.svg'
        title={intl.formatMessage({id: 'Campaign'})}
        fontIcon='bi-campaign'
      />
    </>
  )
}

export {SidebarMenuMain}
