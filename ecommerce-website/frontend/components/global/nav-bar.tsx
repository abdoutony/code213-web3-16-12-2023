"use client"
import Link from "next/link"
import { JSX, SVGProps } from "react"
import NavBarDropdown from "./nav-bar-dropdown"
import SearchDialog from "./search-dialog"

export default function NavBar() {
  
  return (
    <nav className="bg-gray-100 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-800">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <Link className="font-bold" href="/">
              Ecommerce Dz
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link className="font-medium" href="/">
              Home
            </Link>
            <Link className="font-medium" href="/products">
              Products
            </Link>

            <SearchDialog />

            {/* <Link className="font-medium" href="#">
              Services
            </Link>
            <Link className="font-medium" href="#">
              Contact
            </Link> */}
          </div>
          <div className="flex items-center space-x-4">
            {/* <Link
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white shadow-sm hover:shadow transition-colors dark:bg-gray-950 dark:hover:shadow-950"
              href="#"
            >
              <span className="sr-only">Notifications</span>
              <BellIcon className="h-4 w-4" />
            </Link> */}
            {/* <Link
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white shadow-sm hover:shadow transition-colors dark:bg-gray-950 dark:hover:shadow-950"
              href="#"
            >
              <img
                alt="Avatar"
                className="rounded-full"
                height={24}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "24/24",
                  objectFit: "cover",
                }}
                width={24}
              />
              <span className="sr-only">Avatar</span>
            </Link> */}
            <NavBarDropdown />

          </div>
          <div className="md:hidden">
            <button className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white shadow-sm hover:shadow transition-colors dark:bg-gray-950 dark:hover:shadow-950">
              <span className="sr-only">Menu</span>
              <MenuIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
