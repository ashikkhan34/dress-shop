"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Instagram,
  Facebook,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

// --- Types ---
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  verification: string;
}

const ContactPage: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    verification: "",
  });

  // Simple Verification State (Math Puzzle)
  const [captcha, setCaptcha] = useState<{ a: number; b: number }>({
    a: 0,
    b: 0,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Generate new math puzzle on load
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCaptcha({
      a: Math.floor(Math.random() * 10) + 1,
      b: Math.floor(Math.random() * 10) + 1,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    // Math Verification Check
    if (parseInt(formData.verification) !== captcha.a + captcha.b) {
      setError(`Incorrect verification. What is ${captcha.a} + ${captcha.b}?`);
      return;
    }

    // Success Logic
    setSuccess(true);
    console.log("Form Submitted:", formData);
    // Reset form after 3 seconds
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* 1. ELEGANT HERO SECTION */}
      <section className="bg-rose-50 py-20 px-6 text-center border-b border-rose-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 italic text-slate-900">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you’re looking for a custom fitting, tracking an order, or
            just want to talk style, our concierge team is here to assist you.
          </p>
        </div>
      </section>

      {/* 2. QUICK CONTACT CARDS */}
      <section className="py-16 px-6 max-w-7xl mx-auto -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-50 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <p className="text-slate-500 mb-4 text-sm">
              Mon-Fri from 9am to 6pm.
            </p>
            <a
              href="tel:+1234567890"
              className="text-rose-600 font-semibold text-lg"
            >
              +880 1817553134
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-50 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
              <MessageSquare size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Chat to Support</h3>
            <p className="text-slate-500 mb-4 text-sm">
              Wer are here to help you online.
            </p>
            <button className="text-rose-600 font-semibold text-lg hover:underline underline-offset-4">
              Start a Live Chat
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-50 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Visit Our Atelier</h3>
            <p className="text-slate-500 mb-4 text-sm">
              Experience the fabrics in person.
            </p>
            <address className="not-italic font-semibold text-slate-700">
              AK Fashion Pabna Rd, 6600, Bangladesh
            </address>
          </div>
        </div>
      </section>

      {/* 3. MAIN FORM & INFO SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Text and Image */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Send us a Message</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Have a question about our collections or need help with a custom
            order? Fill out the form and our style consultants will get back to
            you within 24 hours.
          </p>

          <div className="rounded-3xl overflow-hidden h-[400px] mb-8 relative group">
            <img
              src="https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Tailoring equipment"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          </div>

          <div className="flex gap-6 items-center">
            <p className="font-medium">Follow our journey:</p>
            <Instagram className="text-slate-400 hover:text-rose-600 cursor-pointer transition-colors" />
            <Facebook className="text-slate-400 hover:text-rose-600 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white shadow-2xl">
          {success ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 animate-bounce">
                <Send size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-slate-400">
                Our team will reach out to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
                    placeholder="Jane Doe"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
                    placeholder="jane@example.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Subject
                </label>
                <select
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all text-slate-300"
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                >
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Custom Fitting</option>
                  <option>Wholesale</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Message *
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
                  placeholder="Tell us how we can help..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              {/* Simple Human Verification */}
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <label className="block text-sm font-medium mb-2 text-rose-400">
                  Human Verification
                </label>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold">
                    What is {captcha.a} + {captcha.b}?
                  </span>
                  <input
                    type="number"
                    className="w-24 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    onChange={(e) =>
                      setFormData({ ...formData, verification: e.target.value })
                    }
                  />
                </div>
              </div>

              {error && <p className="text-rose-400 text-sm italic">{error}</p>}

              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 4. BIG FAQ SECTION (To make the page "Big" and useful) */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle size={40} className="mx-auto text-rose-600 mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">
              Fast answers to our most common inquiries.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does a custom dress take?",
                a: "Typically, custom pieces take 4-6 weeks including fittings.",
              },
              {
                q: "Do you ship internationally?",
                a: "Yes, we ship to over 50 countries with tracked premium shipping.",
              },
              {
                q: "What is your return policy?",
                a: "Unworn off-the-rack items can be returned within 14 days. Custom pieces are final sale but include free adjustments.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 cursor-pointer hover:border-rose-300 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-lg">{faq.q}</h4>
                  <ChevronDown size={20} className="text-slate-400" />
                </div>
                <p className="mt-3 text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
