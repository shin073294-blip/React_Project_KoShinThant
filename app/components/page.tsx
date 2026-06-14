'use client'
import Badge from "@/components/badge";
import Button from "@/components/button";
import CoffeeItemCard, { CoffeeItem } from "@/components/card/coffee-item-card";
import TabBar from "@/components/tab-bar";
import { Plus, Delete , LoaderPinwheel} from 'lucide-react'
import { useEffect, useState } from "react";
export default function ComponentPage() {
    const [coffeeItems, setCoffeeItems] = useState<CoffeeItem[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [keyword, setKeyword] = useState<string>("")
    const fetchAllData = async () => {
         const res = await fetch(`http://localhost:3001/menus${keyword ? '?category=' + keyword : '' }`)
         const data = await res.json()
         setCoffeeItems(data)
         setIsLoading(false)
    }

    useEffect(()=> {
        console.log("user effect triggered")
     fetchAllData() 
    },[keyword])

    return (
        <>
            <Button text="something" icon={Plus} />
            <Button text="sdfs" icon={Delete} />
            <Badge text="badge1" />
            <Badge text="badge2" className="bg-amber-950 text-blue-900" />
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value) }/>
            <TabBar/>   

            {
                isLoading ? <div><LoaderPinwheel className="animate-spin"/></div> :
                coffeeItems.map((coffee, i) => <CoffeeItemCard key={i} item={coffee} /> )
            }
        </>
    )
}