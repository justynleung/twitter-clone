import NavLinks from './nav-links';
import NavProfile from './nav-profile';
export default function LeftNav() {
    return (
        <header className="flex flex-col sticky top-0 justify-between h-screen w-[23%] items-end text-xl font-semibold mx-4">
            <NavLinks />
            <NavProfile />
        </header >
    )
}
