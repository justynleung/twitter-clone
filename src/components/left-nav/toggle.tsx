'use client'

import { BsMoon, BsSun } from '&/asset/icons';
import { setIsDark } from '&/redux/features/dark-mode';
import { useAppSelector, useAppDispatch } from '&/redux/hooks';

export default function Toggle() {
    const isDark = useAppSelector((state) => state.darkMode.isDark);
    const dispatch = useAppDispatch()
    return (
        <button onClick={() => dispatch(setIsDark())} className="w-6 rounded-lg py-3">{isDark ? <BsMoon /> : <BsSun />}</button>
    )
}
