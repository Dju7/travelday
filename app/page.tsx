'use client'
import Link from "next/link";
import { ImCompass2 } from "react-icons/im";
import { FaRoute } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";



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
      <div className=" h-[85%] w-full flex flex-col justify-center items-center ">
      <h1 className=" text-9xl font-bold text-sky-400 opacity-90"><span className="text-[11rem] text-violet-600">T</span>RAVEL<span className="text-[11rem] text-yellow-500">D</span>IARY</h1>
      <h2 className="text-4xl font-bold text-gray-800 ml-[450px]">Plannifiez vos voyages</h2>
      </div>
      <div className="h-[15%] w-full flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-[70%] h-[40%] flex justify-center gap-8 ">
          <input type="email" name='email' className="w-[30%] h-full p-2 rounded-xl border-2 border-sky-400 outine-none " placeholder="entrez votre adresse e-mail"/>
          <input type='text' name='username' className="w-[30%] h-full p-2 rounded-xl border-2 border-purple-400 outine-none " placeholder="entrez votre username"/>
          <input type='password' name='password' className="w-[30%] h-full p-2 rounded-xl border-2 border-red-500 outline-none" placeholder="entrez un mot de passe"/>
          <button type='submit' className="p-2 w-[20%] bg-blue-500 text-white text-xl rounded-xl ">INSCRIPTION</button>
        </form>
          <Link href='/board'>Board</Link>
      </div>
    </main>
    <div className="h-screen w-full">
    <div className="h-[30%] w-full flex justify-around items-center ">
            <div className="w-[30%] flex flex-col items-center gap-2 text-cyan-600 mt-8">
            <p className="text-lg xl:text-xl">Choisir sa destination</p>
            <ImCompass2 className="text-6xl xl:text-9xl" />
            </div>
            <div className="w-[30%] flex flex-col items-center gap-2 text-cyan-600">
            <p className="text-lg xl:text-xl">Tracer sa voie</p>
            <FaRoute className="text-6xl xl:text-9xl" />
            </div>
            <div className="w-[30%] flex flex-col items-center gap-2 text-cyan-600">
            <p className="text-lg xl:text-xl">Ecrire son expérience</p>
            <BsFillJournalBookmarkFill className="text-6xl xl:text-9xl" />
            </div>

          </div>

    </div>
    </>
  );
}
