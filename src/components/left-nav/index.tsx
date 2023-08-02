import NavLink from './nav-links';
import NavProfile from './nav-profile';
export default function LeftNav() {
    return (
        <header className="flex flex-col sticky top-0 justify-between h-screen max-w-[19%] items-end text-xl font-semibold ml-6 mr-1">
            <NavLink />
            <NavProfile />
        </header >
    )
}
