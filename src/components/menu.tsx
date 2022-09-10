import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import React, { useEffect } from 'react'
import { NavigationKey } from '../utils/navigation-keys';

function MenuItem (props: any) {
  const { ref, focused } = useFocusable();
  return (<li ref={ref} className={focused ? 'menu-item menu-item-focused' : 'menu-item'}>{props.title}</li>);
}

export default function MenuComponent() {
  const onFocusCard = (event: any) => {
    console.log('window.scrollTo');
    window.scrollTo(0, 0);
   };
  const { ref, focusKey, focusSelf } = useFocusable({onFocus: onFocusCard, focusKey: NavigationKey.MENU});
  useEffect(() => {
    focusSelf();
  }, [focusSelf]);
  return (
    <FocusContext.Provider value={focusKey}>
    <ul ref={ref} className='menu border-bottom'>
        <MenuItem title="Home"></MenuItem>
        <MenuItem title="Sports"></MenuItem>
    </ul>
    </FocusContext.Provider>
    
  )
}
