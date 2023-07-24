import NavLinks from './nav-links';
import NavProfile from './nav-profile';
export default function LeftNav() {
    return (
        <section className="flex flex-col sticky top-0 justify-between h-screen w-[23%] text-xl font-semibold">
            <NavLinks />
            <NavProfile />
        </section >
    )
}
