import { useState } from 'react'
import { Link, HeadLink } from '../components/Link.jsx';
import Section from '../components/Section.jsx';

function Docs() {
    const baseURL = window.location.origin + window.location.pathname;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='text-zinc-100 bg-zinc-950 min-h-screen'>
            <button
                className={`fixed md:hidden bottom-8 right-8 p-2.5 bg-zinc-800 text-emerald-400 hover:bg-emerald-400 hover:text-zinc-900
            border border-zinc-600  transition-all rounded-lg shadow-lg ${menuOpen ? 'rotate-90' : ''}`
                }
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                </svg>

            </button>

            <nav className={`fixed left-0 top-12 h-full py-8 ps-4 md:ps-8 xl:ps-12 overflow-hidden transition-all 
        bg-zinc-950/60 backdrop-blur-lg ${menuOpen ? "w-64" : "w-0 md:w-64"}`}
            >
                <ul className="space-y-8 w-64 text-xl">
                    <li>
                        <HeadLink href={"#intro"}>Introduction</HeadLink>
                        <ul className='space-y-2 mt-2'>
                            <li><Link href={"#rest"}>REST</Link></li>
                        </ul>
                    </li>
                    <li>
                        <HeadLink href={"#upu"}>UPU Endpoint</HeadLink>
                        <ul className='space-y-2 mt-2'>
                            <li><Link href={"#upu-get-all"}>Get all UPU units</Link></li>
                            <li><Link href={"#upu-get"}>Get single UPU unit</Link></li>
                            <li><Link href={"#upu-filter"}>Filter UPU units</Link></li>
                        </ul>
                    </li>
                    <li>
                        <HeadLink href={"#upu"}>USP Endpoint</HeadLink>
                        <ul className='space-y-2 mt-2'>
                            <li><Link href={"#upu-get-all"}>Get all USP units</Link></li>
                            <li><Link href={"#upu-get"}>Get single USP unit</Link></li>
                            <li><Link href={"#upu-filter"}>Filter USP units</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <main className='md:ml-48 lg:ml-60 xl:ml-80 px-4 pt-20 pb-12 md:px-16 md:pt-28 space-y-8 text-xl max-w-6xl'>
                <h1 className='font-bold text-3xl'>Documentation</h1>
                <Section id={"intro"} title="Introduction">
                    <p>
                        The <strong>Plast API</strong> provides access to information about the Plast organization
                        specifically about its organizational units (<em>kurinʹ</em>).
                        This documentation will guide you through the available endpoints and how to use them effectively.
                    </p>
                </Section>

                <Section id={"rest"} title="REST">
                    <p>
                        Base URL: <Highlighted>{baseURL}</Highlighted>
                    </p>
                    <p>The Plast API is built using REST principles, making it easy to integrate with various applications and services.</p>
                    <p>
                        You can access two main resources:
                        <ul className='list-disc list-inside space-y-2 mt-2'>
                            <li><Highlighted>UPU</Highlighted> — Youth Scout Units</li>
                            <li><Highlighted>USP</Highlighted> — Adult Scout Units</li>
                        </ul>
                    </p>
                    <p>
                        Each resource supports various query parameters to filter, sort, and limit the data returned.
                    </p>
                </Section>
                <Section id="pagination" title="Limits and pagination">
                    The API will automatically paginate the responses. By default, each response will contain up to <Highlighted>10</Highlighted> items.
                    You can adjust the number of items returned per page by using the <Highlighted>limit</Highlighted> query parameter.
                    For example, to retrieve <Highlighted>20</Highlighted> items per page, you can use: <Highlighted>?limit=20</Highlighted>
                    To navigate through pages, use the <Highlighted>page</Highlighted> query parameter. For example, to access the second page of results, you can use: <Highlighted>?page=2</Highlighted>
                    <RequestExample method={"GET"} url={baseURL + "?limit=20&page=2"}>
                        {`[
{
  "id": 11,
  "name": "ім. Іван Сірко",
  "location": "Львів",
  ...
},
{
  "id": 12,
  "name": "ім. Маруся Чурай",
  "location": "Львів",
  ...
},

...

{
  "id": 20,
  "name": "ім. Олена Теліга",
  "location": "Рівне",
  ...
}
]`}
                    </RequestExample>
                </Section>

                <Section id="upu" title="UPU Endpoint">
                    <p>
                        There are currently <Highlighted>139</Highlighted> Youth Scout Units in the database.
                    </p>
                </Section>

                <Section id="upu-get-all" title="Get all UPU units">
                    <p>You can access the list of all UPU units by using the <Highlighted>/upu</Highlighted> endpoint.</p>
                    <RequestExample method={"GET"} url={baseURL + "upu"}>
                        {`[
{
  "id": "59",
  "name": "ім. Степана Ленкавського",
  "location": "Івано-Франківськ",
  ...
},
{
  "id": "70",
  "name": "ім. Ольги Кобилянської",
  "location": "Івано-Франківськ",
  ...
},
  //other...
]`}
                    </RequestExample>
                </Section>

                <Section id="upu-get" title="Get single UPU unit">
                    <p>You can get a single UPU unit by adding the <Highlighted>id</Highlighted> as a parameter: <Highlighted>/upu/1</Highlighted></p>
                    <RequestExample method={"GET"} url={baseURL + "/upu/1"}>
                        {`{
  "id": "1",
  "name": "ім. Степана Ленкавського",
  "location": "Івано-Франківськ",
  ...
}`}
                    </RequestExample>
                </Section>

                <Section id="upu-filter" title="Filter UPU units">
                    <p>
                        You can also include filters in the URL by including additional query parameters.
                        To start filtering add a <Highlighted>?</Highlighted> followed by the query <Highlighted>{`<query>=<value>`}</Highlighted>.
                        If you want to chain several queries in the same call, use <Highlighted>&</Highlighted> followed by the query.
                    </p>
                    <p>
                        For example, If you want to check how many female UPU units are there , just add <Highlighted>?gender=female</Highlighted> to the URL.
                    </p>
                    <p>
                        Available parameters:
                        <ul className='list-disc list-inside space-y-2 mt-2'>
                            <li><Highlighted>name</Highlighted>: filter by the given name.</li>
                            <li><Highlighted>location</Highlighted>: filter by the given location.</li>
                            <li><Highlighted>number</Highlighted>: filter by the given unit number.</li>
                            <li><Highlighted>gender</Highlighted>: filter by the given gender (female, male, coed).</li>
                        </ul>
                    </p>
                    <RequestExample method={"GET"} url={baseURL + "/upu/59"}>
                        {`{
  "id": "59",
  "name": "ім. Степана Ленкавського",
  "location": "Івано-Франківськ",
  ...
}`}
                    </RequestExample>
                </Section>

                <Section id="usp" title="USP Endpoint">
                    <p>
                        There are currently <Highlighted>23</Highlighted> Adult Scout Units in the database.
                    </p>
                </Section>

                <Section id="usp-get-all" title="Get all USP units">
                    <p>You can access the list of all USP units by using the <Highlighted>/usp</Highlighted> endpoint.</p>
                    <RequestExample method={"GET"} url={baseURL + "/usp"}>
                        {`[
{
  "id": "47",
  "name": "Передові",
  ...
},
{
  "id": "3",
  "name": "Лісові Чорти",
  ...
},
  //other...
]`}
                    </RequestExample>
                </Section>

                <Section id="usp-get" title="Get single USP unit">
                    <p>You can get a single USP unit by adding the <Highlighted>id</Highlighted> as a parameter: <Highlighted>/usp/1</Highlighted></p>
                    <RequestExample method={"GET"} url={baseURL + "/usp/3"}>
                        {`{
  "id": "3",
  "name": "Лісові Чорти",
  ...
},`}
                    </RequestExample>
                </Section>

                <Section id="usp-filter" title="Filter USP units">
                    <p>
                        Available parameters:
                        <ul className='list-disc list-inside space-y-2 mt-2'>
                            <li><Highlighted>name</Highlighted>: filter by the given name.</li>
                            <li><Highlighted>number</Highlighted>: filter by the given unit number.</li>
                            <li><Highlighted>gender</Highlighted>: filter by the given gender (female, male, coed).</li>
                        </ul>
                    </p>
                    <p>
                        If you want to know how to use queries, check {" "}
                        <a
                            href="#upu-filter"
                            className='underline decoration-2 underline-offset-4 decoration-emerald-400'
                        >
                            here
                        </a>
                    </p>
                </Section>
            </main>
        </div>
    )
}
function RequestExample({ method, url, children }) {
    return (
        <div className="text-zinc-200 bg-zinc-800 border border-zinc-700 rounded-md overflow-hidden my-4">
            <pre className='border-b border-zinc-600 px-4 py-4'>
                <Highlighted>{method}</Highlighted><code>{url}</code>
            </pre>
            <pre className='px-4 py-2'>
                <code>
                    {children}
                </code>
            </pre>
        </div>
    )
}

function Highlighted({ children }) {
    return (
        <span className='bg-zinc-800 text-emerald-400 px-1.5 py-0.5 rounded-md font-mono font-semibold whitespace-nowrap'>
            {children}
        </span>
    )
}

export default Docs