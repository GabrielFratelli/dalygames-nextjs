import logoImg from "../../../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";

export function Header() {
  return (
    <header className="w-full h-28 bg-slate-100 text-black px-2">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
        <nav className="flex justify-center items-center gap-4">
          <div>
            <Image
              src={logoImg}
              className="w-full"
              alt="Logo do site DalyGames"
              quality={100}
              priority={true}
            />
          </div>
          <Link href="/">Home</Link>
          <Link href="/profile">Perfil</Link>
        </nav>

        <div className="hidden sm:flex justify-center first-letter:items-center">
          <div>
            <LiaGamepadSolid size={34} color="#475569" />
          </div>
        </div>
      </div>
    </header>
  );
}
