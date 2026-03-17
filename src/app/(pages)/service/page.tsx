//

import React from "react";
import {
  Scissors,
  Sparkles,
  Truck,
  Ruler,
  Heart,
  Star,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

// --- Types ---
interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProcessStep {
  number: string;
  title: string;
  desc: string;
}

// --- Components ---
const ServiceCard = ({ title, description, icon }: ServiceProps) => (
  <div className="group p-8 bg-white border border-slate-100 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div className="w-14 h-14 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const ServicePage: React.FC = () => {
  const processes: ProcessStep[] = [
    {
      number: "01",
      title: "Style Consultation",
      desc: "Meet with our experts to discuss your vision, fabric preferences, and occasion.",
    },
    {
      number: "02",
      title: "Precision Measurement",
      desc: "Our master tailors ensure a perfect fit with over 30 unique measurement points.",
    },
    {
      number: "03",
      title: "Master Crafting",
      desc: "Your garment is hand-cut and sewn using traditional techniques and premium materials.",
    },
    {
      number: "04",
      title: "Final Fitting",
      desc: "A dedicated session to ensure every stitch is perfect before you take it home.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80"
            alt="Fabric texture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-rose-400 font-semibold tracking-widest uppercase mb-4 block">
            Elevating Your Wardrobe
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
            Bespoke Services for the{" "}
            <span className="italic font-serif">Modern Woman</span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            From red-carpet alterations to custom-made bridal dreams, we provide
            artisanal craftsmanship tailored to your unique silhouette.
          </p>
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-full font-medium transition-all transform hover:scale-105">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* 2. CORE SERVICES GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Our Premium Offerings</h2>
            <p className="text-slate-600 text-lg">
              We combine heritage tailoring with modern aesthetics to ensure you
              look breathtaking for every chapter of your life.
            </p>
          </div>
          <button className="text-rose-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
            View Pricing Guide <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Scissors size={28} />}
            title="Custom Tailoring"
            description="One-of-a-kind garments designed from scratch. You pick the fabric, we create the magic."
          />
          <ServiceCard
            icon={<Star size={28} />}
            title="Bridal Concierge"
            description="Complete wedding dress customization and preservation for your most special day."
          />
          <ServiceCard
            icon={<Ruler size={28} />}
            title="Express Alterations"
            description="Need it fast? We provide 24-hour turnaround on hems, waist adjustments, and minor repairs."
          />
          <ServiceCard
            icon={<Sparkles size={28} />}
            title="Personal Styling"
            description="Work with our stylists to curate a capsule wardrobe that reflects your professional and personal life."
          />
          <ServiceCard
            icon={<Heart size={28} />}
            title="Vintage Restoration"
            description="Breath new life into heirloom pieces with our delicate restoration and modernization services."
          />
          <ServiceCard
            icon={<Truck size={28} />}
            title="Home Fitting"
            description="Can't come to us? Our master tailor will visit your home for measurements and fittings."
          />
        </div>
      </section>

      {/* 3. THE PROCESS (Visual Section) */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-slate-600">
              The journey to your perfect fit is meticulous and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>

            {processes.map((step, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white border-4 border-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <span className="text-xl font-bold text-rose-600">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Split Section) */}
      <section className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Tailor at work"
          />
        </div>
        <div className="lg:w-1/2 bg-slate-900 text-white p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-8">Uncompromising Quality</h2>
          <div className="space-y-8">
            {[
              "Over 25 years of experience in luxury fashion.",
              "Sourcing fabrics from the finest Italian and French mills.",
              "Complimentary lifetime minor adjustments on all custom pieces.",
              "Sustainable practices and ethical craftsmanship.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2
                  className="text-rose-500 mt-1 shrink-0"
                  size={24}
                />
                <p className="text-lg text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA / FOOTER PREVIEW */}
      <section className="py-24 text-center px-6">
        <div className="max-w-3xl mx-auto bg-rose-50 p-12 rounded-[3rem]">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready for your transformation?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Join 5,000+ satisfied clients who found their perfect fit with
            DressShop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
              Book Appointment
            </button>
            <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
