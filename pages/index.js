import Nav from '../components/Nav'
import Footer from '../components/Footer'
import About from '../components/About'
import Newscards from '../components/Newscards'

export default function Home() {
  return (
    <div>
      <br/>
      <br/>
      
      <div className="mt-10 text-center text-black">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold lg:pr-80">Hi, my name is</h1>
          <h1 className="text-6xl md:text-9xl font-bold ">Bruno <span className="underline text-salmon decoration-salmon">Bold</span></h1>
        </div>
      </div>

      <div className="flex flex-row mt-10">
        <div className="basis-1/5"/>
        <div className="max-w-7xl lg:basis-2/5 2xl:basis-2/5">
          <h2 className="text-black md:text-xl font-medium text-center lg:text-justify">I am a <span className="text-salmon underline">student</span> in full time education based in London, who is soon planning on entering the vast world of software. The technologies I am currently learning are <span className="text-salmon underline">Node, React & TailwindCSS</span>.</h2>
          <button className="relative px-6 py-2 group mt-12">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">hi@brunobold.com</span>
          </button>
        </div>
        <div className="basis-1/5"/>
      </div>

      <div className="mt-20">
        <About/>
        <Newscards/>   
      </div>
    </div>
    
  )
}
