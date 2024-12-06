"use client";
import Link from "next/link";
import { ImCompass2 } from "react-icons/im";
import { FaRoute } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import Image from "next/image";
import Footer from "./components/footer/Footer";

export default function Home() {
  const handleSubmit = async (e: {
    currentTarget: any;
    preventDefault: any;
  }) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const data = {
      email: email,
      username: username,
      password: password,
    };
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("votre compte à été créer, vous pouvez maintenant vous connecter");
    } else {
      console.error("Registration failed");
    }
  };

  return (
    <>
      <main className=" bg-accueil bg-cover bg-center">
        <div className=" h-[70vh] w-full flex flex-col justify-center items-center ">
          <h1 className=" mt-40 text-9xl font-bold text-slate-900 opacity-90">
            <span className="text-[11rem] text-violet-800">T</span>RAVEL
            <span className="text-[11rem] text-yellow-400">D</span>IARY
          </h1>
          <div className="h-[15vh] w-full flex justify-center items-center gap-4 border-y border-blue-800  mt-10 bg-white/60 ">
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
        <div className="h-[25vh] w-full flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="w-[80%] md:w-[70%] h-[350px] px-4 flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-8"
          >
            <input
              type="email"
              name="email"
              className="text-white w-full md:w-[20%] h-[25%] p-2 bg-indigo-900 rounded-xl border-2 border-white outine-none placeholder:font-bold "
              placeholder="entrez votre adresse e-mail"
            />
            <input
              type="text"
              name="username"
              className="text-white w-full md:w-[20%] h-[25%] p-2 bg-indigo-900 rounded-xl border-2 border-white outine-none placeholder:font-bold "
              placeholder="choisissez username"
            />
            <input
              type="password"
              name="password"
              className="text-white w-full md:w-[20%] h-[25%] p-2 bg-indigo-900 rounded-xl border-2 border-white outine-none placeholder:font-bold"
              placeholder="choisissez mot de passe"
            />
            <button
              type="submit"
              className="p-2 w-[60%] md:w-[20%] h-[25%] bg-red-600 text-white text-xl rounded-xl "
            >
              INSCRIPTION
            </button>
          </form>
          <Link href="/board">Board</Link>
        </div>
      </main>

      <div className="h-[120vh] w-full flex flex-col items-center">

        <div className="h-[320px] w-full flex flex-col justify-center items-center">
          <h2 className="text-blue-900 text-4xl 2xl:text-5xl w-[90%] lg:w-[60%] font-bold mb-2">
            Votre voyage, votre itinéraire...
          </h2>
          <p className="ml-4 w-[90%] lg:w-[60%] text-blue-600 text-xl 2xl:text-2xl font-bold">
            Le compagnon de voyage ultime - organiser, découvrir et vivre des
            expériences inoubliables
          </p>
          <p className="ml-4 w-[90%] lg:w-[60%] text-blue-600 font-bold text-xl 2xl:text-2xl text-2xl mb-4">
            Une planification sans souci à portée de main - C'est gratuit,
            inscrivez-vous, l'aventure comme ici.
          </p>
          <p className="bg-red-400 h-10 p-2 rounded-xl text-white cursor-pointer hover:bg-violet-500 ">
            Laissez un com' sur facebook
          </p>
        </div>
        
        <div className="h-[72%] w-[95%] lg:w-[60%] flex justify-center items-center ">
          <div className="hidden lg:block relative flex flex-col h-full w-[35%] gap-4 items-center">
            <div className=" absolute h-[30%] w-[350px] rounded-xl mt-10">
              <Image
                src="/destination.jpeg"
                alt="destination"
                fill
                object-fit="cover"
                className=" rounded-xl"
              />
            </div>
            <div className=" absolute top-72 h-[30%] w-[350px] rounded-xl">
              <Image
                src="/paysage-nature.jpg"
                alt="destination"
                fill
                object-fit="cover"
                className=" rounded-xl"
              />
            </div>
          </div>
          <div className="h-full w-full lg:w-[65%] bg-voyageur bg-cover bg-center" />
        </div>
      </div>
      <Footer />
    </>
  );
}
