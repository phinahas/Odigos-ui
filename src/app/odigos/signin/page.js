"use client"
import useResponsive from '@/hook/useResponsive'

import SigninPage from '@/pages/Signin/SigninPage'
import SigninPageMobile from '@/pages/Signin/SigninPageMobile'
import { useEffect, useState } from 'react'


export default function Page() {
  
  const {isMobile} = useResponsive();
  useEffect(() => {
  }, [])
  
  return (
    <>  {isMobile ? <SigninPageMobile/>:<SigninPage/> }</>
  )
}

