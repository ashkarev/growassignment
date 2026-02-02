
'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <main>
      {/* CONTACT – SECTION 1 */}
      <section className="min-h-screen bg-[var(--color-muted)] px-8 md:px-24 py-24">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] gap-20" data-aos="fade-up">

          {/* LEFT */}
          <div className="text-[var(--color-primary)]">
            <h1 className="text-[48px] font-extrabold md:text-[72px] leading-tight mb-10">
              Contact Dr. Maya Reynolds – Santa Monica Psychologist
            </h1>

            <p className="text-[18px] mb-4">
              I'm glad you're here. Reaching out for therapy can feel vulnerable, and I want to make this process as straightforward as possible.
            </p>

            <p className="text-[18px] max-w-md mb-20">
              Whether you're dealing with anxiety, trauma, burnout, or chronic stress, I'm here to help. I offer in-person therapy in Santa Monica and secure telehealth sessions for clients throughout California.
            </p>

            {/* Images */}
            <div className="relative">
              {/* Tall arch image */}
              <div className="w-[260px] h-[380px] rounded-t-full bg-gray-300" />

              {/* Overlapping circle */}
              <div className="absolute bottom-[-30px] left-[180px] w-[180px] h-[180px] rounded-full bg-gray-300" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-start">
            <div className="bg-[#1b2a14] text-white p-10 md:p-14 max-w-lg">
              <p className="text-[16px] leading-relaxed">
                <strong>PLEASE NOTE:</strong> If you opt to use a “Form Block”
                on your contact page this is not HIPAA-compliant.
                Squarespace stores data that is input into forms in the
                Marketing tab under Profiles. Instead, you can embed a
                HIPAA-compliant form, a link to your client portal, or simply
                put your email address.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* sec--------2 */}
      <section className="bg-[var(--color-secondary)] py-32">
        <div className="max-w-5xl mx-auto px-6 text-center text-[var(--color-primary)]" data-aos="fade-up">

          {/* Heading */}
          <h2 className="text-[48px] md:text-[56px] mb-8 font-extrabold">
            Schedule a Consultation
          </h2>

          <p className="text-[18px] max-w-2xl mx-auto mb-24 leading-relaxed">
            The first step is a free 15-minute consultation. This gives us a chance to discuss what you're looking for, answer any questions, and determine if we're a good fit.
          </p>

          {/* CENTER BOX */}
          <div className="bg-white max-w-xl mx-auto px-12 py-14 border border-[var(--color-primary)]/30">

            <h3 className="text-[26px] mb-4 font-bold">
              Get in Touch
            </h3>

            <p className="text-[16px] mb-10 leading-relaxed">
              I offer in-person therapy at my Santa Monica office and secure telehealth sessions for clients throughout California. I work exclusively with adults.
            </p>

            {/* CONTACT DETAILS */}
            <div className="space-y-4 text-[16px]">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:dr.reynolds@example.com"
                  className="underline hover:text-[var(--color-accent)]"
                >
                  dr.reynolds@example.com
                </a>
              </p>

              <p>
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:5555555555"
                  className="underline hover:text-[var(--color-accent)]"
                >
                  (555) 555-5555
                </a>
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* sec--3 with map */}
      <section className="bg-[var(--color-accent)] py-24 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center" data-aos="fade-up">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h2 className="text-[48px] font-extrabold mb-8">
              My Office
            </h2>

            <p className="text-[18px] leading-relaxed mb-10">
              Private Practice Office <br />
              Santa Monica, CA
            </p>

            <h3 className="text-[36px] font-bold mb-4">
              Session Types
            </h3>

            <p className="text-[18px] leading-relaxed">
              In-Person (Santa Monica) <br />
              Telehealth (California-wide)
            </p>
          </div>

          {/* RIGHT MAP */}
          <div className="w-full h-[360px] md:h-[420px] bg-white">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Santa+Monica,CA&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* sec--4 */}
      <section className="bg-[var(--color-secondary)] py-24">
        <div className="max-w-[1600px] mx-auto px-10" data-aos="fade-up">

          {/* Heading */}
          <h2 className="text-[48px] md:text-[56px] font-extrabold text-[var(--color-primary)] mb-14">
            Connect on Social Media
          </h2>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="w-full aspect-square bg-gray-300"></div>

            <div className="w-full aspect-square bg-gray-300"></div>

            <div className="w-full aspect-square bg-gray-300"></div>

            <div className="w-full aspect-square bg-gray-300"></div>

          </div>

        </div>
      </section>

      {/* Just swap each gray div with:

<img
  src="/image-name.jpg"
  alt=""
  className="w-full h-full object-cover"
/> */}



    </main>
  );
}
