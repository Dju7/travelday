
import Link from "next/link";
import { ImCompass2 } from "react-icons/im";
import { FaRoute } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

export default function Home() {
  return (
    <main >
      <div className="relative h-full w-full flex">
        <div className="absolute z-10 top-0 flex justify-start items-center w-full h-[50%] bg-banniere bg-cover bg-center mask">
          <article className="ml-[10%] w-full lg:w-[50%] h-[70%]  text-white flex flex-col justify-center items-center">
          <h1 className=" text-2xl lg:text-5xl font-bold">PLANNIFEZ VOS VOYAGES</h1>
          <h3 className="text-gray-600 text-xl lg:text-3xl">Tout vos voyages en un seul endroit</h3>
          </article>
          
        </div>
        <div className="h-full w-[80%] flex flex-col justify-end ">
        <article className="w-full h-[50%] flex items-center ">
          <div className=" w-[60%] h-[95%] lg:h-[60%] flex flex-col justify-start ml-[10%]">
            <h3 className="text-xl lg:text-3xl text-gray-600 w-full">INSCRIVEZ-VOUS</h3>
            <div className="h-1 w-full bg-gray-600"></div>
             <form className="w-full h-[40%]  flex flex-col lg:flex-row items-center mt-8 gap-4 lg:gap-10">
               <div className="w-full lg:w-[35%] h-full flex flex-col justify-center items-center">
                  <label>EMAIL</label>
                  <input className="w-full h-12 bg-sky-300  rounded-xl" />
               </div>
               <div className="w-full lg:w-[35%] h-full flex flex-col justify-center items-center">
                 <label>PASSWORD</label>
                 <input className="w-full h-12 bg-sky-300  rounded-xl" />
               </div>  
               <div className="w-[90%] lg:w-[25%] ld:w-[20%] h-full flex flex-col justify-center items-center">     
                 <button className=" w-full h-12 bg-sky-900 text-white rounded-xl text-xl mt-5">Valider</button>
                </div>  
              </form>
            <div><Link href='/board' className="text-xl cursor-pointer m-4 underline">Go to Board</Link></div>
          </div>
        
        </article>
        </div>
        <div className="h-full w-[20%] flex flex-col justify-end items-center md:mr-4 ">
          <div className="h-[60%] xl:h-[90%] w-[50%] flex flex-col justify-around items-center mt-16 ">
            <div className="h-[30%] flex flex-col items-center gap-2 text-cyan-600 mt-8">
            <p className="text-lg xl:text-xl">Choisir sa destination</p>
            <ImCompass2 className="text-6xl xl:text-9xl" />
            </div>
            <div className="h-[30%] flex flex-col items-center gap-2 text-cyan-600">
            <p className="text-lg xl:text-xl">Tracer sa voie</p>
            <FaRoute className="text-6xl xl:text-9xl" />
            </div>
            <div className="h-[30%] flex flex-col items-center gap-2 text-cyan-600">
            <p className="text-lg xl:text-xl">Ecrire son expérience</p>
            <BsFillJournalBookmarkFill className="text-6xl xl:text-9xl" />
            </div>

          </div>
          
        </div>
      </div> 
    </main>
  );
}
