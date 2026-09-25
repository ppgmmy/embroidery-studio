import Image from "next/image";
import Link from "next/link";

type Ratio = "square" | "wide" | "video";

const ratioClass: Record<Ratio, string> = {
  square: "aspect-square",
  wide: "aspect-[4/3]",
  video: "aspect-[16/9]",
};

export function ArtworkFrame({
  src,
  alt,
  href,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
  ratio = "square",
  className = "",
}: {
  src: string;
  alt: string;
  href?: string;
  priority?: boolean;
  sizes?: string;
  ratio?: Ratio;
  className?: string;
}) {
  const frame = (
    <div
      className={`relative overflow-hidden bg-[#e7efe9] ${ratioClass[ratio]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group block focus-visible:outline-offset-4">
        {frame}
      </Link>
    );
  }

  return <div className="group">{frame}</div>;
}
