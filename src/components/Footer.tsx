import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { icon: <FaFacebook size={18} />, label: "Facebook" },
    { icon: <FaInstagram size={18} />, label: "Instagram" },
    { icon: <FaTwitter size={18} />, label: "Twitter" },
    { icon: <FaYoutube size={18} />, label: "Youtube" },
  ];

  return (
    <footer id="contact" className="bg-brand-brown text-brand-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-4xl font-dancing font-bold tracking-tight">
              Day<span className="text-brand-primary">lily</span>
            </Link>
            <p className="mt-8 text-brand-cream/60 leading-relaxed max-w-xs">
              Experience the sweetest moments like never before. We offer a perfect blend of modern comfort and traditional craftsmanship.
            </p>
            <div className="mt-8 flex gap-4">
              {socials.map((social, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-brand-cream/20 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-brand-brown transition-all" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-brand-cream/60">
              <li><Link href="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link href="/flavors" className="hover:text-brand-primary transition-colors">Flavors</Link></li>
              <li><Link href="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-primary transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6 text-brand-cream/60">
              <li className="flex items-start gap-4">
                <span className="text-brand-primary font-bold">A:</span>
                <span>123 Sweet Street, Dessert District, Varanasi, India</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-primary font-bold">T:</span>
                <a href="tel:+918888888888" className="hover:text-brand-primary transition-colors">+91 88888 88888, 99999 99999</a>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-primary font-bold">E:</span>
                <a href="mailto:hello@daylily.com" className="hover:text-brand-primary transition-colors">hello@daylily.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-8">Opening Hours</h4>
            <ul className="space-y-4 text-brand-cream/60">
              <li className="flex justify-between">
                <span>Mon - Thu:</span>
                <span className="text-brand-cream font-medium">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat:</span>
                <span className="text-brand-cream font-medium">11:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-brand-cream font-medium">10:00 AM - 11:00 PM</span>
              </li>
              <li className="mt-8 pt-8 border-t border-brand-cream/10">
                <span className="block text-xs uppercase tracking-widest font-bold text-brand-primary">Home Delivery</span>
                <p className="mt-2 text-brand-cream">Available until 11:00 PM daily</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-brand-cream/40">
          <p>© 2026 Daylily. All rights reserved.</p>
          <p>Designed with ♥ for Sweet Lovers</p>
        </div>
      </div>
    </footer>
  );
}
