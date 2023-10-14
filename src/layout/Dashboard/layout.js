import Drawer from './Desktop/Drawer'
import BottomNavigation from './Mobile/BottomNavigation'
import useResponsive from '../../hook/useResponsive'

export const Layout =()=>{

    const { isDesktop, isMobile } = useResponsive();
    console.log(isDesktop, isMobile)


    return <>
    {isDesktop && <Drawer/> }
    {isMobile && <BottomNavigation/> }

    
    </>
}