'use client'
import { useAppSelector } from "&/redux/hooks";
import { checkSysDefault } from "&/hooks/darkModeSysPref";

export default function ThemeProviders({ children }: { children: React.ReactNode }) {
    checkSysDefault()
    const isDark = useAppSelector((state) => state.darkMode.isDark)
    return (
        <div className={`${isDark ? 'dark' : 'light'}`}>
            {children}
        </div>
    )
}

