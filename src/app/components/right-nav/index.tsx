import { BiSearch } from "react-icons/bi";

export default function RightNav() {
    return (
        <section className="flex flex-col w-[30%]">
            <div className="flex flex-row items-center w-full h-8 bg-gray-600 bg-opacity-50 rounded-full p-4">
                <BiSearch className="text-zinc-500" />
                <input className="bg-transparent placeholder-zinc-500" placeholder="Search Twitter"></input>
            </div>
            <div>trends</div>
            <div>people</div>
        </section>
    )
}