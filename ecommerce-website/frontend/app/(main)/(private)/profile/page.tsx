"use client"
import React from 'react'
import {useSession} from 'next-auth/react'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TableCell, TableRow, TableBody, Table } from "@/components/ui/table"

export default function page() {
    const session = useSession()
  return (
    <div>
    


 <div className='p-12'>
 <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Edit your profile information</CardDescription>
        </CardHeader>
        <CardContent className="flex items-start gap-6">
          <div className="flex items-center">
            <Avatar className="w-12 h-12">
              <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
              <div>AD</div>
            </Avatar>
            <Button className="ml-auto" size="icon" variant="ghost">
              <CameraIcon className="w-5 h-5" />
              <span className="sr-only">Change avatar</span>
            </Button>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <div className="font-semibold">{session && session?.data?.user.data?.firstname}</div>
              <Button size="icon" variant="ghost">
                <FileEditIcon className="w-4 h-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{session && session?.data?.user.data?.email}</div>
          </div>
        </CardContent>
      </Card>
      <Card className="border shadow-sm mt-8">
        <CardHeader>
          <CardTitle>Order History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-sm">
                  <Link className="underline" href="#">
                    #3210
                  </Link>
                </TableCell>
                <TableCell className="text-sm">Olivia Martin</TableCell>
                <TableCell className="hidden md:table-cell text-sm">Online Store</TableCell>
                <TableCell className="hidden md:table-cell text-sm">February 20, 2022</TableCell>
                <TableCell className="text-sm text-right">$42.25</TableCell>
                <TableCell className="hidden sm:table-cell text-sm">Shipped</TableCell>
                <TableCell className="text-sm text-right">
                  <Link className="underline" href="#">
                    View order
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">#3209</TableCell>
                <TableCell className="text-sm">Ava Johnson</TableCell>
                <TableCell className="hidden md:table-cell text-sm">Shop</TableCell>
                <TableCell className="hidden md:table-cell text-sm">January 5, 2022</TableCell>
                <TableCell className="text-sm text-right">$74.99</TableCell>
                <TableCell className="hidden sm:table-cell text-sm">Paid</TableCell>
                <TableCell className="text-sm text-right">
                  <Link className="underline" href="#">
                    View order
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">#3204</TableCell>
                <TableCell className="text-sm">Michael Johnson</TableCell>
                <TableCell className="hidden md:table-cell text-sm">Shop</TableCell>
                <TableCell className="hidden md:table-cell text-sm">August 3, 2021</TableCell>
                <TableCell className="text-sm text-right">$64.75</TableCell>
                <TableCell className="hidden sm:table-cell text-sm">Unfulfilled</TableCell>
                <TableCell className="text-sm text-right">
                  <Link className="underline" href="#">
                    View order
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">#3203</TableCell>
                <TableCell className="text-sm">Lisa Anderson</TableCell>
                <TableCell className="hidden md:table-cell text-sm">Online Store</TableCell>
                <TableCell className="hidden md:table-cell text-sm">July 15, 2021</TableCell>
                <TableCell className="text-sm text-right">$34.50</TableCell>
                <TableCell className="hidden sm:table-cell text-sm">Shipped</TableCell>
                <TableCell className="text-sm text-right">
                  <Link className="underline" href="#">
                    View order
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">#3202</TableCell>
                <TableCell className="text-sm">Samantha Green</TableCell>
                <TableCell className="hidden md:table-cell text-sm">Shop</TableCell>
                <TableCell className="hidden md:table-cell text-sm">June 5, 2021</TableCell>
                <TableCell className="text-sm text-right">$89.99</TableCell>
                <TableCell className="hidden sm:table-cell text-sm">Paid</TableCell>
                <TableCell className="text-sm text-right">
                  <Link className="underline" href="#">
                    View order
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">#3201</TableCell>
                <TableCell className="text-sm">Adam Barlow</TableCell>
                <TableCell className="hidden md:table-cell text-sm">Online Store</TableCell>
                <TableCell className="hidden md:table-cell text-sm">May 20, 2021</TableCell>
                <TableCell className="text-sm text-right">$24.99</TableCell>
                <TableCell className="hidden sm:table-cell text-sm">Unfulfilled</TableCell>
                <TableCell className="text-sm text-right">
                  <Link className="underline" href="#">
                    View order
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">#3207</TableCell>
                <TableCell className="text-sm">Sophia Anderson</TableCell>
                <TableCell className="hidden md:table-cell text-sm">Shop</TableCell>
                <TableCell className="hidden md:table-cell text-sm">November 2, 2021</TableCell>
                <TableCell className="text-sm text-right">$99.99</TableCell>
                <TableCell className="hidden sm:table-cell text-sm">Paid</TableCell>
                <TableCell className="text-sm text-right">
                  <Link className="underline" href="#">
                    View order
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">#3206</TableCell>
                <TableCell className="text-sm">Daniel Smith</TableCell>
                <TableCell className="hidden md:table-cell text-sm">Online Store</TableCell>
                <TableCell className="hidden md:table-cell text-sm">October 7, 2021</TableCell>
                <TableCell className="text-sm text-right">$67.50</TableCell>
                <TableCell className="hidden sm:table-cell text-sm">Shipped</TableCell>
                <TableCell className="text-sm text-right">
                  <Link className="underline" href="#">
                    View order
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
 </div>

    </div>

  )
}



function CameraIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function FileEditIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}
