"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <main className="bg-[var(--color-secondary)] min-h-screen">

  {/* ================= CONTACT HERO ================= */}
<section className="min-h-screen bg-[#eae7ed] px-8 md:px-24 py-24">
  <div className="max-w-[1600px] mx-auto relative min-h-[820px]">

    {/* LEFT TEXT */}
    <div className="max-w-xl text-[#24371b] ">
      <h1 className="text-[64px] md:text-[88px] font-extrabold leading-[1.05] mb-5">
        Let’s Connect
      </h1>

      <p className="text-[20px] leading-relaxed ">
        Starting therapy is an intentional and courageous step.
      </p>

      <p className="text-[20px] leading-relaxed">
        Reach out with questions, or schedule a free 15-minute consultation
        to see if working together feels right for you.
      </p>
    </div>

    {/* IMAGE GROUP – BOTTOM LEFT */}
  <div className="absolute left-0 bottom-20 flex items-end gap-[-10px]">

  {/* ARCH IMAGE */}
  <div className="w-[250px] h-[380px] rounded-t-full overflow-hidden">
    <img
      src="/images/C1.png"
      alt="Calm therapeutic imagery"
      className="w-full h-full object-cover"
    />
  </div>

  {/* CIRCLE IMAGE */}
  <div className="-ml-20 mb-12 w-[200px] h-[200px] rounded-full overflow-hidden border-8 border-[#cfcbd4]">
    <img
      src="/images/cr.png"
      alt="Soft calming detail"
      className="w-full h-full object-cover"
    />
  </div>

</div>


    {/* HIPAA NOTE – CENTER RIGHT */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] bg-[#1f3b1b] text-white px-12 py-14 rounded-sm">
      <p className="text-[15px] leading-relaxed">
        <strong>PLEASE NOTE:</strong> Using a standard “Form Block” on your
        contact page is not HIPAA-compliant. Squarespace stores submitted
        form data within the Marketing → Profiles section.
        <br /><br />
        To protect your privacy, consider embedding a HIPAA-compliant form,
        linking to your secure client portal, or listing your email address
        instead.
      </p>
    </div>

  </div>
</section>






      {/* ================= CONTACT DETAILS ================= */}
      <section className="py-32 bg-[var(--color-muted)]">
        <div
          className="max-w-4xl mx-auto text-center text-[var(--color-primary)]"
          data-aos="fade-up"
        >
          <h2 className="text-[48px] font-extrabold mb-10">
            Schedule a Consultation
          </h2>

          <p className="text-[18px] max-w-2xl mx-auto mb-20 leading-relaxed">
            I offer a free 15-minute consultation to discuss your needs and see if
            we’re a good fit.
          </p>

          <div className="bg-white border border-[var(--color-primary)]/30 px-14 py-16 max-w-xl mx-auto">
            <h3 className="text-[26px] font-bold mb-6">
              Get in Touch
            </h3>

            <p className="text-[16px] mb-10 leading-relaxed">
              In-person therapy in Santa Monica and secure telehealth throughout
              California.
            </p>

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

      {/* ================= OFFICE ================= */}
      <section className="bg-[var(--color-accent)] py-32 px-10">
        <div
          className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center"
          data-aos="fade-up"
        >

          {/* OFFICE INFO */}
          <div className="text-white">
            <h2 className="text-[48px] font-extrabold mb-8">
              My Office
            </h2>

            <p className="text-[18px] mb-10 leading-relaxed">
              Private Practice Office <br />
              Santa Monica, CA
            </p>

            <h3 className="text-[32px] font-bold mb-4">
              Session Types
            </h3>

            <p className="text-[18px] leading-relaxed">
              In-Person (Santa Monica) <br />
              Telehealth (California-wide)
            </p>
          </div>

          {/* MAP */}
          <div className="w-full h-[380px] bg-white">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Santa+Monica,CA&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>
      </section>

    </main>
  );
}
