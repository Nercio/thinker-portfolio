import { Cursor } from "@/components/projects/cursor";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function Project({ title, description, image, link }: Props) {
  return (
    <div className="group">
      <Link href={link} target="_blank">
        <Cursor
          attachToParent
          variants={{
            initial: { height: 0, opacity: 0, scale: 0.3 },
            animate: { height: "auto", opacity: 1, scale: 1 },
            exit: { height: 0, opacity: 0, scale: 0.3 },
          }}
          transition={{
            type: "spring",
            duration: 0.3,
            bounce: 0.1,
          }}
          className="overflow-hidden"
          springConfig={{
            bounce: 0.01,
          }}
        >
          <img src={image} alt={title} className="h-52 w-full" />
        </Cursor>
        <h3>{title}</h3>
        <p className="text-zinc-500 dark:text-zinc-400">{description}</p>
      </Link>
    </div>
  );
}
