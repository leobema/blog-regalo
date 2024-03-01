'use client'
import { useState } from 'react'

export function LikeButton (params: {id:number}) {
    const [liked, setLiked] = useState(false)
    console.log(params)
    return (

        <button onClick={() => setLiked(!liked)}>
            {liked ? '❤' : '🤍'}
        </button>
    )


}