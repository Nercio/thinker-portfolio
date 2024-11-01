"use client";

import { Project } from "@/components/projects/project";
import { projects } from "@/lib/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("about");
  const tFooter = useTranslations("footer");

  return (
    <main className="my-24 mb-28 max-md:px-5">
      <div className="max-w-screen-sm mx-auto space-y-12">
        <section className="flex flex-col space-y-5">
          <h1 className="text-4xl font-bold">Thinker</h1>
          <p className="text-zinc-500 dark:text-zinc-400">{t("title")}</p>
        </section>
        <section className="flex flex-col space-y-5">
          <h2 className="text-xl font-semibold">{t("techStackTitle")}</h2>
          <p className="text-zinc-500 dark:text-zinc-400">{t("techStack")}</p>
        </section>
        <section className="flex flex-col space-y-5">
          <h2 className="text-xl font-semibold">{t("projectsTitle")}</h2>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </section>
        <section className="p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          <div className="flex flex-col space-y-5">
            <h2 className="text-xl font-semibold">{tFooter("link")}</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              {tFooter("members")}{" "}
              <Link
                href="https://github.com/KelvinCelso"
                target="_blank"
                className="dark:text-white text-black"
              >
                Kelvin
              </Link>{" "}
              {tFooter("and")}{" "}
              <Link
                href="https://github.com/Nercio"
                target="_blank"
                className="dark:text-white text-black"
              >
                Nércio
              </Link>
              . {tFooter("star")}{" "}
              <Link
                href="https://github.com/Thinker-Dev"
                target="_blank"
                className="dark:text-white text-black"
              >
                GitHub
              </Link>{" "}
              {tFooter("email")}{" "}
              <Link
                href="mailto:support@thinker.dev"
                target="_blank"
                className="dark:text-white text-black"
              >
                support@thinker.dev
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
