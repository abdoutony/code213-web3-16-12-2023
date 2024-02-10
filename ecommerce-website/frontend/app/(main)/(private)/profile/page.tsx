"use client"
import React from 'react'
import {useSession} from 'next-auth/react'
export default function page() {
    const session = useSession()
  return (
    <div>
        <h1 className="text-3xl font-bold">
       Welcome
       {/* @ts-ignore */}
       {session && session?.data?.user.data.firstname}
    </h1>
    </div>
  )
}
