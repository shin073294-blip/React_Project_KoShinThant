import { SquareStar, Coffee, CupSoda, GlassWater, type LucideIcon } from 'lucide-react';
import Button from "../button";

// 1. Blueprint definitions for incoming props
interface TabBarProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

type Tab = {
    text: string,
    icon: LucideIcon
}

// 2. We keep your tutor's original tab array and icons intact
const Tabs: Tab[] = [
    { text: "All", icon: SquareStar },
    { text: "Brew", icon: Coffee },
    { text: "Espresso", icon: Coffee }, // Added Espresso to match our data items array
    { text: "Bakery", icon: CupSoda },
    { text: "Signature", icon: GlassWater },
];

// 3. We accept the shared props inside the function parameters
export default function TabBar({ categories, activeCategory, onSelectCategory }: TabBarProps) {
    return (
        <div
            className="flex bg-slate-200 p-1.5 rounded-2xl border border-slate-200 gap-1 overflow-x-auto whitespace-nowrap scrollbar-none"
        >
            {
                Tabs.map((t, i) => (
                    <Button
                        key={i}
                        icon={t.icon}
                        text={t.text}
                        // Use activeCategory prop to toggle styles dynamically
                        className={activeCategory !== t.text ? 'bg-slate-300' : ''}
                        // Fire the shared onSelectCategory prop when clicked
                        onClick={() => onSelectCategory(t.text)}
                    />
                ))
            }
        </div>
    );
}