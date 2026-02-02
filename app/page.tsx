"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  const [openBg, setOpenBg] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <main>
      {/* ================= SECTION 1 (HERO) ================= */}
      <section className="min-h-screen flex items-center px-6 bg-[var(--color-secondary)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
          <div className="flex justify-center md:justify-start">
            <div className="bg-[var(--color-muted)] w-full max-w-md h-[480px] rounded-[240px]" />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-[40px] md:text-[64px] leading-[1.15] font-extrabold text-[var(--color-primary)] mb-8">
              Anxiety and Trauma Therapy in Santa Monica, California
            </h1>

            <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-md leading-relaxed">
              Dr. Maya Reynolds, PsyD, provides evidence-based therapy for adults
              navigating anxiety, trauma, burnout, and chronic stress. In-person
              sessions in Santa Monica and secure telehealth throughout
              California.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[var(--color-accent)] text-white px-10 py-4 text-sm tracking-wide rounded-lg hover:bg-[var(--color-accent-hover)] transition-all"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="#approach"
                className="border border-[var(--color-primary)] text-[var(--color-primary)] px-10 py-4 text-sm tracking-wide rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all"
              >
                Learn About My Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 (PHILOSOPHY) ================= */}
      <section id="approach" className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-[var(--color-secondary)] flex flex-col px-8 md:px-24 pt-24 md:pt-32">
          <span className="text-[var(--color-accent)] text-xs tracking-[0.2em] mb-4 font-semibold">
            MY APPROACH
          </span>
          <h2 className="text-[36px] md:text-[48px] mb-10 text-[var(--color-primary)] leading-tight font-extrabold">
            A Grounded, Collaborative Approach to Healing
          </h2>

          <p className="text-[18px] mb-8 max-w-md text-[var(--text-secondary)] leading-relaxed">
            Working with anxiety, trauma, and burnout requires safety, pacing,
            and a relationship built on trust. My approach blends
            evidence-based methods with attention to your nervous system and
            lived experience.
          </p>

          <p className="text-[18px] mb-12 max-w-md text-[var(--text-secondary)] leading-relaxed">
            I work with high-achieving adults who often feel pressure to hold
            everything together. Together, we create space to understand
            patterns, build regulation skills, and move toward lasting change.
          </p>

          <Link
            href="/contact"
            className="mt-auto -mx-8 md:-mx-24 w-[calc(100%+4rem)] md:w-[calc(100%+12rem)]
              bg-[var(--color-accent)] text-white py-8 text-[13px] tracking-widest font-semibold
              hover:bg-[var(--color-accent-hover)] transition text-center uppercase"
          >
            Get Started →
          </Link>
        </div>

        <div className="w-full md:w-1/2 bg-[var(--color-muted)]" />
      </section>

      {/* ================= SECTION 3 (SERVICES) ================= */}
      <section className="bg-[var(--color-muted)] py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16">
          <h2 className="text-[40px] md:text-[56px] text-center text-[var(--color-primary)] mb-16 font-extrabold">
            Therapy Services for Adults in Santa Monica
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Anxiety and Panic Therapy",
                desc:
                  "Support for generalized anxiety, panic attacks, and chronic worry using CBT and mindfulness-based approaches.",
              },
              {
                title: "Trauma Therapy",
                desc:
                  "EMDR and body-oriented techniques to process trauma and rebuild safety with care and pacing.",
              },
              {
                title: "Burnout and Perfectionism Therapy",
                desc:
                  "Helping high-achieving adults address burnout, perfectionism, and internal pressure sustainably.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-[var(--color-secondary)] border border-[var(--color-muted)] px-12 py-10 flex flex-col"
              >
                <h3 className="text-[22px] mb-5 text-[var(--color-primary)] font-extrabold">
                  {service.title}
                </h3>
                <p className="text-[16px] mb-8 text-[var(--text-secondary)]">
                  {service.desc}
                </p>
                <div className="flex justify-center mt-auto">
                  <div className="w-[200px] h-[200px] rounded-full bg-[var(--color-muted)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4 ================= */}
      <section className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-[var(--color-muted)]" />

        <div className="w-full md:w-1/2 bg-[var(--color-secondary)] flex flex-col px-8 md:px-20 pt-24">
          <h2 className="text-[36px] md:text-[56px] mb-10 text-[var(--color-primary)] font-extrabold">
            You don’t have to do this all alone.
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-[18px] text-[var(--text-secondary)] mb-16">
            <li>Persistent anxiety and worry</li>
            <li>Difficulty focusing or sleeping</li>
            <li>Relationship strain</li>
            <li>Emotional exhaustion</li>
            <li>Feeling overwhelmed or on edge</li>
          </ul>

          <div className="mt-auto border-t border-[var(--color-muted)] -mx-8 md:-mx-20">
            <Link
              href="/contact"
              className="block w-full py-6 text-center text-[13px] tracking-widest
                text-[var(--color-primary)] hover:bg-[var(--color-accent)]
                hover:text-white transition-colors"
            >
              GET IN TOUCH →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5 (ABOUT) ================= */}
      <section className="bg-[var(--color-secondary)] min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-8 md:px-20">
          <div className="pt-32">
            <h2 className="text-[40px] md:text-[56px] mb-10 text-[var(--color-primary)] font-extrabold">
              About Dr. Maya Reynolds
            </h2>
            <p className="text-[18px] mb-8 max-w-md text-[var(--text-secondary)] leading-relaxed">
              Licensed clinical psychologist based in Santa Monica, specializing
              in anxiety, trauma, and burnout therapy for adults.
            </p>
            <p className="text-[18px] mb-14 max-w-md text-[var(--text-secondary)] leading-relaxed">
              My work integrates CBT, EMDR, mindfulness-based practices, and
              body-oriented techniques in a collaborative, safety-focused way.
            </p>
            <p className="text-[18px] mb-14 max-w-md text-[var(--text-secondary)] leading-relaxed">
              I offer in-person therapy at my Santa Monica office and secure
              telehealth sessions across California.
            </p>
            <Link
              href="/contact"
              className="bg-[var(--color-accent)] text-white px-10 py-4 text-[13px]
                tracking-widest hover:bg-[var(--color-accent-hover)] rounded transition"
            >
              Contact Me →
            </Link>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="w-[320px] md:w-[420px] h-[520px] md:h-[620px] rounded-t-full bg-[var(--color-muted)]" />
            <div className="hidden md:block absolute bottom-[-40px] right-[-40px]
              w-[240px] h-[240px] rounded-full bg-[var(--color-secondary)]
              border-8 border-[var(--color-secondary)]" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 6 (FAQ) ================= */}
      <section className="bg-[var(--color-secondary)] py-28">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[48%_52%] gap-8 px-6 md:px-24">
          <div className="flex justify-center md:justify-end">
            <div className="w-[360px] md:w-[560px] h-[520px] md:h-[720px] rounded-[320px] bg-[var(--color-muted)]" />
          </div>

          <div>
            <h2 className="text-[36px] md:text-[46px] mb-16 text-[var(--color-primary)] font-extrabold">
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "What types of therapy do you offer?",
                a:
                  "Individual therapy for adults using CBT, EMDR, mindfulness-based practices, and body-oriented techniques.",
              },
              {
                q: "Do you offer in-person or online therapy?",
                a:
                  "In-person therapy in Santa Monica and secure telehealth across California.",
              },
              {
                q: "Who do you work with?",
                a:
                  "Adults experiencing anxiety, trauma, burnout, or perfectionism.",
              },
              {
                q: "How long are sessions?",
                a: "Standard sessions are 50 minutes.",
              },
              {
                q: "Do you accept insurance?",
                a:
                  "Out-of-network provider with superbills available for reimbursement.",
              },
              {
                q: "How do I get started?",
                a:
                  "Schedule a free 15-minute consultation through the contact form.",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-[var(--color-muted)]">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start gap-8 py-10 text-left"
                >
                  <span className="text-[30px] text-[var(--color-primary)]">
                    {open === i ? "-" : "+"}
                  </span>
                  <span className="text-[22px] md:text-[28px] text-[var(--color-primary)] font-bold">
                    {item.q}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-700 ${
                    open === i ? "max-h-[250px]" : "max-h-0"
                  }`}
                >
                  <p className="pl-[64px] pb-10 text-[16px] leading-relaxed max-w-3xl text-[var(--text-secondary)]">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 7 (OUR OFFICE) ================= */}
      <section className="bg-[var(--color-secondary)] py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <span className="text-[var(--color-accent)] text-xs tracking-[0.2em] font-semibold mb-4 block">
            OUR OFFICE
          </span>

          <h2 className="text-[36px] md:text-[48px] mb-10 text-[var(--color-primary)] font-extrabold max-w-2xl">
            In-Person Therapy in a Calm Santa Monica Office
          </h2>

          <p className="text-[18px] text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-16">
            My Santa Monica office is a quiet, private space designed to help you
            feel grounded and supported from the moment you arrive. With natural
            light, comfortable seating, and a calm, uncluttered environment, the
            space is intentionally non-clinical and welcoming. In-person sessions
            are available for adults seeking support for anxiety, trauma, burnout,
            and chronic stress, with secure telehealth options across California.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full h-[360px] bg-[var(--color-muted)] rounded-xl" />
            <div className="w-full h-[360px] bg-[var(--color-muted)] rounded-xl" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 8 (FINAL CTA) ================= */}
      <section className="bg-[var(--color-primary)] py-32 text-[var(--color-secondary)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[32px] md:text-[44px] mb-6 font-extrabold">
            Ready to Start Therapy in Santa Monica?
          </h2>
          <p className="text-[16px] md:text-[18px] mb-14 leading-relaxed opacity-90">
            Book a free 15-minute consultation to discuss your needs and see if
            we’re a good fit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-12 py-5
              hover:bg-[var(--color-accent-hover)] transition-all rounded-lg
              font-semibold tracking-wide"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
