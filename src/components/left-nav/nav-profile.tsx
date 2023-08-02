'use client'
import { IoIosMore } from '&/asset/icons';
import { useMediaQuery } from 'react-responsive';
import { lg, xl } from '&/asset/deviceSize';

export default function NavProfile() {
    const isXL = useMediaQuery({ maxWidth: xl })
    return (
        <div className="flex flex-row justify-between w-full mb-6">
            <div className="flex flex-row">
                <div className="bg-red-400 h-10 w-10 rounded-full mx-2"></div>
                {!isXL &&
                    <div className="flex-col text-sm"><div>Name</div><div>@Handle</div></div>}
            </div>
            {!isXL && <button><IoIosMore /></button>}
        </div >
    )
}