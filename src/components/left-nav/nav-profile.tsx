import { IoIosMore } from '&/asset/icons';

export default function NavProfile() {
    return (
        <div className="flex flex-row justify-between w-full mb-6">
            <div className="flex flex-row">
                <div className="bg-red-400 h-10 w-10 rounded-full mx-2"></div>
                <div className="left-nav-profile-addon flex-col text-sm">
                    <div>Name</div><div>@Handle</div>
                </div>
            </div>
            <button className='left-nav-profile-addon'><IoIosMore /></button>
        </div >
    )
}