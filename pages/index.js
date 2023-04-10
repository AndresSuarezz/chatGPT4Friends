import Chat from "./components/Chat";
export default function Home() {
  return (
    <>
      <head>
        <title>ChatGPT4Friends</title>
      </head>
      <nav className="bg-blue-600 p-4 text-white font-semibold">
        <div className="container mx-auto flex justify-between items-center">
          ChatGPT4Friends
        </div>
      </nav>
      <main className="min-h-screen flex flex-col">
        <Chat />
      </main>
    </>
  );
}
