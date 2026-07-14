import React from 'react';
import PageHero from '../Components/PageHero';
import { motion } from 'framer-motion';
import { FileText, Calendar, PieChart, CheckCircle, BarChart3, AlertCircle } from 'lucide-react';

const Complaints = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const tableHeaderStyle = "px-6 py-4 text-left text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-800";
  const tableDataStyle = "px-6 py-4 text-sm font-bold text-slate-300 border-b border-slate-800/50";
  const tableRowStyle = "hover:bg-slate-800/30 transition-colors";

  return (
    <main className="bg-[#020717] min-h-screen text-white pb-24">
      <PageHero 
        title="Complaints" 
        subtitle="Data & Monthly Trends"
        description="At HighRise Research, we maintain complete transparency in our grievance redressal process and compliance audits."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-32"
        >
          {/* Section: Number of Client Complaints */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500">
                <PieChart size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight">Number of Client Complaints</h2>
                <p className="text-slate-500 font-medium">Data for the month ending March 2026</p>
              </div>
            </div>

            <motion.div variants={itemVariants} className="overflow-x-auto rounded-[2rem] border border-slate-800 bg-[#0f172a]/50 backdrop-blur-xl shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/50">
                    <th className={tableHeaderStyle}>Received From</th>
                    <th className={tableHeaderStyle}>Pending (End of Month)</th>
                    <th className={tableHeaderStyle}>Received</th>
                    <th className={tableHeaderStyle}>Resolved*</th>
                    <th className={tableHeaderStyle}>Total Pending</th>
                    <th className={tableHeaderStyle}>Pending &gt; 3 Months</th>
                    <th className={tableHeaderStyle}>Avg Resolution Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { from: "Directly from Investors", pending: "NIL", received: "NIL", resolved: "NIL", total: "NIL", over3: "NIL", avg: "NIL" },
                    { from: "SEBI Scores", pending: "NIL", received: "NIL", resolved: "NIL", total: "NIL", over3: "NIL", avg: "NIL" },
                    { from: "Other Sources (If Any)", pending: "NIL", received: "NIL", resolved: "NIL", total: "NIL", over3: "NIL", avg: "NIL" },
                  ].map((row, idx) => (
                    <tr key={idx} className={tableRowStyle}>
                      <td className={tableDataStyle}>{row.from}</td>
                      <td className={tableDataStyle}>{row.pending}</td>
                      <td className={tableDataStyle}>{row.received}</td>
                      <td className={tableDataStyle}>{row.resolved}</td>
                      <td className={tableDataStyle}>{row.total}</td>
                      <td className={tableDataStyle}>{row.over3}</td>
                      <td className={tableDataStyle}>{row.avg}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-900/40">
                    <td className="px-6 py-5 text-sm font-black text-white">Grand Total</td>
                    <td className="px-6 py-5 text-sm font-black text-white">NIL</td>
                    <td className="px-6 py-5 text-sm font-black text-white">NIL</td>
                    <td className="px-6 py-5 text-sm font-black text-white">NIL</td>
                    <td className="px-6 py-5 text-sm font-black text-white">NIL</td>
                    <td className="px-6 py-5 text-sm font-black text-white">NIL</td>
                    <td className="px-6 py-5 text-sm font-black text-white">NIL</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </section>

          {/* Section: Monthly Trend */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-500">
                <Calendar size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight">Monthly Trend of Disposal</h2>
                <p className="text-slate-500 font-medium">Detailed breakdown of complaint handling throughout 2025</p>
              </div>
            </div>

            <motion.div variants={itemVariants} className="overflow-x-auto rounded-[2rem] border border-slate-800 bg-[#0f172a]/50 backdrop-blur-xl shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/50">
                    <th className={tableHeaderStyle}>S.No</th>
                    <th className={tableHeaderStyle}>Month</th>
                    <th className={tableHeaderStyle}>Carried Forward</th>
                    <th className={tableHeaderStyle}>Received</th>
                    <th className={tableHeaderStyle}>Resolved*</th>
                    <th className={tableHeaderStyle}>Pending#</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { month: "Feb-2025", cf: "NIL", received: "NIL", resolved: "NIL", pending: "NIL" },
                    { month: "Mar-2025", cf: "NIL", received: "NIL", resolved: "NIL", pending: "NIL" },
                    { month: "Apr-2025", cf: "NIL", received: "NIL", resolved: "NIL", pending: "NIL" },
                    { month: "May-2025", cf: "NIL", received: "NIL", resolved: "NIL", pending: "NIL" },
                    { month: "Jun-2025", cf: "NIL", received: "NIL", resolved: "NIL", pending: "NIL" },
                    { month: "Jul-2025", cf: "NIL", received: "NIL", resolved: "NIL", pending: "NIL" },
                    { month: "Aug-2025", cf: "NIL", received: "NIL", resolved: "NIL", pending: "NIL" },
                    { month: "Sep-2025", cf: "NIL", received: "NIL", resolved: "NIL" , pending: "NIL" },
                    { month: "Oct-2025", cf: "NIL", received: "NIL", resolved: "NIL", pending: "NIL" },
                    { month: "Nov-2025", cf: "NIL", received: "NIL", resolved: "NIL", pending: "NIL" },
                  ].map((row, idx) => (
                    <tr key={idx} className={tableRowStyle}>
                      <td className={tableDataStyle}>{idx + 1}</td>
                      <td className={tableDataStyle}>{row.month}</td>
                      <td className={tableDataStyle}>{row.cf}</td>
                      <td className={tableDataStyle}>{row.received}</td>
                      <td className={tableDataStyle}>{row.resolved}</td>
                      <td className={tableDataStyle}>{row.pending}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </section>

          {/* Section: Yearly Trend */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-2xl flex items-center justify-center text-emerald-500">
                <BarChart3 size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight">Yearly Comparison</h2>
                <p className="text-slate-500 font-medium">Complaints received and resolved annually</p>
              </div>
            </div>

            <motion.div variants={itemVariants} className="overflow-x-auto rounded-[2rem] border border-slate-800 bg-[#0f172a]/50 backdrop-blur-xl shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/50">
                    <th className={tableHeaderStyle}>S.No</th>
                    <th className={tableHeaderStyle}>Financial Year</th>
                    <th className={tableHeaderStyle}>Carried Forward</th>
                    <th className={tableHeaderStyle}>Received</th>
                    <th className={tableHeaderStyle}>Resolved*</th>
                    <th className={tableHeaderStyle}>Pending#</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: "2022-2023", cf: "NIL", received: "NIL", resolved: "NIL", pending: "NIL" },
                    { year: "2023-2024", cf: "NIL", received: "NIL", resolved: "NIL", pending: "NIL" },
                    { year: "2024-2025", cf: "NIL", received: "NIL", resolved: "NIL", pending: "NIL" },
                    { year: "2025-2026", cf: "NIL", received: "NIL", resolved: "NIL", pending: "NIL" },
                  ].map((row, idx) => (
                    <tr key={idx} className={tableRowStyle}>
                      <td className={tableDataStyle}>{idx + 1}</td>
                      <td className={tableDataStyle}>{row.year}</td>
                      <td className={tableDataStyle}>{row.cf}</td>
                      <td className={tableDataStyle}>{row.received}</td>
                      <td className={tableDataStyle}>{row.resolved}</td>
                      <td className={tableDataStyle}>{row.pending}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-900/40">
                    <td colSpan={2} className="px-6 py-5 text-sm font-black text-white text-center">Grand Total</td>
                    <td className="px-6 py-5 text-sm font-black text-white">NIL</td>
                    <td className="px-6 py-5 text-sm font-black text-white">NIL</td>
                    <td className="px-6 py-5 text-sm font-black text-white">NIL</td>
                    <td className="px-6 py-5 text-sm font-black text-white">NIL</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </section>

          {/* Section: Annual Compliance Audit */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-amber-600/20 rounded-2xl flex items-center justify-center text-amber-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight">Annual Compliance Audit</h2>
                <p className="text-slate-500 font-medium">Status of regulatory audits over the financial years</p>
              </div>
            </div>

            <motion.div variants={itemVariants} className="overflow-x-auto rounded-[2rem] border border-slate-800 bg-[#0f172a]/50 backdrop-blur-xl shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/50">
                    <th className={tableHeaderStyle}>S.No</th>
                    <th className={tableHeaderStyle}>Financial Year</th>
                    <th className={tableHeaderStyle}>Audit Status</th>
                    <th className={tableHeaderStyle}>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: "FY 2022-23", status: "Done", remarks: "NA" },
                    { year: "FY 2023-24", status: "Done", remarks: "NA" },
                    { year: "FY 2024-25", status: "Done", remarks: "Download" },
                  ].map((row, idx) => (
                    <tr key={idx} className={tableRowStyle}>
                      <td className={tableDataStyle}>{idx + 1}</td>
                      <td className={tableDataStyle}>{row.year}</td>
                      <td className={tableDataStyle}>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-black uppercase">
                          <CheckCircle size={12} /> {row.status}
                        </span>
                      </td>
                      <td className={tableDataStyle}>{row.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </section>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-[2.5rem] bg-slate-900/30 border border-slate-800 italic">
            <div className="flex items-center gap-4 text-slate-400">
              <AlertCircle size={20} className="text-blue-500 shrink-0" />
              <p className="text-sm font-medium leading-relaxed">
                * Resolved includes complaints which are closed within the specified timeframes as per SEBI regulations. 
                # Pending includes complaints which are currently under review.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 shrink-0">
              <FileText size={18} className="text-blue-400" />
              <span className="text-sm font-black uppercase tracking-widest text-slate-300">Last Updated: March 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Complaints;
