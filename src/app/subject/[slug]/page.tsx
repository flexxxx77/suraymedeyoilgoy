import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

const data = {
  alevel: {
    title: "ЭЕШ Монгол хэл 2023-2025",
    topics: [
      { code: "P1", img: "https://i.ibb.co/1RMhYLM/mon1.png", link: "https://example.com/pdf1" },
      { code: "P2", img: "https://i.ibb.co/QQt5Z6H/mon2.png", link: "https://example.com/pdf2" },
      { code: "P3", img: "https://i.ibb.co/Nr9RYcj/mon3.png", link: "https://example.com/pdf3" },
      { code: "P4", img: "https://i.ibb.co/xFR3RrJ/mon4.png", link: "https://example.com/pdf4" },
      { code: "P5", img: "https://i.ibb.co/PgJzFWD/p1.png", link: "https://example.com/pdf5" },
      { code: "P6", img: "https://i.ibb.co/Ykq0r3R/p2.png", link: "https://example.com/pdf6" },
      { code: "P7", img: "https://i.ibb.co/MMyRZq8/p3.png", link: "https://example.com/pdf7" },
      { code: "P8", img: "https://i.ibb.co/xMq1DDB/p4.png", link: "https://example.com/pdf8" },
      { code: "P9", img: "https://i.ibb.co/0sBKWkN/p5.png", link: "https://example.com/pdf9" },
      { code: "P10", img: "https://i.ibb.co/6yLkZKg/p6.png", link: "https://example.com/pdf10" },
    ],
  },
};

export default function SubjectPage({ params }: PageProps) {
  const subjectData = data[params.slug as keyof typeof data];
  if (!subjectData) return notFound();

  return (
    <main className="min-h-screen py-16 px-6 bg-gradient-to-r from-[#e0f2fe] to-[#f0f9ff] text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">
        {subjectData.title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
        {subjectData.topics.map(({ code, img, link }) => (
          <div
            key={code}
            className="w-72 h-[400px] bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all p-5 flex flex-col items-center"
          >
            <img
              src={img}
              alt={code}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700">{code}</h2>
            <p className="text-sm text-gray-500 mb-4">{subjectData.title}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              PDF Нээх
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
