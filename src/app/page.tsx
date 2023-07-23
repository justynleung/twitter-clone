import { BiLogoTwitter, BiHomeCircle, BiSearch, BiBell, BiEnvelope, RiFileListLine, PiBookmarkSimpleBold, BsPeople, BsPerson, LuVerified, CgMoreO, IoIosMore } from '@/asset/icons';
import Link from 'next/link';

export default function App() {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex flex-row min-h-screen w-3/5">
        {/* left nav */}
        <section className="flex flex-col justify-between h-full w-[23%] text-xl font-semibold">
          <div>
            {/* nav menu */}
            {navMenu.map(item => (
              <Link href={`/${item.title.toLowerCase()}`} key={item.title}>
                <div className="flex flex-row justify-start items-center w-min rounded-full my-2 p-2 hover:bg-gray-600 hover:bg-opacity-25">
                  <div className="text-3xl"><item.icon /></div>
                  {item.title !== "twitter" && <div className="mx-4">{item.title}</div>}
                </div>
              </Link>
            ))}
            {/* tweet button */}
            <button className="text-lg w-11/12 bg-primary rounded-full py-3 hover:bg-opacity-80">Tweet</button>
          </div>
          {/* profile */}
          <div className="flex flex-row justify-between w-full mb-6">
            <div className="flex flex-row">
              <div className="bg-white h-10 w-10 rounded-full mx-2"></div>
              <div className="flex-col text-sm">
                <div>Name</div>
                <div>@Handle</div>
              </div>
            </div>
            <button>
              <IoIosMore />
            </button>
          </div >
        </section >
        {/* twitter feed */}
        <main className="h-full w-[50%] mx-4 border-zinc-700 border-l border-r">

        </main>
        <section className="w-[27%]">

        </section>
      </div >
    </div >
  )
}

const navMenu = [
  { title: 'twitter', icon: BiLogoTwitter },
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