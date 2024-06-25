import React from "react";

const About = () => {
  return (
    <section className="container flex mx-auto p-4">
      <h1>Learn about me!</h1>

      <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">
            👨‍💻 Software Developer Extraordinaire | Bug Squasher | Code Wizard 🧙‍♂️
          </h1>
          <p className="mt-2 text-gray-600">
            Hey there! I'm <span className="font-bold">Momoh Yusuf</span>, the
            digital alchemist transforming caffeine into code, one bug at a
            time. If you’re looking for someone who can debug their way out of a
            labyrinthine codebase, you’ve found your hero. When I'm not busy
            wrestling with code (or my cat for the keyboard), I’m probably
            optimizing the art of procrastination.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-purple-600">
            🛠️ What I Do:
          </h2>
          <ul className="list-disc list-inside mt-2">
            <li className="mt-1">
              <span className="font-bold">Code Whisperer:</span> I speak fluent
              JavaScript, Python, and Sarcasm.
            </li>
            <li className="mt-1">
              <span className="font-bold">Bug Exterminator:</span> No bug is too
              small, too sneaky, or too annoying for me to hunt down.
            </li>
            <li className="mt-1">
              <span className="font-bold">Feature Innovator:</span> If there’s a
              problem, yo, I’ll solve it. Check out the code while my functions
              resolve it.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-purple-600">
            💼 Professional Shenanigans:
          </h2>
          <ul className="list-disc list-inside mt-2">
            <li className="mt-1">
              <span className="font-bold">10+ years</span> of creating digital
              magic and breaking things just to fix them again.
            </li>
            <li className="mt-1">
              Built an app that can order pizza, predict the weather, and walk
              your dog. Okay, maybe not the last one, but I’m working on it.
            </li>
            <li className="mt-1">
              Master of the ancient and mystical arts of Git and Stack Overflow.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-purple-600">
            🎮 Hobbies & Interests:
          </h2>
          <ul className="list-disc list-inside mt-2">
            <li className="mt-1">
              <span className="font-bold">Gaming:</span> Because nothing says
              ‘problem-solving skills’ like navigating through the latest RPG.
            </li>
            <li className="mt-1">
              <span className="font-bold">Memes:</span> Proud curator of the
              world's most extensive collection of coding memes. If you need a
              laugh, I'm your meme dealer.
            </li>
            <li className="mt-1">
              <span className="font-bold">DIY Projects:</span> Once built a
              smart mirror. It was less "Mirror, mirror on the wall" and more
              "404: Mirror not found."
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-purple-600">
            🤔 Fun Facts:
          </h2>
          <ul className="list-disc list-inside mt-2">
            <li className="mt-1">
              I once wrote a program to decide what I should have for lunch. It
              recommended pizza 90
            </li>
            <li className="mt-1">
              My code is so clean, even Marie Kondo would approve.
            </li>
            <li className="mt-1">I have a PhD in Googling errors.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-purple-600">🗣️ Motto:</h2>
          <ul className="list-disc list-inside mt-2">
            <li className="mt-1">Code like it’s your last day on Earth.</li>
            <li className="mt-1">Test like you expect aliens to use it.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
