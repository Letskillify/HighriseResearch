import React from 'react';
import { Link } from 'react-router-dom';
import {
  Twitter,
  Linkedin,
  Youtube,
  Send,
  Zap,
  ArrowRight,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Building2,
  ExternalLink,
  Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Our Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
      { name: 'Investor Charter', href: '/investor' },
      { name: 'Pay Now', href: '/payment' },
    ],
    legal: [
      { name: 'Refund Policy', href: '/refund' },
      { name: 'AML Policy', href: '/aml' },
      { name: 'Disclaimer', href: '/disclaimer' },
      { name: 'Complaints', href: '/complaints' },
      { name: 'KYC & Agreement', href: '/kyc' },
    ]
  };

  return (
    <footer className="bg-[#020617] text-slate-300 pt-20 pb-8 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section: Brand and Primary Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/60">

          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-6">
           <Link to="/" className="flex items-center gap-3 group">
              {/* <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20 group-hover:bg-blue-500 transition-colors">
                <Zap size={24} fill="currentColor" />
              </div> */}
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  HighRise <span className="text-blue-500">Research</span>
                </h2>
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Research Analyst</p>
              </div>
            </Link>
            <p className="text-base leading-relaxed text-slate-300 max-w-sm">
              Empowering Retail Investors with Structured Market Research. Bridging the gap between complex market data and structured market insights.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Youtube size={20} />, href: "#" },
                { icon: <Send size={20} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="text-sm hover:text-blue-400 transition-colors flex items-center group">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Compliance</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Registered Office</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-0.5" />
                <p className="text-sm leading-6 text-slate-200">A-172 Kanak Avenue Colony, Lasudiya Mori, Indore, MP - 452010</p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-blue-500 shrink-0" />
                  <p className="text-sm text-slate-300">+91 90986 93674</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-500 shrink-0" />
                  <p className="text-sm text-slate-300">pavanraghuvanshi2014@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2 border-t border-slate-800/50">
                <ShieldCheck size={20} className="text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-[14px] font-black uppercase tracking-widest text-slate-300 mb-1">SEBI Office Address</h5>
                  <p className="text-sm leading-6 text-slate-300">
                    Plot No.C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (East), Mumbai - 400051
                  </p>
                  <p className="text-[13px] font-bold text-slate-300 mt-1 flex items-center gap-2">
                    <span>1800 22 7575</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                    <a href="mailto:sebi@sebi.gov.in" className="text-blue-500 hover:underline">sebi@sebi.gov.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Certification Badges */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
            <ShieldCheck size={32} className="text-blue-500" />
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-tight">SEBI Registration</p>
              <p className="text-base font-mono text-blue-400">INH000009427</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
            <Building2 size={32} className="text-indigo-500" />
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-tight">BSE Enlistment</p>
              <p className="text-base font-mono text-indigo-400">5543</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
            <Globe size={32} className="text-emerald-500" />
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-tight">GSTIN</p>
              <div className="flex items-center gap-2">
                <p className="text-sm text-emerald-400 font-bold uppercase">NA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosures */}
        <div className="space-y-8 py-10 border-t border-slate-800/60">
          <div className="gap-10">
            <div className="space-y-3">
              {/* <h5 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <span className="w-1 h-4 bg-amber-500 rounded-full"></span>
                Standard Risk Disclosure
              </h5> */}
              <p className="text-sm text-slate-400 leading-relaxed italic">
                Investments in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI and certification from NISM do not guarantee the performance of the intermediary or provide any assurance of returns to investors.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <p className="text-sm text-slate-400 font-medium">
              © {currentYear} HighRise Research. All rights reserved.
              <span className="mx-2 text-slate-800">|</span>
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <span className="mx-2 text-slate-800">|</span>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-500 font-bold uppercase tracking-[0.1em]">
            <span className="text-slate-500">
              Design by <a href="https://letskillify.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">LetSkillify</a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;