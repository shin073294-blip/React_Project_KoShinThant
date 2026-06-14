import { Plus } from "lucide-react";
import Card from ".";
import Badge from "../badge";
import Button from "../button";

type CoffeeCategory = 'BREW' | 'EXPRESSO' | 'BAKEY' | 'SIGNATURE'
type CoffeeStatus = 'POPULAR' | 'SOLDOUT'
export type CoffeeItem = {
    category: CoffeeCategory
    status?: CoffeeStatus,
    price: number,
    title: string,
    description: string
}
type CoffeeItemCardProp = {
    item: CoffeeItem
}

export default function CoffeeItemCard({ item }: CoffeeItemCardProp) {
    const { category, status, title, description, price } = item
    const getCategoryBadgeColor = (category:CoffeeCategory ) => {
        switch (category) {
            case "BREW":
                return 'bg-amber-100 text-amber-800'
            case "EXPRESSO":
                return 'bg-blue-100 text-blue-800'
            case "BAKEY":
                return 'bg-orange-100 text-orange-800'
            case "SIGNATURE":
                return 'bg-purple-100 text-purple-800'
            default:
                break;
        }
    }

    const getStatusBadgeColor = (status: CoffeeStatus ) => {
        switch (status) {
            case "POPULAR":
                return "bg-green-100 text-green-800"
        
            default:
                return 'bg-red-100 text-red-800'
        }
    }
    return (
        <Card className={ `flex flex-col justify-between ${ status == "SOLDOUT" ? 'opacity-60' : ''}` }>
            <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge text={category} className={getCategoryBadgeColor(category)} />
                    {
                        status && <div className="flex items-center gap-1">
                            <Badge text={status} className={getStatusBadgeColor(status)} />
                        </div>
                    }

                </div>
                <h4 className="text-slate-800 font-sans font-semibold text-sm leading-tight mb-1">{title}</h4>
                <p className="text-[11px] text-slate-400 font-sans line-clamp-2 mb-3">{description}</p>
            </div>
            <div className="pt-3 border-t border-slate-50 flex items-center justify-between mt-auto">
                <span className="text-sm font-semibold text-slate-800">${price}</span>
                <Button text="Add To Card" disabled={status == "SOLDOUT"} icon={Plus}/>
            </div>
        </Card>
    )
}