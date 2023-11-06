'use client'
import React from 'react'
import { useTheme } from '@/contexts/ThemeContext';
import SideBar from '@/components/Navigation/SideBar';
import TopBar from '@/components/Navigation/TopBar';
import ThemeSelector from '@/components/Theme/ThemeSelector';

const page = () => {

  const { themeName, setThemeName } = useTheme();

  return (
    <div data-theme={themeName}>
      <TopBar themeName={themeName} />
      {/* <ThemeSelector /> */}
    </div>
  )
}

export default page