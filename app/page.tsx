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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 w-full" data-aos="fade-up">
          <div className="flex justify-center md:justify-start">
            {/* TODO: Replace with high-quality warm photography of nature or office */}
            <div className="bg-gray-300 w-full max-w-md h-[480px] rounded-[240px]" />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-[40px] md:text-[64px] leading-[1.15] font-extrabold text-[var(--color-primary)] mb-8">
              Anxiety and Trauma Therapy in Santa Monica, California
            </h1>

            <p className="text-lg text-[var(--color-primary)] mb-10 max-w-md leading-relaxed">
              Dr. Maya Reynolds, PsyD, provides evidence-based therapy for adults navigating anxiety, trauma, burnout, and chronic stress. In-person sessions in Santa Monica and secure telehealth throughout California.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="
            bg-[var(--color-primary)]
            text-[var(--color-secondary)]
            px-10 py-4
            text-sm tracking-wide
            w-fit
            rounded-lg
            hover:opacity-90
            transition-all
          "
              >
                Schedule a Consultation
              </Link>
              <Link
                href="#approach"
                className="
            border border-[var(--color-accent)]
            text-[var(--color-primary)]
            px-10 py-4
            text-sm tracking-wide
            w-fit
            rounded-lg
            hover:bg-[var(--color-accent)]
            hover:text-white
            transition-all
          "
              >
                Learn About My Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 (PHILOSOPHY) ================= */}
      <section id="approach" className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-[var(--color-secondary)] opacity-95 flex flex-col px-8 md:px-24 pt-24 md:pt-32" data-aos="fade-up">
          <span className="text-[var(--color-accent)] text-xs tracking-[0.2em] mb-4 font-semibold">MY APPROACH</span>
          <h2 className="text-[36px] md:text-[48px] mb-10 text-[var(--color-primary)] leading-tight font-extrabold">
            A Grounded, Collaborative Approach to Healing
          </h2>

          <p className="text-[18px] mb-8 max-w-md text-[var(--color-primary)] leading-relaxed">
            Working with anxiety, trauma, and burnout requires more than techniques—it requires safety, pacing, and a relationship built on trust. My approach is warm and structured, blending evidence-based methods with attention to your nervous system and lived experience.
          </p>

          <p className="text-[18px] mb-12 max-w-md text-[var(--color-primary)] leading-relaxed">
            I work with high-achieving adults who often feel pressure to have it all together, even when struggling internally. Together, we'll create space to understand what's happening beneath the surface, build regulation skills, and move toward lasting change at a pace that feels right for you.
          </p>

          <Link href='/contact' className="mt-auto -mx-8 md:-mx-24 w-[calc(100%+4rem)] md:w-[calc(100%+12rem)]
      bg-[var(--color-accent)] text-white py-8 text-[13px] tracking-widest font-semibold
      hover:bg-[var(--color-accent-hover)] transition text-center uppercase">
            Get Started →
          </Link>
        </div>

        <div className="w-full md:w-1/2 bg-gray-200" />
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="bg-[var(--color-muted)] py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16" data-aos="fade-up">
          <h2 className="text-[40px] md:text-[56px] text-center text-[var(--color-primary)] mb-16 font-extrabold">
            Therapy Services for Adults in Santa Monica
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Anxiety and Panic Therapy",
                desc: "Whether you're experiencing generalized anxiety, panic attacks, or chronic worry, I use evidence-based approaches including CBT and mindfulness-based practices to help you understand your patterns, regulate your nervous system, and reclaim a sense of control."
              },
              {
                title: "Trauma Therapy",
                desc: "Trauma—whether from a single incident or complex, ongoing experiences—can leave lasting impacts on how you feel and function. I offer EMDR, body-oriented techniques, and a pacing-focused approach to help you process what happened and rebuild safety in your life."
              },
              {
                title: "Burnout and Perfectionism Therapy",
                desc: "High-achieving adults often struggle with burnout, perfectionism, and the relentless pressure to perform. I help clients identify the roots of these patterns, challenge unhelpful beliefs, and develop sustainable ways of working and living that honor their well-being."
              }
            ].map((service, i) => (
              <div key={i} className="bg-[var(--color-secondary)] border border-[var(--color-primary)] px-12 py-10 flex flex-col">
                <h3 className="text-[22px] mb-5 text-[var(--color-primary)] font-extrabold">{service.title}</h3>
                <p className="text-[16px] mb-8 text-[var(--color-primary)]">
                  {service.desc}
                </p>
                <div className="flex justify-center mt-auto">
                  <div className="w-[200px] h-[200px] rounded-full bg-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4 ================= */}
      <section className="min-h-screen flex flex-col md:flex-row" data-aos="fade-up">
        <div className="w-full md:w-1/2 bg-gray-300" />

        <div className="w-full md:w-1/2 bg-[#c2bfca] flex flex-col px-8 md:px-20 pt-24">
          <h2 className="text-[36px] md:text-[56px] mb-10 text-[#24371b]">
            You don’t have to do this all alone.
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-[18px] text-[#24371b] mb-16">
            <li>Persistent sadness</li>
            <li>Trouble focusing</li>
            <li>Relationship difficulty</li>
            <li>Constant exhaustion</li>
            <li>Feeling overwhelmed</li>
          </ul>

          <div className="mt-auto border-t border-[var(--color-primary)] -mx-8 md:-mx-20">
            <Link
              href="/contact"
              className="
      block
      w-full
      py-6
      text-center
      text-[13px]
      tracking-widest
      text-[var(--color-primary)]
      hover:bg-[var(--color-accent)]
      hover:text-white
      transition-colors
    "
            >
              GET IN TOUCH →
            </Link>
          </div>

        </div>
      </section>

      {/* ================= SECTION 5 (ABOUT) ================= */}
      <section className="bg-[var(--color-secondary)] min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-8 md:px-20" data-aos="fade-up">
          <div className="pt-32">
            <h2 className="text-[40px] md:text-[56px] mb-10 text-[var(--color-primary)] font-extrabold">
              About Dr. Maya Reynolds
            </h2>
            <p className="text-[18px] mb-8 max-w-md text-[var(--color-primary)] leading-relaxed">
              I'm a licensed clinical psychologist based in Santa Monica, California, specializing in anxiety, trauma, and burnout in adults. My work is grounded in evidence-based modalities including Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.
            </p>
            <p className="text-[18px] mb-14 max-w-md text-[var(--color-primary)] leading-relaxed opacity-90">
              I believe therapy works best when it's collaborative, reflective, and rooted in safety. My clients are often high-achieving adults who are navigating stress, perfectionism, or the aftermath of trauma. I help them slow down, understand their nervous system responses, and build skills that support long-term healing.
            </p>
            <p className="text-[18px] mb-14 max-w-md text-[var(--color-primary)] leading-relaxed opacity-90">
              I offer in-person therapy at my Santa Monica office and secure telehealth sessions for clients throughout California.
            </p>
            <Link href='/contact' className="bg-[var(--color-accent)] text-white px-10 py-4 text-[13px] tracking-widest hover:bg-[var(--color-accent-hover)] rounded transition">
              Contact Me →
            </Link>
          </div>

          <div className="relative flex justify-center md:justify-end">
            {/* TODO: Professional yet warm headshot of Dr. Reynolds */}
            <div className="w-[320px] md:w-[420px] h-[520px] md:h-[620px] rounded-t-full bg-gray-300" />
            <div className="hidden md:block absolute bottom-[-40px] right-[-40px] w-[240px] h-[240px] rounded-full bg-gray-200 border-8 border-[var(--color-secondary)]" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 6 (FAQ) ================= */}
      <section className="bg-[var(--color-secondary)] py-28">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[48%_52%] gap-8 px-6 md:px-24" data-aos="fade-up">

          <div className="flex justify-center md:justify-end">
            <div className="w-[360px] md:w-[560px] h-[520px] md:h-[720px] rounded-[320px] bg-gray-300" />
          </div>

          <div>
            <h2 className="text-[36px] md:text-[46px] mb-16 text-[var(--color-primary)] font-extrabold">Frequently Asked Questions</h2>

            {[
              {
                q: "What types of therapy do you offer?",
                a: "I provide individual therapy for adults using evidence-based approaches including Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. My focus areas include anxiety, panic, trauma, burnout, perfectionism, and chronic stress."
              },
              {
                q: "Do you offer in-person or online therapy?",
                a: "I offer both in-person therapy at my Santa Monica office and secure telehealth sessions for clients located anywhere in California."
              },
              {
                q: "Who do you work with?",
                a: "I work exclusively with adults. My clients are often high-achieving individuals navigating anxiety, trauma, burnout, or perfectionism. I do not provide therapy for children, adolescents, or couples."
              },
              {
                q: "How long are therapy sessions?",
                a: "Standard therapy sessions are 50 minutes. We'll meet weekly or biweekly depending on your needs and goals."
              },
              {
                q: "Do you accept insurance?",
                a: "I am an out-of-network provider. I can provide you with a superbill to submit to your insurance for potential reimbursement. Many clients find that their out-of-network benefits cover a portion of the cost."
              },
              {
                q: "How do I get started?",
                a: "The first step is to schedule a free 15-minute consultation. This gives us a chance to discuss what you're looking for, answer any questions, and determine if we're a good fit. You can reach me through the contact form or by phone."
              }
            ].map((item, i) => (
              <div key={i} className="border-b">
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start gap-8 py-10 text-left">
                  <span className="text-[30px] text-[var(--color-primary)]">{open === i ? "–" : "+"}</span>
                  <span className="text-[22px] md:text-[28px] text-[var(--color-primary)] font-bold">{item.q}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-700 ${open === i ? "max-h-[250px]" : "max-h-0"}`}>
                  <p className="pl-[64px] pb-10 text-[16px] leading-relaxed max-w-3xl text-[var(--color-primary)]">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 7 ================= */}
      <section className="bg-[var(--color-muted)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-[var(--color-primary)]" data-aos="fade-up">

          <h2 className="text-[44px] font-extrabold text-center mb-12 text-[var(--color-primary)]">
            Professional Background
          </h2>

          <div className="border-t border-[var(--color-primary)]/60">

            {/* Education */}
            <div className="border-b border-[var(--color-primary)]/60">
              <button
                onClick={() => setOpenBg(openBg === 0 ? null : 0)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="text-[24px] text-[var(--color-primary)] font-bold">Education</span>
                <span className="text-[24px] text-[var(--color-primary)]">{openBg === 0 ? "–" : "+"}</span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${openBg === 0 ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}
          `}
              >
                <p className="pb-6 text-[15px] max-w-3xl text-[var(--color-primary)]">
                  PsyD in Clinical Psychology
                </p>
              </div>
            </div>

            {/* Licensure */}
            <div className="border-b border-[var(--color-primary)]/60">
              <button
                onClick={() => setOpenBg(openBg === 1 ? null : 1)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="text-[24px] text-[var(--color-primary)] font-bold">Licensure</span>
                <span className="text-[24px] text-[var(--color-primary)]">{openBg === 1 ? "–" : "+"}</span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${openBg === 1 ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}
          `}
              >
                <p className="pb-6 text-[15px] max-w-3xl text-[var(--color-primary)]">
                  Licensed Clinical Psychologist, California
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="border-b border-[var(--color-primary)]/60">
              <button
                onClick={() => setOpenBg(openBg === 2 ? null : 2)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="text-[24px] text-[var(--color-primary)] font-bold">Certifications</span>
                <span className="text-[24px] text-[var(--color-primary)]">{openBg === 2 ? "–" : "+"}</span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${openBg === 2 ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}
          `}
              >
                <p className="pb-6 text-[15px] max-w-3xl text-[var(--color-primary)]">
                  EMDR Trained Clinician
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= SECTION 8 (FINAL CTA) ================= */}
      <section className="bg-[var(--color-primary)] py-32 text-[var(--color-secondary)]">
        <div className="max-w-3xl mx-auto px-6 text-center " data-aos="fade-up">
          <h2 className="text-[32px] md:text-[44px] mb-6 text-[var(--color-secondary)] font-extrabold">Ready to Start Therapy in Santa Monica?</h2>
          <p className="text-[16px] md:text-[18px] mb-14 leading-relaxed opacity-90">
            If you're struggling with anxiety, trauma, or burnout, you don't have to navigate it alone. I offer a free 15-minute consultation to discuss your needs and determine if we're a good fit.
          </p>
          <Link href='/contact' className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] px-12 py-5 hover:bg-[var(--color-accent)] hover:text-white transition-all rounded-lg font-semibold tracking-wide">
            Get in Touch
          </Link>
        </div>
      </section>

    </main>
  );
}
