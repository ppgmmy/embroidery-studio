import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import {
  embroideryLessons,
  getLessonById,
  getLessonIds,
} from "@/data/lessons";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return getLessonIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const lesson = getLessonById(id);
  if (!lesson) return { title: "教學" };
  return {
    title: `Lesson ${lesson.lessonNo}｜${lesson.title}`,
    description: lesson.summary,
  };
}

export default async function LessonDetailPage({ params }: Props) {
  const { id } = await params;
  const lesson = getLessonById(id);
  if (!lesson) notFound();

  const idx = embroideryLessons.findIndex((l) => l.id === lesson.id);
  const prev = idx > 0 ? embroideryLessons[idx - 1] : null;
  const next =
    idx < embroideryLessons.length - 1 ? embroideryLessons[idx + 1] : null;

  return (
    <SiteShell>
      <Section className="bg-linen pt-16 md:pt-20">
        <Container className="max-w-3xl">
          <p className="font-latin text-sm tracking-[0.22em] text-gold uppercase">
            Lesson {String(lesson.lessonNo).padStart(2, "0")} · {lesson.stitch}
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-wide text-pine md:text-5xl">
            {lesson.title}
          </h1>
          <p className="mt-2 font-latin text-base italic text-gold">
            {lesson.en}
          </p>
          <p className="mt-4 text-sm text-moss">
            {lesson.stitchZh} · {lesson.level} · 約 {lesson.durationMin} 分鐘
          </p>
          <p className="mt-6 text-base leading-8 text-ash">{lesson.summary}</p>
          <p className="mt-3 text-sm text-moss">{lesson.faith}</p>

          <div className="relative mt-10 aspect-square overflow-hidden bg-[#e7efe9]">
            <Image
              src={lesson.image}
              alt={lesson.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl text-pine">物料</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-ash">
              {lesson.materials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl text-pine">步驟</h2>
            <ol className="mt-4 space-y-4">
              {lesson.steps.map((step, i) => (
                <li key={step} className="flex gap-4 text-sm leading-7 text-ash">
                  <span className="font-display text-xl text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 border border-sage/30 bg-mist/40 p-6">
            <h2 className="font-display text-xl text-pine">小提示</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-ash">
              {lesson.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sm leading-7 text-ash">
            重點：公仔畫風保持圓潤可愛，但製作方式一律係<strong>刺繡</strong>
            （緞面針、梗針、結粒等），唔用布貼充當公仔。
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/series/lesson-kit" variant="primary">
              買教學盒練習
            </Button>
            <Button href="/embroidery/lessons" variant="secondary">
              全部課程
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap justify-between gap-4 border-t border-sage/30 pt-6 text-sm">
            {prev ? (
              <Link
                href={`/embroidery/lessons/${prev.id}`}
                className="text-moss hover:underline"
              >
                ← Lesson {prev.lessonNo} {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/embroidery/lessons/${next.id}`}
                className="text-moss hover:underline"
              >
                Lesson {next.lessonNo} {next.title} →
              </Link>
            ) : null}
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
