import Link from "next/link"

export default function Navbar(){
    return (
        <div>
            <header>
                <nav className="flex w-full items-center align-middle bg-sky-950 h-20"> 
                    <div className="flex bg-violet-800 w-20 h-20"><p className="text-pretty text-red-900 rounded-sm text-center justify-center align-middle mt-5">image</p>
                        </div>
                    

                    <div className="flex flex-row gap-6 w-3/4 justify-center items-center align-middle">
                    <div className="bg-red-800 w-32 h-10"><p className="text-center text-slate-200 mt-1.5"><Link href="/">Home</Link></p></div>
                    <div className="bg-green-800 w-32 h-10"><p className="text-center text-white mt-1.5"><Link href="../about">About</Link></p></div>
                    <div className="bg-gray-700 w-32 h-10"><p className="text-center text-white mt-1.5"><Link href="/gallery">Gallery</Link></p></div>
                    <div className="bg-orange-900 w-32 h-10"><p className="text-center text-white mt-1.5"><Link href="/project">Project</Link></p></div>
                    <div className="bg-emerald-500 w-32 h-10"><p className="text-center text-gray-900 mt-1.5"><Link href="/contact">Contact</Link></p></div>
                    </div>
                </nav>
            </header>
        </div>
    )
}