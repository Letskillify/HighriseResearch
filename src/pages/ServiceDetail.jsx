import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../Firebase';
import { motion } from 'framer-motion';
import { CheckSquare, CreditCard, ChevronRight, Zap, Target, ShieldCheck, ChevronLeft } from 'lucide-react';
import PageHero from '../Components/PageHero';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
   const { id } = useParams();
   const [service, setService] = useState(null);
   const [loading, setLoading] = useState(true);
   const [allServices, setAllServices] = useState([]);
   const [currentIndex, setCurrentIndex] = useState(-1);

   useEffect(() => {
      const fetchData = async () => {
         try {
            // 1. Fetch current service
            const docRef = doc(db, 'services', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
               setService(docSnap.data());
            }

            // 2. Fetch all services for navigation
            const q = query(collection(db, 'services'), orderBy('indexNumber', 'asc'));
            const querySnapshot = await getDocs(q);
            const services = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAllServices(services);

            // 3. Find current index
            const index = services.findIndex(s => s.id === id);
            setCurrentIndex(index);
         } catch (error) {
            console.error("Error fetching data:", error);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, [id]);

   if (loading) {
      return <div className="flex justify-center items-center h-screen"><p>Loading service details...</p></div>;
   }

   if (!service) {
      return <div className="flex justify-center items-center h-screen"><p>Service not found.</p></div>;
   }

   return (
      <main className="bg-white min-h-screen  pb-12 text-slate-800">
         <PageHero
            title={service.title}
            subtitle={service.shortDesc}
            backgroundImage={service.imageUrl || "https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"}
         />
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100"
            >
               <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Service Overview</h2>
               <p className="text-lg text-slate-600 leading-relaxed mb-8 whitespace-pre-wrap">{service.fullDesc}</p>

               <h3 className="text-2xl font-bold text-slate-900 mb-6 pt-6 border-t border-slate-200">Key Features</h3>
               <ul className="space-y-4 mb-10">
                  {service.features && service.features.map((feature, index) => (
                     <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="flex items-start gap-4"
                     >
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                           <CheckSquare size={18} />
                        </div>
                        <span className="text-slate-700 text-lg leading-relaxed">{feature}</span>
                     </motion.li>
                  ))}
               </ul>

               {/* Pricing Section Nested in the Detail Card or below? Let's put it as a distinct section with cards */}
               <div className="pt-12 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-10">
                     <div>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">Access Premium Research</h3>
                        <p className="text-slate-500 font-medium">Choose a plan that fits your trading style</p>
                     </div>
                     <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
                        <ShieldCheck size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Secure Activation</span>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {[
                        { name: "Monthly", price: service.monthlyPrice ? `₹${service.monthlyPrice}` : "₹2,499", duration: "1 Month", desc: "Best for trying our accuracy", color: "blue", highlight: false },
                        { name: "Quarterly", price: service.quarterlyPrice ? `₹${service.quarterlyPrice}` : "₹6,499", duration: "3 Months", desc: "Most popular for beginners", color: "indigo", highlight: true, save: "15% Save" },
                        { name: "Half Yearly", price: service.halfYearlyPrice ? `₹${service.halfYearlyPrice}` : "₹10,999", duration: "6 Months", desc: "Institutional grade focus", color: "slate", highlight: false, save: "25% Save" },
                     ].map((plan, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.2 + i * 0.1 }}
                           whileHover={{ y: -8 }}
                           className={`relative group p-6 rounded-[2rem] border transition-all duration-500 overflow-hidden ${plan.highlight
                              ? "bg-slate-900 border-slate-900 shadow-2xl shadow-blue-900/10 text-white"
                              : "bg-slate-50 border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 text-slate-900"
                              }`}
                        >
                           {plan.save && (
                              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${plan.highlight ? "bg-blue-600 text-white" : "bg-emerald-100 text-emerald-700"}`}>
                                 {plan.save}
                              </div>
                           )}

                           <div className="mb-8">
                              <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${plan.highlight ? "text-blue-400" : "text-blue-600"}`}>
                                 {plan.name}
                              </p>
                              <h4 className="text-4xl font-black tracking-tighter mb-1">
                                 {plan.price}
                              </h4>
                              <p className={`text-xs font-bold ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                                 per {plan.duration}
                              </p>
                           </div>

                           <p className={`text-sm mb-8 font-medium leading-relaxed ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                              {plan.desc}
                           </p>
                           <Link to="/payment">
                              <motion.button
                                 whileHover={{ scale: 1.02 }}
                                 whileTap={{ scale: 0.98 }}
                                 className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${plan.highlight
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                    : "bg-slate-900 text-white hover:bg-blue-600"
                                    }`}
                              >
                                 Start Now
                              </motion.button></Link>


                        </motion.div>
                     ))}
                  </div>

                  <div className="mt-12 flex items-center justify-between gap-4">
                     {currentIndex > 0 ? (
                        <Link
                           to={`/services/${allServices[currentIndex - 1].id}`}
                           className="flex-1 group"
                        >
                           <motion.div
                              whileHover={{ x: -10 }}
                              className="p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all flex items-center gap-6"
                           >
                              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                 <ChevronLeft size={24} />
                              </div>
                              <div className="text-left">
                                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Previous Service</p>
                                 <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{allServices[currentIndex - 1].title}</h4>
                              </div>
                           </motion.div>
                        </Link>
                     ) : <div className="flex-1" />}

                     {currentIndex < allServices.length - 1 ? (
                        <Link
                           to={`/services/${allServices[currentIndex + 1].id}`}
                           className="flex-1 group"
                        >
                           <motion.div
                              whileHover={{ x: 10 }}
                              className="p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all flex items-center justify-between gap-6"
                           >
                              <div className="text-right flex-1">
                                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Next Service</p>
                                 <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{allServices[currentIndex + 1].title}</h4>
                              </div>
                              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                 <ChevronRight size={24} />
                              </div>
                           </motion.div>
                        </Link>
                     ) : <div className="flex-1" />}
                  </div>
               </div>
            </motion.div>

            {/* Navigation Buttons */}

         </div>
      </main>
   );
};

export default ServiceDetail;
