"use client";

import Link from "next/link";
import { GraduationCapIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-white flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">

      {/* 🌟 Animated Background Blur */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-300 opacity-30 rounded-full filter blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-200 opacity-40 rounded-full filter blur-3xl animate-ping z-0" />

      {/* Title Section */}
      <div className="z-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-md tracking-tight">
          Suray.mn
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-md">
          ЭЕШ Монгол хэлний тестүүдийг эндээс!
        </p>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-80 h-80 rounded-3xl border-4 border-blue-300 bg-white shadow-2xl p-6 flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white cursor-pointer">
        <Link href="/subject/alevel" className="flex flex-col items-center justify-between h-full">
          <GraduationCapIcon className="w-12 h-12 text-blue-600" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="A-Level"
            className="w-24 h-24 object-contain"
          />
          <p className="text-xl font-semibold text-gray-800 mt-4">
            ЭЕШ Монгол хэл <br /> 2023–2025
          </p>
        </Link>
      </div>

      {/* 🫶 Trust section */}
      <div className="z-10 mt-20 text-sm text-gray-500 text-center">
        <p>"Бид одоо цагт хийж ирээдүйг бүтээнэ."</p>
      </div>
    </main>
  );
}
