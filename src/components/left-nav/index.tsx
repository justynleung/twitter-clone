import NavLink from './nav-links';
import NavProfile from './nav-profile';

export default function LeftNav() {
    return (
        <header className='left-nav flex flex-col sticky top-0 justify-between h-screen min-width-[88px] items-end text-xl font-semibold ml-2 mr-1'>
            <NavLink />
            <NavProfile />
        </header >
    )
}
