import { Link } from "./Link";

function Header() {
    return (
        <header className='fixed flex items-center w-full h-12 px-4 md:px-8 xl:px-12 border-b border-zinc-800 text-zinc-100 bg-zinc-950'>
            <div className='flex items-center gap-2'>
                <span className='font-semibold text-lg'>Plast API</span>
                <div className=' flex items-center px-1.5 h-min bg-zinc-800 border border-zinc-700 rounded-full'>
                    <span className='text-sm text-zinc-200'>v.1.0</span>
                </div>
            </div>
            <ul className="ml-auto flex text-lg font-semibold gap-4">
                <li><Link href={"/"}>Docs</Link></li>
                <li><Link href={"/about"}>About</Link></li>
            </ul>
        </header>
    )
}

export default Header;