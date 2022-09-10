import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { useEffect } from 'react'
import { NavigationKey } from '../utils/navigation-keys';
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MenuItem (props: any) {
  const navigate = useNavigate();
  const onEnter = () => {
      navigate('/' + props.title.toLowerCase());
  }
  const { ref, focused } = useFocusable({ onEnterPress: onEnter });
  return (<li ref={ref} className={focused ? 'menu-item menu-item-focused' : 'menu-item'}><Link to={'/' + props.title.toLowerCase()}>{props.title}</Link></li>);
}

export default function MenuComponent() {
  const onFocusCard = (event: any) => {
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
