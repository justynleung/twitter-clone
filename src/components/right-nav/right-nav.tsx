import { BiSearch, IoIosMore } from '../../asset/icons';

export default function RightNav() {
    return (
        <section className="right-nav-wrapper flex flex-col-reverse justify-end  w-[350px] min-h-[980px] mx-4">

            <div className='sticky top-0'>
                <div className="flex flex-col w-full h-min my-2 p-2.5 bg-[var(--color-bg-2)] rounded-xl">
                    <h3 className="text-xl font-bold">What is Happening</h3>
                    <div className="flex flex-row justify-between py-4">
                        <div className="flex flex-col">
                            <div className="text-zinc-500">trending</div>
                            <div className="text-base font-semibold">tag</div>
                            <div className="text-zinc-500">no. of tweets</div>
                        </div>
                        <IoIosMore className="text-zinc-500" />
                    </div>
                </div>
                <div className="flex flex-col w-full h-min my-2 p-2.5 bg-[var(--color-bg-2)] rounded-xl">
                    <h3 className="text-xl font-bold">Who to follow</h3>
                    <div className="flex flex-row justify-between my-2">
                        <div className="flex flex-row">
                            <div className="bg-white h-10 w-10 rounded-full"></div>
                            <div className="flex-col text-sm mx-2">
                                <div>Name</div>
                                <div>@Handle</div>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                </div>
            </div>

            <div className='sticky top-0 bg-[--color-bg]' >
                <div className="flex flex-row items-center my-2">
                    <div className="absolute pl-8 text-lg text-zinc-500 z-10" ><BiSearch /></div>
                    <input className="w-full h-8 px-16 py-6 placeholder-zinc-500 bg-[--color-bg-2] bg-opacity-30 rounded-full border border-transparent focus-visible:outline-none focus:border focus:border-[--color-iconic]" placeholder="Search Twitter"></input>
                </div>
            </div >

        </section >
    )
}