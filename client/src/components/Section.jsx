function Section({ id, title, children }) {
    return (
        <section id={id} className='space-y-4 scroll-mt-20'>
            <h2 className='font-bold text-2xl'>
                {title}
            </h2>
            {children}
        </section>
    )
}

export default Section;