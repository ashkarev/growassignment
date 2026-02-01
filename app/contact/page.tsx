
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
      <section className="min-h-screen bg-[#c2bfca] px-8 md:px-24 py-24">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] gap-20" data-aos="fade-up">

          {/* LEFT */}
          <div className="text-[#24371b]">
            <h1 className="text-[48px] font-bold md:text-[72px] leading-tight mb-10">
              Let’s Connect
            </h1>

            <p className="text-[18px] mb-4">
              Starting therapy is courageous.
            </p>

            <p className="text-[18px] max-w-md mb-20">
              Get in touch for questions, or to book a free 15-minute consultation.
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
      <section className="bg-[#e5e0da] py-32">
  <div className="max-w-5xl mx-auto px-6 text-center text-[#24371b]"  data-aos="fade-up">

    {/* Heading */}
    <h2 className="text-[48px] md:text-[56px] mb-8">
      Book an appointment.
    </h2>

    <p className="text-[18px] max-w-2xl mx-auto mb-24 leading-relaxed">
      Add some text here if you like, and add your scheduling widget below
      (you can get one by signing up for a scheduling account through
      Squarespace, the top-tier plan is HIPAA compliant OR you can use your
      client portal).
    </p>

    {/* CENTER BOX */}
    <div className="bg-white max-w-xl mx-auto px-12 py-14 border border-[#24371b]/30">

      <h3 className="text-[26px] mb-4">
        Get in touch
      </h3>

      <p className="text-[16px] mb-10 leading-relaxed">
        Please reach out using the contact information below to ask
        questions or schedule a consultation.
      </p>

      {/* CONTACT DETAILS */}
      <div className="space-y-4 text-[16px]">
        <p>
          <span className="font-medium">Email:</span>{" "}
          <a
            href="mailto:email@example.com"
            className="underline hover:text-[#1b2a14]"
          >
            email@example.com
          </a>
        </p>

        <p>
          <span className="font-medium">Phone:</span>{" "}
          <a
            href="tel:5555555555"
            className="underline hover:text-[#1b2a14]"
          >
            (555) 555-5555
          </a>
        </p>
      </div>

    </div>

  </div>
</section>

{/* sec--3 with map */}
<section className="bg-[#7c7a45] py-24 px-6">
  <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center" data-aos="fade-up">

    {/* LEFT CONTENT */}
    <div className="text-white">
      <h2 className="text-[48px] font-medium mb-8">
        My Office
      </h2>

      <p className="text-[18px] leading-relaxed mb-10">
        123 Example Street <br />
        Minneapolis, MN
      </p>

      <h3 className="text-[36px] font-medium mb-4">
        Hours
      </h3>

      <p className="text-[18px] leading-relaxed">
        Monday – Friday <br />
        10am – 6pm
      </p>
    </div>

    {/* RIGHT MAP */}
    <div className="w-full h-[360px] md:h-[420px] bg-white">
      <iframe
        title="Office Location"
        src="https://www.google.com/maps?q=Minneapolis,MN&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      />
    </div>

  </div>
</section>

{/* sec--4 */}
<section className="bg-[#fbf7f1] py-24">
  <div className="max-w-[1600px] mx-auto px-10" data-aos="fade-up">

    {/* Heading */}
    <h2 className="text-[48px] md:text-[56px] font-medium text-[#24371b] mb-14">
      Find me on social.
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
