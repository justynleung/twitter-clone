import Link from 'next/link';
import Toggle from './toggle';
import { BiLogoTwitter, BiHomeCircle, BiSearch, BiBell, BiEnvelope, RiFileListLine, PiBookmarkSimpleBold, BsPeople, BsPerson, LuVerified, CgMoreO, PiFeather } from '&/asset/icons'

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

const buttonClass = `text-lg bg-[--color-iconic] text-white rounded-full hover:bg-opacity-80
    text-lg bg-[--color-iconic] text-white rounded-full hover:bg-opacity-80`

export default function LeftNav() {
    return (
        <div className="flex flex-col w-full">
            {navMenu.map(item => (
                <Link href={`/${item.title.toLowerCase()}`} key={item.title}>
                    <div className="flex flex-row justify-start items-center w-fit rounded-full my-2 p-2 hover:bg-gray-600 hover:bg-opacity-25">
                        <div className="text-3xl"><item.icon /></div>
                        {item.title !== "icon" && <div className="left-nav-menu-text mx-4">{item.title}</div>}
                    </div>
                </Link>
            ))}

            <button className={`left-nav-tweet-btn w-11/12 py-3 ${buttonClass}`}>Tweet</button>
            <button className={`left-nav-tweet-btn-sm hidden w-min p-4 ml-[-0.2rem] ${buttonClass}`}><PiFeather /></button>
            <div className='ml-3.5'><Toggle /></div>
        </div>
    )
}
