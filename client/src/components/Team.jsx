import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, ShieldCheck } from 'lucide-react';
import api from '../api/client';

export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackTeam = [
    {
      id: 'team_001',
      name: 'Govindan Venkatesan',
      role: 'Managing Director & Founder',
      department: 'Executive Leadership',
      bio: 'Visionary enterprise leader spearheading digital transformation, ERP strategy, and business process engineering for manufacturing and trade conglomerates.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      linkedin: 'https://linkedin.com/company/jishnu-infotech',
      email: 'contact@jishnuinfotech.com',
    },
    {
      id: 'team_002',
      name: 'Venkatesan Janaki',
      role: 'Director of Operations & Compliance',
      department: 'Corporate Governance',
      bio: 'Ensures strict alignment with regulatory compliance, client project governance, contractual SLAs, and high-standard enterprise delivery.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      linkedin: 'https://linkedin.com/company/jishnu-infotech',
      email: 'contact@jishnuinfotech.com',
    },
    {
      id: 'team_003',
      name: 'S. Koushik Raman',
      role: 'Head of SAP & S/4HANA Practice',
      department: 'SAP Solutions',
      bio: 'Principal SAP Solutions Architect with deep expertise in SAP Business One, S/4HANA migration pathways, shop-floor MRP, and supply chain logistics.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      linkedin: 'https://linkedin.com/company/jishnu-infotech',
      email: 'contact@jishnuinfotech.com',
    },
    {
      id: 'team_004',
      name: 'Priyanka Sundaram',
      role: 'Lead Cloud ERP & NetSuite Architect',
      department: 'Oracle NetSuite & Cloud',
      bio: 'Specialist in multi-subsidiary financials, SuiteCommerce integrations, omnichannel order orchestration, and cloud digital migrations.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      linkedin: 'https://linkedin.com/company/jishnu-infotech',
      email: 'contact@jishnuinfotech.com',
    }
  ];

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await api.get('/team');
        if (res.data?.data && res.data.data.length > 0) {
          setTeam(res.data.data);
        } else {
          setTeam(fallbackTeam);
        }
      } catch (err) {
        setTeam(fallbackTeam);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  const displayTeam = team.length > 0 ? team : fallbackTeam;

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Leadership & Senior Practitioners
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Meet the Leaders Driving{' '}
            <span className="bg-gradient-to-r from-brand-deepBlue via-brand-brightBlue to-brand-orange bg-clip-text text-transparent">
              Business Transformation
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Specialized SAP, Oracle NetSuite, and Zoho consultants committed to delivering measurable outcomes, operational agility, and reliable support.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayTeam.map((member, idx) => (
            <motion.div
              key={member.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-lg hover:shadow-2xl hover:border-brand-brightBlue/50 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md">
                    {member.department}
                  </span>
                </div>
              </div>

              {/* Bio & Socials */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-brand-brightBlue transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-orange mt-0.5">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn Profile`}
                      className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-brand-brightBlue transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-emerald-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
