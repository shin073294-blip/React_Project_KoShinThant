'use client'
import { items } from '@/components/item/data'

import Item from "@/components/item";
import Button from '@/components/button';
import ProfileCard from '@/components/profile-card';

export default function Items() {
    return (
        <>
            {
                items.map((i) =>
                    <Item
                        key={i.id}
                        item={i}
                    />)
            }
            <Button text='click me'/>
            <ProfileCard/>
        </>
    )
}