'use client'
import { useMediaQuery } from "react-responsive"
import { lg, xl } from "&/asset/deviceSize"
import RightNavContent from "./right-nav"

export default function RightNavWrapper() {
    const isLG = useMediaQuery({ maxWidth: lg })
    return (
        <>
            {!isLG && <RightNavContent />}
        </>
    )
}
