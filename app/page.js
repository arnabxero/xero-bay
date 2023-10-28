'use client'
import React from 'react'
import { useXeroBayTheme } from '@/contexts/XeroBayThemeContext'


const page = () => {

  const { xeroBayTheme } = useXeroBayTheme();
  const isDark = (xeroBayTheme === "dark");

  return (
    <div className={`${isDark ? 'dark-1' : 'light-1'}`}>Xero Bay</div>
  )
}

export default page