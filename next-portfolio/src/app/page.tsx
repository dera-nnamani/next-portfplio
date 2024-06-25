export default function Home() {
  return (
    <section className="container mx-auto p-4 flex justify-center items-center flex-col gap-20">
      <div>
        <h1 className="text-6xl font-semibold">Hello 👋 👋</h1>
        <p className="text-xl text-black/70 my-8">Welcome to my portfolio</p>
      </div>
      <img
        src="https://th.bing.com/th/id/OIP.qE8v9Z7NfW6UZ7P1qNqa4AHaFj?rs=1&pid=ImgDetMain"
        alt=""
        className="rounded-lg w-96 h-96 object-cover shadow-lg"
      />
    </section>
  );
}
