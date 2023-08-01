'use client'
import { useAppSelector } from "&/redux/hooks";

export function ThemeProviders({ children }: { children: React.ReactNode }) {
    const isDark = useAppSelector((state) => state.darkMode.isDark)
    return (
        <div className={`${isDark ? 'dark' : 'light'}`}>
            {children}
        </div>
    )
}