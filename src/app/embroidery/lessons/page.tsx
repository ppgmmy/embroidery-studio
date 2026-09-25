import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { ArtworkFrame } from "@/components/ui/ArtworkFrame";
import { Button } from "@/components/ui/Button";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { embroideryLessons } from "@/data/lessons";

export const metadata: Metadata = {
  title: "刺繡教學｜公仔用針線繡出嚟",
  description:
    "繕物誌刺繡課：圓角十字架、白鴿、彩虹等公仔全部用刺繡針法製作，維持可愛畫風；附步驟、物料與針法提示。",
};

export default function LessonsIndexPage() {
  return (
    <SiteShell>
      <Section className="bg-linen pt-16 md:pt-20">
        <Container>
          <PageHeader
            eyebrow="Tutorials · Stitch Lessons"
            title="刺繡教學"
            description="所有公仔都用刺繡形式製作——畫風一樣得意，但係線同針腳，唔係布貼。由入門緞面針到花草長短針，一步步學。"
          />

          <ArtworkFrame
            src="/products/lessons-hero.png"
            alt="刺繡教學材料與公仔布章"
            ratio="video"
            priority
            sizes="100vw"
            className="mt-12"
          />

          <p className="mt-10 max-w-2xl text-sm leading-7 text-ash">
            每課對應一個圖騰：標明針法（satin／long &amp; short／french
            knot）、物料清單、步驟同小提示。可配「公仔刺繡教學盒」一齊練習。
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {embroideryLessons.map((lesson) => (
              <article key={lesson.id} className="flex flex-col">
                <ArtworkFrame
                  src={lesson.image}
                  alt={lesson.title}
                  href={`/embroidery/lessons/${lesson.id}`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <p className="mt-4 font-latin text-xs tracking-[0.2em] text-gold uppercase">
                  Lesson {String(lesson.lessonNo).padStart(2, "0")} ·{" "}
                  {lesson.stitch}
                </p>
                <h2 className="mt-1 font-display text-xl text-pine">
                  <Link href={`/embroidery/lessons/${lesson.id}`}>
                    {lesson.title}
                  </Link>
                </h2>
                <p className="mt-1 text-xs text-moss">
                  {lesson.stitchZh} · {lesson.level} · 約 {lesson.durationMin}{" "}
                  分鐘
                </p>
                <p className="mt-2 flex-1 text-sm leading-6 text-ash">
                  {lesson.summary}
                </p>
                <Link
                  href={`/embroidery/lessons/${lesson.id}`}
                  className="mt-3 text-sm text-moss underline-offset-4 hover:underline"
                >
                  睇完整教學 →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <Button href="/series/lesson-kit" variant="primary">
              公仔刺繡教學盒
            </Button>
            <Button href="/embroidery" variant="secondary">
              返回刺繡專頁
            </Button>
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
