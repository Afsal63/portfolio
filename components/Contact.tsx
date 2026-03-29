"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-6">
          Get In Touch
        </h2>

        <p className="text-white/70 mb-10">
          Open to opportunities, collaborations, or just a quick chat.
        </p>

        <a
          href="mailto:afsalafzz63@gmail.com?subject=Hiring Inquiry&body=Hi Afsal,%0A%0A"
          className="inline-block px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium text-lg"
        >
          📧 Contact Me
        </a>

      </div>
    </section>
  );
}