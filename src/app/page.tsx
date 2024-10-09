"use client";

import { Project } from "@/components/projects/project";
import { projects } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="my-24 mb-28 max-md:px-5">
      <div className="max-w-screen-sm mx-auto space-y-12">
        <div className="flex flex-col space-y-5">
          <h1 className="text-4xl font-bold">Thinker</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Thinker is a forward-thinking software company dedicated to crafting
            innovative solutions that empower businesses and individuals to
            achieve their goals. Our team of experts is passionate about
            technology and committed to delivering excellence in every project.
          </p>
        </div>
        <div className="flex flex-col space-y-5">
          <h2 className="text-xl font-semibold">Projects</h2>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
        <div className="p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          <div className="flex flex-col space-y-5">
            <h2 className="text-xl font-semibold">Links</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Star our open-source projects on{" "}
              <Link
                href="https://github.com/Thinker-Dev"
                target="_blank"
                className="dark:text-white text-black"
              >
                GitHub
              </Link>{" "}
              or email us at{" "}
              <Link
                href="mailto:hello@thinker.dev"
                target="_blank"
                className="dark:text-white text-black"
              >
                support@thinker.dev
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
