import { MdOutlineInsertPhoto, MdOutlineGifBox, BsEmojiSmile, MdOutlinePoll, MdOutlineScheduleSend, HiOutlineLocationMarker } from '../../asset/icons';
import { IoIosMore } from '../../asset/icons';
import { BiMessageRounded, AiOutlineRetweet, AiOutlineHeart, BiBookmark } from '../../asset/icons';
import Link from "next/link";

const tweetFunction = [
    { icon: MdOutlineInsertPhoto },
    { icon: MdOutlineGifBox },
    { icon: BsEmojiSmile },
    { icon: MdOutlinePoll },
    { icon: MdOutlineScheduleSend },
    { icon: HiOutlineLocationMarker }
]

const tweetReply = [
    { icon: BiMessageRounded },
    { icon: AiOutlineRetweet },
    { icon: AiOutlineHeart },
    { icon: BiBookmark },
]
export default function TweetFeed() {
    return (
        <section className="h-full w-[67%] min-w-[600px] border-[--color-border] border-l border-r">
            <div className="sticky top-0 bg-[--color-bg] opacity-90">
                <Link href="/home" className="block h-16 w-full text-xl font-bold p-3.5">Home</Link>
                <Link href="/home" className="flex flex-row items-end justify-around h-12 w-full text-[0.915rem] font-bold border-[--color-border] border-b">
                    <div>
                        <span className="px-0.5">For you</span>
                        <div className="h-1 w-full bg-[--color-iconic] mt-1.5 rounded-full"></div>
                    </div>
                    <div>
                        <span className="px-0.5">Following</span>
                        <div className="h-1 w-full bg-[--color-iconic] mt-1.5 rounded-full"></div>
                    </div>
                </Link>
            </div>
            <div className='flex flex-row h-32 py-2.5 border-[--color-border] border-b'>
                <div className='w-[10%] h-full'><div className="bg-red-400 h-10 w-10 rounded-full mx-2"></div></div>
                <div className='flex flex-col w-[90%] h-full mr-4'>
                    <div className='flex-grow text-xl'><input className="bg-transparent h-10 placeholder-zinc-500 focus:outline-none" placeholder="What's happening?!"></input></div>
                    <div className='flex justify-between grow-0'>
                        <div className='flex flex-row'>
                            {tweetFunction.map((item, index) => (
                                <item.icon key={index} className='text-xl mr-4 self-center text-primary' />
                            ))}
                        </div>
                        <button className='text-sm font-bold w-20 bg-[--color-iconic] text-white px-2 py-2 rounded-full'>Tweet</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row mt-2'>
                <div className='w-[10%] h-full'>
                    <div className="bg-red-400 h-10 w-10 rounded-full mx-2"></div>
                </div>
                <div className='flex flex-col w-[90%] mr-3'>
                    <div className="flex flex-row self-end justify-between h-fit w-full text-sm">
                        <div className='flex flex-row'>
                            <div className='text-base font-bold'>Name</div>
                            <div className='px-2 text-zinc-500'>@Handle</div>
                            <div className='px-2 text-zinc-500'>time</div>
                        </div>
                        <button className='text-lg text-zinc-500'>
                            <IoIosMore />
                        </button>
                    </div>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam a quis eligendi minus nihil reiciendis inventore ducimus quasi sapiente repudiandae, animi voluptas, distinctio dolorum! Ipsum commodi qui voluptates. Delectus, dicta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut reiciendis quis dignissimos ut nam delectus eius quibusdam dolorem ducimus numquam esse et accusantium perferendis vitae aspernatur, eum qui explicabo, iusto repellat blanditiis debitis nisi culpa quae ullam! Ipsam, nostrum nemo maxime facere laudantium vero animi ducimus omnis. Quae velit eius veritatis, enim sed ad necessitatibus! Magni illum sequi recusandae. Voluptas eveniet nobis consequuntur ex nemo officiis iste aliquam nesciunt, corrupti, possimus maiores eaque recusandae repellendus est tempora quas animi quod maxime consequatur sint sunt? Optio, fugiat nisi deserunt temporibus natus fuga omnis, asperiores at quas hic quia necessitatibus expedita dolorem! Fugiat cupiditate rerum voluptatibus perferendis iusto vel, accusamus atque eveniet aspernatur aliquid in itaque, eius laboriosam harum voluptatum ipsum consectetur similique repellat sint inventore. Eveniet nesciunt repellendus minima omnis possimus reprehenderit tenetur ducimus voluptate magnam! Asperiores, ut excepturi eos, eius voluptatem ducimus at inventore incidunt ipsa deserunt nihil libero nemo, ratione facilis nulla laudantium. Dolore tenetur quasi placeat labore nam nisi, quos exercitationem earum id fuga nulla cupiditate esse? Nemo repellat, voluptate totam asperiores distinctio necessitatibus possimus nisi rerum aperiam excepturi sapiente minima qui, dolorum nulla omnis molestias. Reprehenderit nam in perferendis quae! Atque aut ullam quos fugit consequatur suscipit natus facere, iure dignissimos placeat accusamus laborum, doloribus vero quibusdam a odio recusandae? Magni vitae a quis reprehenderit dicta quia, tenetur eos quae perferendis alias similique incidunt expedita veniam ad. Sunt libero tempore sint, architecto dolores iure! Maiores incidunt quae vel velit ullam sed nesciunt sint magni expedita earum mollitia error ipsa aliquam eum, tempore eaque at vero aliquid rem, delectus cumque hic dolores. Alias quia necessitatibus quo quaerat quibusdam praesentium. Nesciunt, ipsum sint consectetur vel suscipit aut placeat ratione ducimus repudiandae debitis expedita voluptates? Dolor esse nisi ipsum aliquid, placeat inventore perspiciatis aut, officia rem
                        nventore. Eveniet nesciunt repellendus minima omnis possimus reprehenderit tenetur ducimus voluptate magnam! Asperiores, ut excepturi eos, eius voluptatem ducimus at inventore incidunt ipsa deserunt nihil libero nemo, ratione facilis nulla laudantium. Dolore tenetur quasi placeat labore nam nisi, quos exercitationem earum id fuga nulla cupiditate esse? Nemo repellat, voluptate totam asperiores distinctio necessitatibus possimus nisi rerum aperiam excepturi sapiente minima qui, dolorum nulla omnis molestias. Reprehenderit nam in perferendis quae! Atque aut ullam quos fugit consequatur suscipit natus facere, iure dignissimos placeat accusamus laborum, doloribus vero quibusdam a odio recusandae? Magni vitae a quis reprehenderit dicta quia, tenetur eos quae perferendis alias similique incidunt expedita veniam ad. Sunt libero tempore sint, architecto dolores iure! Maiores incidunt quae vel velit ullam sed nesciunt sint magni expedita earum mollitia error ipsa aliquam eum, tempore eaque at vero aliquid rem, delectus cumque hic dolores. Alias quia necessitatibus quo quaerat quibusdam praesentium. Nesciunt, ipsum sint consectetur vel suscipit aut placeat ratione ducimus repudiandae debitis expedita voluptates? Dolor esse nisi ipsum aliquid, placeat inventore perspiciatis aut, officia rem
                    </div>
                    <div className='flex flex-row content-center justify-between w-3/5'>
                        {tweetReply.map((item, index) => (
                            <div key={index} className='flex flex-row text-lg text-zinc-600 py-2'>
                                <button><item.icon className='flex flex-row h-6' /></button>
                                <small className='flex flex-row h-6 px-2'>no</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}