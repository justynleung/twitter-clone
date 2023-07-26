import Link from 'next/link';
import { BiLogoTwitter, BiHomeCircle, BiSearch, BiBell, BiEnvelope, RiFileListLine, PiBookmarkSimpleBold, BsPeople, BsPerson, LuVerified, CgMoreO } from '../../asset/icons';


const navMenu = [
    { title: 'home', icon: BiLogoTwitter },
    { title: 'Home', icon: BiHomeCircle },
    { title: 'Explore', icon: BiSearch },
    { title: 'Notifications', icon: BiBell },
    { title: 'Messages', icon: BiEnvelope },
    { title: 'Lists', icon: RiFileListLine },
    { title: 'Bookmarks', icon: PiBookmarkSimpleBold },
    { title: 'Communities', icon: BsPeople },
    { title: 'Verified', icon: LuVerified },
    { title: 'Profile', icon: BsPerson },
    { title: 'More', icon: CgMoreO }
]
export default function NavLinks() {
    return (
        <div>
            {navMenu.map(item => (
                <Link href={`/${item.title.toLowerCase()}`} key={item.title}>
                    <div className="flex flex-row justify-start items-center w-min rounded-full my-2 p-2 hover:bg-gray-600 hover:bg-opacity-25">
                        <div className="text-3xl"><item.icon /></div>
                        {item.title !== "home" && <div className="mx-4">{item.title}</div>}
                    </div>
                </Link>
            ))}
            <button className="text-lg w-11/12 bg-primary rounded-full py-3 hover:bg-opacity-80">Tweet</button>
        </div>
    )
}