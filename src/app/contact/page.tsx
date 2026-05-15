import PageHero from "@/components/PageHero";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="flex-1 pt-20">
      <PageHero 
        title="Contact Us" 
        subtitle="Let's Connect"
        backgroundImage="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-dancing text-brand-brown mt-4 mb-8">We'd Love to Hear from You</h2>
              <p className="text-brand-brown/70 text-lg leading-relaxed mb-12">
                Have a question about our flavors, catering, or just want to say hi? Reach out and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-md">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-brand-brown font-bold text-lg">Our Location</h4>
                    <p className="text-brand-brown/60">123 Sweet Street, Dessert District, Varanasi, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-md">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className="text-brand-brown font-bold text-lg">Phone Number</h4>
                    <p className="text-brand-brown/60">+91 88888 88888</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-md">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="text-brand-brown font-bold text-lg">Email Address</h4>
                    <p className="text-brand-brown/60">hello@daylily.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-brown/50 ml-1">Full Name</label>
                    <input type="text" className="w-full bg-brand-cream border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-primary transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-brown/50 ml-1">Email Address</label>
                    <input type="email" className="w-full bg-brand-cream border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-primary transition-all outline-none" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-brown/50 ml-1">Subject</label>
                  <input type="text" className="w-full bg-brand-cream border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-primary transition-all outline-none" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-brown/50 ml-1">Message</label>
                  <textarea rows={5} className="w-full bg-brand-cream border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-primary transition-all outline-none resize-none" placeholder="Your message..."></textarea>
                </div>
                <button className="w-full bg-brand-brown text-brand-cream py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-brand-primary transition-all shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-700 border-t border-brand-brown/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57665.4111303866!2d82.94677274863281!3d25.320891000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db760d5ad8d%3A0xb31fdb30064d57eb!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715781234567!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Daylily Location"
        ></iframe>
      </section>
    </main>
  );
}
