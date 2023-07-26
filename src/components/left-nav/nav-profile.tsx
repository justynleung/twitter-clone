import { IoIosMore } from '../../asset/icons';

export default function NavProfile() {
    return (
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
    )
}