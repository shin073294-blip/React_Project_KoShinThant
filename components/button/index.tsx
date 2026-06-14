import { Plus, type LucideIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
    text: string,
    icon?: LucideIcon,
    disabled?: boolean
    onClick?: () => void,
    className?: string
}
export default function Button({ text, icon: Icon, onClick, disabled, className }: ButtonProps) {

    return (
        <button disabled={disabled} onClick={onClick}
            className={twMerge('px-3 py-1.5 rounded-xl text-xs font-sans font-medium flex items-center gap-1 transition-all bg-amber-600  text-white shadow-sm', disabled ? 'cursor-not-allowed' : 'active:scale-95 hover:bg-amber-700 cursor-pointer', className)}
            > {Icon && <Icon />}
            {text}
        </button>
    )
}