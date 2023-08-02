'use client'
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Toggle from './toggle';
import { BiLogoTwitter, BiHomeCircle, BiSearch, BiBell, BiEnvelope, RiFileListLine, PiBookmarkSimpleBold, BsPeople, BsPerson, LuVerified, CgMoreO, PiFeather } from '&/asset/icons'
import { lg, xl } from '&/asset/deviceSize';

const navMenu = [
    { title: 'icon', icon: BiLogoTwitter },
    { title: 'Home', icon: BiHomeCircle },
    { title: 'Explore', icon: BiSearch },
    { title: 'Notifications', icon: BiBell },
    { title: 'Messages', icon: BiEnvelope },
    { title: 'Lists', icon: RiFileListLine },
    { title: 'Bookmarks', icon: PiBookmarkSimpleBold },
    // { title: 'Communities', icon: BsPeople },
    // { title: 'Verified', icon: LuVerified },
    // { title: 'Profile', icon: BsPerson },
    // { title: 'More', icon: CgMoreO }
]

export default function LeftNav() {
    const isXL = useMediaQuery({ maxWidth: xl })
    return (
        <div className="flex flex-col w-full">
            {navMenu.map(item => (
                <Link href={`/${item.title.toLowerCase()}`} key={item.title}>
                    <div className="flex flex-row justify-start items-center w-fit rounded-full my-2 p-2 hover:bg-gray-600 hover:bg-opacity-25">
                        <div className="text-3xl"><item.icon /></div>
                        {item.title !== "icon" && !isXL && <div className="mx-4">{item.title}</div>}
                    </div>
                </Link>
            ))}
            {!isXL
                ? <button className="text-lg w-11/12 bg-[--color-iconic] text-white rounded-full py-3 hover:bg-opacity-80">Tweet</button>
                : <button className="text-lg w-min bg-[--color-iconic] text-white rounded-full py-3 hover:bg-opacity-80"><PiFeather /></button>}
            <Toggle />
        </div>
    )
}
