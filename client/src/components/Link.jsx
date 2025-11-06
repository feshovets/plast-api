function HeadLink({ href, children }) {
    return (
        <Link href={href}>
            <span className='font-bold text-2xl'>
                {children}
            </span>
        </Link>
    )
}

function Link({ href, children }) {
    return (
        <a href={href} className='hover:text-emerald-400 transition-colors'>
            {children}
        </a>
    )
}

function TextLink({ href, children }) {
    return (
        <a href={href} className='underline decoration-emerald-400 underline-offset-4 hover:text-emerald-400 transition-colors'>
            {children}
        </a>
    )
}

export { HeadLink, Link, TextLink};