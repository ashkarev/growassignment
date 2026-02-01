import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {/* LEFT: Image */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-gray-300 w-full max-w-sm h-[420px] rounded-[200px]"></div>
          </div>

          {/* RIGHT: Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Live your life in full bloom
            </h1>

            <p className="text-lg mb-8 max-w-md">
              Therapy for adults. A supportive space to begin your healing
              journey.
            </p>

           <Link
  href="/contact"
  className="border border-primary text-primary px-6 py-3 w-fit inline-block"
>
  Connect with me →
</Link>

          </div>
        </div>
      </section>
    </main>
  );
}
