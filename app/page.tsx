'use client'
import Link from "next/link";
import { ImCompass2 } from "react-icons/im";
import { FaRoute } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import Image from "next/image";
import Footer from "./components/footer/Footer";



export default function Home() {

const handleSubmit = async (e: {currentTarget: any; preventDefault: any; }) => {
  e.preventDefault();
  const form = e.currentTarget
  const formData = new FormData(form)
  const email = formData.get('email')
  const username = formData.get('username')
  const password=formData.get('password')
  const data = {
    email: email,
    username: username,
    password: password
  }
  console.log(data)
  const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("votre compte à été créer, vous pouvez maintenant vous connecter")
    } else {
      console.error('Registration failed');
    }
};
  


  return (
    <>
    <main className=" bg-accueil bg-cover bg-center" >
      <div className=" h-[80%] w-full flex flex-col justify-center items-center ">
      <h1 className=" mt-40 text-9xl font-bold text-blue-700 opacity-90"><span className="text-[11rem] text-violet-600">T</span>RAVEL<span className="text-[11rem] text-yellow-500">D</span>IARY</h1>
      <div className="h-[20%] w-full flex justify-center items-center gap-4 border-y border-blue-800  mt-10 bg-white/60 ">
            <div className="w-[20%] flex flex-col items-center gap-2 text-gray-700">
            <p className="text-xl font-bold ">Choisir sa destination</p>
            <ImCompass2 className="text-5xl" />
            </div>
            <div className="w-[20%] flex flex-col items-center gap-2 text-gray-700">
            <p className="text-xl font-bold ">Tracer sa voie</p>
            <FaRoute className="text-5xl" />
            </div>
            <div className="w-[20%] flex flex-col items-center gap-2 text-gray-700">
            <p className="text-xl font-bold">Enregistrer ses données</p>
            <BsFillJournalBookmarkFill className="text-5xl" />
            </div>

          </div>
      </div>
      <div className="h-[20%] w-full flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="w-[70%] h-[80%] px-6 flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-8   ">
          <input type="email" name='email' className="text-white w-[70%] md:w-[20%] h-[30%] p-2 bg-indigo-600 rounded-xl border-2 border-white outine-none " placeholder="entrez votre adresse e-mail"/>
          <input type='text' name='username' className="text-white w-[70%] md:w-[20%] h-[30%] p-2 bg-indigo-600 rounded-xl border-2 border-white outine-none " placeholder="choisissez username"/>
          <input type='password' name='password' className="text-white w-[70%] md:w-[20%] h-[30%] p-2 bg-indigo-600 rounded-xl border-2 border-white outine-none" placeholder="choisissez mot de passe"/>
          <button type='submit' className="p-2 w-[60%] md:w-[20%] h-[30%] bg-blue-700 text-white text-xl rounded-xl ">INSCRIPTION</button>
        </form>
          <Link href='/board'>Board</Link>
      </div>
    </main>
    <div className="h-screen w-full flex flex-col items-center">
      <div className="h-[27%] w-full flex flex-col justify-center items-center">
        <h2 className="text-blue-900 text-5xl w-[60%] font-bold mb-2">Votre voyage, votre itinéraire...</h2> 
        <p className="ml-4 w-[60%] text-blue-600 text-2xl font-bold">Le compagnon de voyage ultime - organiser, découvrir et vivre des expériences inoubliables</p>
        <p className="ml-4 w-[60%] text-blue-600 font-bold text-2xl mb-4">Une planification sans souci à portée de main - C'est gratuit, inscrivez-vous, l'aventure comme ici.</p>
        <p className="bg-[#fa9746] h-10 p-2 rounded-xl text-white mr-[820px] cursor-pointer hover:bg-violet-500 ">Laissez un commentaire dans le livre D'or</p>
      </div>   
      <div className="h-[72%] w-[60%] flex justify-center items-center ">
        <div className="relative flex flex-col h-full w-[35%] gap-4 items-center">
          <div className=" absolute h-[30%] w-[350px] rounded-xl mt-10">
           <Image src="/destination.jpeg" alt="destination" fill object-fit="cover" className=" rounded-xl"/>
          </div>
          <div className=" absolute top-72 h-[30%] w-[350px] rounded-xl">
           <Image src="/paysage-nature.jpg" alt="destination" fill object-fit="cover" className=" rounded-xl"/>
          </div>

        </div>
        <div className="h-full w-[65%] bg-voyageur bg-cover bg-center" />

      </div>
    </div>
    <Footer />
    
    </>
  );
}
