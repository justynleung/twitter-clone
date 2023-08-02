import { useAppSelector, useAppDispatch } from "&/redux/hooks";
import { useEffect, useLayoutEffect, useMemo } from "react";
import { setIsDark } from "&/redux/features/dark-mode";

export const checkSysDefault = () => {
    const dispatch = useAppDispatch()
    useLayoutEffect(() => {
        let systemDefaultPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        // If user prefer light, change app default from to isDark = false
        if (systemDefaultPreferDark === false) {
            dispatch(setIsDark())
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => dispatch(setIsDark()));
    }, [])
}



