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
        <section className="h-full w-[67%] mx-4 border-[--color-border] border-l border-r">
            <Link href="/home" className="block h-16 text-xl font-bold p-3.5">Home</Link>
            <Link href="/home" className="flex flex-row items-end justify-around h-12 text-[0.915rem] font-bold border-[--color-border] border-b">
                <div>
                    <span className="px-0.5">For you</span>
                    <div className="h-1 w-full bg-[--color-iconic] mt-1.5 rounded-full"></div>
                </div>
                <div>
                    <span className="px-0.5">Following</span>
                    <div className="h-1 w-full bg-[--color-iconic] mt-1.5 rounded-full"></div>
                </div>
            </Link>
            <div className='flex flex-row h-32 py-2.5 border-[--color-border] border-b'>
                <div className='w-[10%] h-full'><div className="bg-white h-10 w-10 rounded-full mx-2"></div></div>
                <div className='flex flex-col w-[90%] h-full mr-4'>
                    <div className='flex-grow text-xl'><input className="bg-transparent h-10 placeholder-zinc-500 focus:outline-none" placeholder="What's happening?!"></input></div>
                    <div className='flex justify-between grow-0'>
                        <div className='flex flex-row'>
                            {tweetFunction.map((item, index) => (
                                <item.icon key={index} className='text-xl mr-4 self-center text-primary' />
                            ))}
                        </div>
                        <button className='text-sm font-bold w-20 bg-[--color-iconic] px-2 py-2 rounded-full'>Tweet</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row mt-2'>
                <div className='w-[10%] h-full'>
                    <div className="bg-white h-10 w-10 rounded-full mx-2"></div>
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam a quis eligendi minus nihil reiciendis inventore ducimus quasi sapiente repudiandae, animi voluptas, distinctio dolorum! Ipsum commodi qui voluptates. Delectus, dicta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut reiciendis quis dignissimos ut nam delectus eius quibusdam dolorem ducimus numquam esse et accusantium perferendis vitae aspernatur, eum qui explicabo, iusto repellat blanditiis debitis nisi culpa quae ullam! Ipsam, nostrum nemo maxime facere laudantium vero animi ducimus omnis. Quae velit eius veritatis, enim sed ad necessitatibus! Magni illum sequi recusandae. Voluptas eveniet nobis consequuntur ex nemo officiis iste aliquam nesciunt, corrupti, possimus maiores eaque recusandae repellendus est tempora quas animi quod maxime consequatur sint sunt? Optio, fugiat nisi deserunt temporibus natus fuga omnis, asperiores at quas hic quia necessitatibus expedita dolorem! Fugiat cupiditate rerum voluptatibus perferendis iusto vel, accusamus atque eveniet aspernatur aliquid in itaque, eius laboriosam harum voluptatum ipsum consectetur similique repellat sint inventore. Eveniet nesciunt repellendus minima omnis possimus reprehenderit tenetur ducimus voluptate magnam! Asperiores, ut excepturi eos, eius voluptatem ducimus at inventore incidunt ipsa deserunt nihil libero nemo, ratione facilis nulla laudantium. Dolore tenetur quasi placeat labore nam nisi, quos exercitationem earum id fuga nulla cupiditate esse? Nemo repellat, voluptate totam asperiores distinctio necessitatibus possimus nisi rerum aperiam excepturi sapiente minima qui, dolorum nulla omnis molestias. Reprehenderit nam in perferendis quae! Atque aut ullam quos fugit consequatur suscipit natus facere, iure dignissimos placeat accusamus laborum, doloribus vero quibusdam a odio recusandae? Magni vitae a quis reprehenderit dicta quia, tenetur eos quae perferendis alias similique incidunt expedita veniam ad. Sunt libero tempore sint, architecto dolores iure! Maiores incidunt quae vel velit ullam sed nesciunt sint magni expedita earum mollitia error ipsa aliquam eum, tempore eaque at vero aliquid rem, delectus cumque hic dolores. Alias quia necessitatibus quo quaerat quibusdam praesentium. Nesciunt, ipsum sint consectetur vel suscipit aut placeat ratione ducimus repudiandae debitis expedita voluptates? Dolor esse nisi ipsum aliquid, placeat inventore perspiciatis aut, officia rem dignissimos amet fuga, pariatur nihil eligendi maiores voluptas molestiae eum quod obcaecati doloribus magnam voluptates doloremque dolores? Facilis cum odit, totam amet obcaecati illum saepe! Voluptatum officia quidem sequi culpa ut. Dolore tempora quisquam quo maxime pariatur aliquam accusantium error labore, perspiciatis numquam modi corrupti, odio sit ab, nihil cumque sed quam magni provident dolores praesentium possimus. Explicabo delectus repellendus quia rem. Facere nam sunt earum voluptates, distinctio cumque porro enim veniam placeat provident totam quibusdam officia iste, culpa facilis ratione alias sint fugit qui dolores hic autem aliquid tenetur quaerat. Illum ducimus aliquid illo est quos repellat veritatis expedita molestias qui corrupti voluptatibus praesentium beatae voluptatem laboriosam maiores ipsa eius officiis minima, aperiam suscipit ratione deleniti quisquam. Quia iusto impedit repudiandae atque, quod quam. Possimus, itaque id ducimus repellat saepe delectus laudantium? Dolore, ipsam. Rerum delectus quia nostrum voluptates omnis molestiae autem temporibus voluptatibus facilis consequatur repellendus quis pariatur, obcaecati officiis, praesentium dicta ipsam fuga minus perferendis, ex consequuntur itaque. Veniam tempore commodi ea voluptatem consequatur, odio dolorem! Accusamus itaque mollitia ratione quidem veritatis voluptatem atque ipsa, ab eius. Dolor commodi similique, sapiente doloribus mollitia distinctio laudantium, ad cupiditate in assumenda neque facere delectus officiis architecto adipisci. Similique odit maxime provident incidunt a non expedita molestiae consequuntur beatae vel! Consequuntur quibusdam totam ipsam deserunt error delectus nam, voluptas placeat dolores. Nobis fuga beatae atque debitis voluptas sint, ab nulla placeat consectetur similique culpa ex laborum hic sit deserunt nemo doloribus quaerat distinctio sequi labore nihil quibusdam commodi. Deleniti sed illum vel nesciunt quibusdam consectetur ea veritatis, corporis voluptatibus consequatur tempora ipsum, animi impedit, reprehenderit distinctio itaque quam accusantium deserunt laborum. Nisi, officia natus quas amet vero error illum! Optio tenetur dolorem nisi vel impedit debitis unde odit? Nisi sit assumenda quia vitae ducimus reiciendis exercitationem nemo rem iusto neque quidem adipisci, est dignissimos cum pariatur amet sed eius dolorem nostrum similique veritatis, voluptas voluptates animi! Cum quaerat animi laboriosam delectus sint quo esse dicta tempore placeat repellendus quia consectetur illo fugit impedit eligendi veniam quae possimus porro, iusto suscipit. Fugit consequatur, provident at a esse aperiam, hic ut cupiditate dolorum delectus sunt amet dolorem architecto sequi, quidem modi eligendi? Repellendus veritatis nostrum consequuntur unde dolorum voluptas sint laborum voluptate reiciendis corporis, repellat rem. Itaque, voluptatum? Optio voluptates fugit expedita fugiat temporibus rerum natus, commodi officiis reprehenderit at! Consequuntur, dolor quas! Culpa vel inventore, dolor consequatur deleniti dicta labore consectetur dolorem eaque harum itaque commodi accusamus voluptatum, natus nisi, tempora ab sint sit porro possimus fuga aspernatur nemo fugiat earum. Eaque est sapiente in soluta fugit nam similique nemo, doloremque eum, deserunt corporis. Ratione repellendus, molestias pariatur cupiditate repellat omnis mollitia facilis tempore minima doloribus accusamus, cumque quis facere eaque deleniti rem quam quaerat voluptates eius provident nostrum commodi ipsa! In veniam ex, recusandae tempore nostrum doloremque natus assumenda magnam qui dolorem aliquid dolorum aspernatur, excepturi quis eum voluptate vitae tempora quisquam autem consectetur? Cum ut quod nulla soluta velit qui sit itaque consequuntur ea, sint voluptatibus natus cupiditate, error quibusdam provident illum magni dolor, sunt tenetur non voluptate laudantium expedita culpa quisquam. In expedita consectetur ipsam fuga. Consequatur architecto facere officiis quaerat laborum. Harum, expedita officiis. Nulla maxime, dolore cupiditate animi repellendus labore suscipit velit tempore laudantium, doloremque, consequuntur cumque maiores nam? Eum facere iure cupiditate repellendus incidunt, fugit nisi, optio aliquam adipisci omnis, asperiores laboriosam veritatis saepe voluptas dignissimos nobis reiciendis neque reprehenderit rem recusandae. At perferendis iusto quisquam voluptatem, minus nihil obcaecati dolorem! Earum doloremque similique dolor, enim, reiciendis tempore expedita placeat tenetur neque aliquid voluptatem harum eos, nisi minima repellat esse provident. Quidem magnam error deleniti voluptatum porro aspernatur facere nisi culpa asperiores tenetur voluptatem quisquam quod est qui laboriosam illo ab, enim inventore aperiam cupiditate in officiis eos veritatis dolor! Sunt vitae ut porro est earum labore, doloremque optio quaerat eius, ducimus distinctio iste praesentium totam esse aspernatur facere voluptatibus aliquam? Odio dolor in, sunt ex alias molestiae quo eaque! Veritatis ipsum quasi quidem similique dolor voluptate minima, vel quas voluptatum quo praesentium illum ab. Nulla sunt totam quidem id unde modi quaerat recusandae eius, beatae amet iste voluptate nesciunt voluptatem, perspiciatis earum rem cupiditate, delectus doloribus eveniet vitae facilis nemo praesentium inventore illo. Ea consequatur sequi possimus magnam?
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