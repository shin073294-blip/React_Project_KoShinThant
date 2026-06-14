import { twMerge } from "tailwind-merge"

type BadgeProp = {
    className?: string,
    text? : string
}

export default function Badge({ className, text } : BadgeProp) {
    return (
        <span className={ twMerge("text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-800", className) }>
            { text }
        </span>
    )
}