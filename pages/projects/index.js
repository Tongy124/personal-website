import Image from 'next/image';
import Link from 'next/link';

function projectsPage() {
    return(
        <div>
            <div className="flex flex-wrap overflow-hidden">
                <div className="basis-1/6 lg:basis-1/4"/>
                <div className="basis-4/6 lg:basis-2/4">
                    <h1 className="text-center text-clip overflow-hidden font-bold text-xl pt-8 text-salmon">PROJECTS <span className="text-black text-2xl lg:text-4xl"><br/>A handpicked selection of my favourite personal projects that I have worked on.</span></h1>
                </div>
            </div>

            <div className="flex flex-wrap overflow-hidden py-10 px-6 md:py-20 md:px-24">
                <div className="md:w-1/3 overflow-hidden">
                    <h1 className="text-2xl font-extrabold text-clip text-salmon">PERSONAL WEBSITE<br/><span className="text-black text-lg font-semibold">See the full development process of creating my personal website to help brand my name as well as having a central space for displaying my own work.</span></h1>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-salmondark bg-salmon uppercase last:mr-0 mr-1">NextJS</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-salmondark bg-salmon uppercase last:mr-0 mr-1">TailwindCSS</span>
                    <br/>
                    <br/>
                    <Link href="/projects/personal-website">
                        <button type="button" className="py-2.5 px-6 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More</button>
                    </Link>
                </div>
                <div className="md:w-2/3 overflow-hidden">
                <Image alt="content" className="object-cover object-center h-full w-full rounded" src="https://dummyimage.com/1200x500" width={1200} height={500}/>
                </div>
            </div>

            <div className="flex flex-wrap overflow-hidden py-10 px-6 md:py-20 md:px-24">
                <div className="md:w-1/3 overflow-hidden">
                    <h1 className="text-2xl font-extrabold text-clip text-salmon">SPOTIFY GUESSER<br/><span className="text-black text-lg font-semibold">A recent project that I have been working on after being inspired by wordle. Every day users are given one new album cover from their top artists on their spotify account and are given a finite amount of guesses to correctly guess the album name.</span></h1>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-salmondark bg-salmon uppercase last:mr-0 mr-1">NextJS</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-salmondark bg-salmon uppercase last:mr-0 mr-1">NextAuth</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-salmondark bg-salmon uppercase last:mr-0 mr-1">TailwindCSS</span>
                    <br/>
                    <br/>
                    <Link href="/projects/spotify-guesser">
                        <button type="button" className="py-2.5 px-6 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More</button>
                    </Link>
                </div>
                <div className="md:w-2/3 overflow-hidden">
                <Image alt="content" className="object-cover object-center h-full w-full rounded" src="https://dummyimage.com/1200x500" width={1200} height={500}/>
                </div>
            </div>
        </div>

    )
}

export default projectsPage;