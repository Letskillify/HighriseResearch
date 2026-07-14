import React, { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, X, Upload, CheckCircle2, Loader2, Trash2, 
  ShieldAlert, ShieldCheck, Edit2, LayoutDashboard, Mail, User, 
  Calendar, Phone, MessageSquare, Clock, LogOut 
} from "lucide-react";
import PageHero from "../Components/PageHero";

const Admin = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [isFetchingContacts, setIsFetchingContacts] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [currentTab, setCurrentTab] = useState("services");
  const [kycSubmissions, setKycSubmissions] = useState([]);
  const [isFetchingKyc, setIsFetchingKyc] = useState(false);
  const [consultations, setConsultations] = useState([]);
  const [isFetchingConsultations, setIsFetchingConsultations] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(auth.currentUser);
  }, []);

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
  };

  // Form State
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [features, setFeatures] = useState([""]);
  const [indexNumber, setIndexNumber] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [quarterlyPrice, setQuarterlyPrice] = useState("");
  const [halfYearlyPrice, setHalfYearlyPrice] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [existingImageUrl, setExistingImageUrl] = useState("");

  useEffect(() => {
    fetchServices();
    fetchContacts();
    fetchKyc();
    fetchConsultations();
  }, []);

  const fetchKyc = async () => {
    setIsFetchingKyc(true);
    try {
      const querySnapshot = await getDocs(collection(db, "kyc"));
      const kycData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      kycData.sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
      setKycSubmissions(kycData);
    } catch (error) {
      console.error("Error fetching KYC:", error);
    } finally {
      setIsFetchingKyc(false);
    }
  };

  const fetchConsultations = async () => {
    setIsFetchingConsultations(true);
    try {
      const querySnapshot = await getDocs(collection(db, "consultations"));
      const consultationData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      consultationData.sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
      setConsultations(consultationData);
    } catch (error) {
      console.error("Error fetching consultations:", error);
    } finally {
      setIsFetchingConsultations(false);
    }
  };

  const deleteConsultation = async (id) => {
    if (window.confirm("Delete this consultation lead?")) {
      try {
        await deleteDoc(doc(db, "consultations", id));
        fetchConsultations();
      } catch (error) {
        console.error("Error deleting consultation:", error);
      }
    }
  };

  const deleteKyc = async (id) => {
    if (window.confirm("Delete this KYC record?")) {
      try {
        await deleteDoc(doc(db, "kyc", id));
        fetchKyc();
      } catch (error) {
        console.error("Error deleting KYC:", error);
      }
    }
  };

  const fetchServices = async () => {
    setIsFetching(true);
    try {
      const querySnapshot = await getDocs(collection(db, "services"));
      const servicesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Sort by indexNumber if it exists
      servicesData.sort((a, b) => (Number(a.indexNumber) || 0) - (Number(b.indexNumber) || 0));
      setServices(servicesData);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setIsFetching(false);
    }
  };

  const fetchContacts = async () => {
    setIsFetchingContacts(true);
    try {
      const querySnapshot = await getDocs(collection(db, "contacts"));
      const contactsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Sort by timestamp if it exists, descending
      contactsData.sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
      setContacts(contactsData);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setIsFetchingContacts(false);
    }
  };

  const deleteContact = async (id) => {
    if (window.confirm("Delete this message?")) {
      try {
        await deleteDoc(doc(db, "contacts", id));
        fetchContacts();
      } catch (error) {
        console.error("Error deleting contact:", error);
      }
    }
  };

  const handleEdit = (service) => {
    setEditingId(service.id);
    setTitle(service.title);
    setShortDesc(service.shortDesc);
    setFullDesc(service.fullDesc);
    setFeatures(service.features && service.features.length > 0 ? service.features : [""]);
    setIndexNumber(service.indexNumber || "");
    setMonthlyPrice(service.monthlyPrice || "");
    setQuarterlyPrice(service.quarterlyPrice || "");
    setHalfYearlyPrice(service.halfYearlyPrice || "");
    setExistingImageUrl(service.imageUrl || "");
    setImagePreview(service.imageUrl || null);
    setImage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setShortDesc("");
    setFullDesc("");
    setFeatures([""]);
    setIndexNumber("");
    setMonthlyPrice("");
    setQuarterlyPrice("");
    setHalfYearlyPrice("");
    setImage(null);
    setImagePreview(null);
    setExistingImageUrl("");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await deleteDoc(doc(db, "services", id));
        fetchServices();
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    }
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const addFeature = () => setFeatures([...features, ""]);
  
  const removeFeature = (index) => {
    if (features.length > 1) {
      setFeatures(features.filter((_, i) => i !== index));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !shortDesc || !fullDesc) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);
    try {
      // 1. Filter empty features
      const validFeatures = features.filter(f => f.trim() !== "");

      let imageUrl = existingImageUrl;

      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "uglykgfd");
        
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/duzwys877/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Cloudinary upload failed");
        }

        const data = await response.json();
        imageUrl = data.secure_url;
      }

      const serviceData = {
        title,
        shortDesc,
        fullDesc,
        features: validFeatures,
        indexNumber: indexNumber ? Number(indexNumber) : 0,
        monthlyPrice,
        quarterlyPrice,
        halfYearlyPrice,
        imageUrl,
        updatedAt: serverTimestamp(),
      };

      if (editingId) {
        // Update existing
        await updateDoc(doc(db, "services", editingId), serviceData);
      } else {
        // Add new
        await addDoc(collection(db, "services"), {
          ...serviceData,
          createdAt: serverTimestamp(),
        });
      }

      setSuccess(true);
      fetchServices();
      resetForm();
      
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error saving service: ", error);
      alert("Failed to save service. " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#f8fafc] min-h-screen text-[#111827] flex">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-slate-900 h-screen sticky top-0 flex flex-col p-6 text-white shrink-0">
        <div className="flex items-center gap-3 mb-12 px-2">
          <ShieldAlert className="text-blue-400" size={32} />
          <h2 className="text-xl font-black tracking-tight">Admin</h2>
        </div>

        <nav className="flex-1 space-y-2">
          <button 
            onClick={() => setCurrentTab("services")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
              currentTab === "services" ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40" : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <LayoutDashboard size={20} />
            Services
          </button>
          <button 
            onClick={() => setCurrentTab("contacts")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
              currentTab === "contacts" ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40" : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <Mail size={20} />
            Contact Requests
            {contacts.length > 0 && <span className="ml-auto w-5 h-5 bg-red-500 rounded-full text-[10px] flex items-center justify-center">{contacts.length}</span>}
          </button>
          <button 
            onClick={() => setCurrentTab("kyc")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
              currentTab === "kyc" ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40" : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <ShieldAlert size={20} />
            KYC Submissions
            {kycSubmissions.length > 0 && <span className="ml-auto w-5 h-5 bg-blue-500 rounded-full text-[10px] flex items-center justify-center">{kycSubmissions.length}</span>}
          </button>
          <button 
            onClick={() => setCurrentTab("consultations")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
              currentTab === "consultations" ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40" : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <MessageSquare size={20} />
            Consultation Leads
            {consultations.length > 0 && <span className="ml-auto w-5 h-5 bg-amber-500 rounded-full text-[10px] flex items-center justify-center">{consultations.length}</span>}
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-800">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 mb-4">Account</p>
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                <User size={16} />
              </div>
              <div className="max-w-[100px]">
                <p className="text-xs font-bold truncate">{currentUser?.displayName || "Admin User"}</p>
                <p className="text-[10px] text-slate-500 truncate">{currentUser?.email}</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="p-2 text-slate-500 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-all"
              title="Sign Out"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto h-screen p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          
          <AnimatePresence mode="wait">
            {currentTab === "services" ? (
              <motion.div 
                key="services"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex justify-between items-end">
                  <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Manage Services</h1>
                    <p className="text-slate-500 font-medium">Create, edit and organize your offerings</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                  {/* Form Section */}
                  <div className="lg:col-span-3">
                    <motion.div 
                      className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
                    >
                      {/* ... existing form ... */}
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  {editingId ? <Edit2 className="text-blue-600" /> : <Plus className="text-blue-600" />}
                  {editingId ? "Edit Service" : "Add New Service"}
                </span>
                {editingId && (
                  <button 
                    onClick={resetForm}
                    className="text-xs text-slate-400 hover:text-red-500 flex items-center gap-1 font-medium transition-colors"
                  >
                    <X size={14} /> Cancel Edit
                  </button>
                )}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Service Title</label>
                    <input 
                      type="text" 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="e.g. Equity Research"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Index Number (Order)</label>
                    <input 
                      type="number" 
                      value={indexNumber}
                      onChange={(e) => setIndexNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="e.g. 1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Price (₹)</label>
                    <input 
                      type="text" 
                      value={monthlyPrice}
                      onChange={(e) => setMonthlyPrice(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="e.g. 2,499"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Quarterly Price (₹)</label>
                    <input 
                      type="text" 
                      value={quarterlyPrice}
                      onChange={(e) => setQuarterlyPrice(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="e.g. 6,499"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Half Yearly Price (₹)</label>
                    <input 
                      type="text" 
                      value={halfYearlyPrice}
                      onChange={(e) => setHalfYearlyPrice(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="e.g. 10,999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Short Description</label>
                  <input 
                    type="text" 
                    value={shortDesc}
                    onChange={(e) => setShortDesc(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Brief summary for cards..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Service Hero Image</label>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-1/3 aspect-video rounded-2xl bg-slate-100 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden relative group">
                      {imagePreview ? (
                        <>
                          <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Upload className="text-white" size={24} />
                          </div>
                        </>
                      ) : (
                        <div className="text-center p-4">
                          <Upload className="mx-auto text-slate-300 mb-2" size={32} />
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select Image</p>
                        </div>
                      )}
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-500 mb-4">
                        This image will appear in the Hero section of the service details page. 
                        Recommended size: 1920x1080px.
                      </p>
                      {image && (
                        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg inline-flex">
                          <CheckCircle2 size={14} /> {image.name}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Description</label>
                  <textarea 
                    value={fullDesc}
                    onChange={(e) => setFullDesc(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    placeholder="Provide full details about the service..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex justify-between items-end">
                    Key Features
                    <button 
                      type="button" 
                      onClick={addFeature}
                      className="text-xs text-blue-600 font-bold flex items-center hover:text-blue-800"
                    >
                      <Plus size={14} className="mr-1" /> Add Feature
                    </button>
                  </label>
                  <div className="space-y-3">
                    <AnimatePresence>
                      {features.map((feature, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex gap-2"
                        >
                          <input 
                            type="text" 
                            value={feature}
                            onChange={(e) => handleFeatureChange(index, e.target.value)}
                            className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                            placeholder={"Feature " + (index + 1)}
                          />
                          <button 
                            type="button" 
                            onClick={() => removeFeature(index)}
                            className="w-12 flex items-center justify-center rounded-xl bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-700 transition-colors"
                          >
                            <X size={18} />
                          </button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : editingId ? "Update Service" : "Publish Service"}
                  </button>
                  <AnimatePresence>
                    {success && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 p-4 rounded-xl bg-emerald-50 text-emerald-700 font-medium flex items-center justify-center gap-2 border border-emerald-100"
                      >
                        <CheckCircle2 size={20} /> Service published successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
              
              {/* Decorative blurs */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 pointer-events-none" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 pointer-events-none" />
            </motion.div>
          </div>

                  {/* List Section */}
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 px-2">Uploaded Services</h3>
                    
                    {isFetching ? (
                      <div className="flex justify-center p-8"><Loader2 className="animate-spin text-slate-400" /></div>
                    ) : services.length === 0 ? (
                      <div className="bg-slate-100 rounded-2xl p-8 text-center text-slate-500 text-sm">
                        No services uploaded yet.
                      </div>
                    ) : (
                      <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 pb-4 
                        [&::-webkit-scrollbar]:w-1.5 
                        [&::-webkit-scrollbar-track]:bg-transparent
                        [&::-webkit-scrollbar-thumb]:bg-slate-200 
                        [&::-webkit-scrollbar-thumb]:rounded-full"
                      >
                        {services.map(service => (
                          <motion.div 
                            layoutId={service.id}
                            key={service.id}
                            className="bg-white p-4 rounded-2xl flex gap-4 border border-slate-100 shadow-sm group hover:shadow-md transition-shadow"
                          >
                            <div className="w-16 h-16 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden border border-slate-100">
                              {service.imageUrl ? (
                                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-300">
                                  <Upload size={16} />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 flex flex-col justify-center">
                              <h4 className="font-bold text-slate-900 leading-tight mb-1">{service.title}</h4>
                              <p className="text-xs text-slate-500 line-clamp-2">{service.shortDesc}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <button 
                                onClick={() => handleEdit(service)}
                                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                title="Edit Service"
                              >
                                <Edit2 size={16} />
                              </button>
                              <button 
                                onClick={() => handleDelete(service.id)}
                                className="w-9 h-9 rounded-full flex items-center justify-center text-red-300 hover:bg-red-50 hover:text-red-500 transition-colors"
                                title="Delete Service"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : currentTab === "contacts" ? (
              <motion.div 
                key="contacts"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight">Contact Requests</h1>
                  <p className="text-slate-500 font-medium">Inquiries from potential clients</p>
                </div>

                {isFetchingContacts ? (
                  <div className="flex justify-center p-20"><Loader2 className="animate-spin text-blue-600" size={40} /></div>
                ) : contacts.length === 0 ? (
                  <div className="bg-white border border-slate-100 rounded-[2rem] p-20 text-center shadow-sm">
                    <Mail size={48} className="mx-auto text-slate-200 mb-4" />
                    <p className="text-slate-500 font-bold">No contact requests yet.</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {contacts.map((contact) => (
                      <motion.div 
                        key={contact.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col group"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                            <User size={24} />
                          </div>
                          <button 
                            onClick={() => deleteContact(contact.id)}
                            className="w-10 h-10 rounded-xl bg-red-50 text-red-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="text-lg font-black text-slate-900">{contact.fullName}</h4>
                            <p className="text-xs text-blue-600 font-bold uppercase tracking-widest">New Query</p>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-3 text-slate-500">
                              <Phone size={14} className="shrink-0" />
                              <span className="text-sm font-bold">{contact.phone}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-500">
                              <Mail size={14} className="shrink-0" />
                              <span className="text-sm font-bold truncate">{contact.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                              <Clock size={14} className="shrink-0" />
                              <span className="text-[10px] font-black uppercase tracking-wider">
                                {contact.timestamp ? new Date(contact.timestamp.seconds * 1000).toLocaleString() : "Recently"}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-auto p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <MessageSquare size={12} /> Message
                          </p>
                          <p className="text-sm font-medium text-slate-700 leading-relaxed italic line-clamp-4">
                            "{contact.message}"
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : currentTab === "consultations" ? (
              <motion.div 
                key="consultations"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight">Consultation Leads</h1>
                  <p className="text-slate-500 font-medium">Inquiries from the popup and service buttons</p>
                </div>

                {isFetchingConsultations ? (
                  <div className="flex justify-center p-20"><Loader2 className="animate-spin text-blue-600" size={40} /></div>
                ) : consultations.length === 0 ? (
                  <div className="bg-white border border-slate-100 rounded-[2rem] p-20 text-center shadow-sm">
                    <MessageSquare size={48} className="mx-auto text-slate-200 mb-4" />
                    <p className="text-slate-500 font-bold">No consultation leads yet.</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {consultations.map((lead) => (
                      <motion.div 
                        key={lead.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col group"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                            <MessageSquare size={24} />
                          </div>
                          <button 
                            onClick={() => deleteConsultation(lead.id)}
                            className="w-10 h-10 rounded-xl bg-red-50 text-red-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="text-lg font-black text-slate-900">{lead.name}</h4>
                            <div className="flex items-center gap-2">
                              <span className="text-[8px] px-2 py-0.5 bg-blue-50 text-blue-600 font-black uppercase rounded-full">Lead</span>
                              <span className="text-[8px] px-2 py-0.5 bg-slate-50 text-slate-500 font-black uppercase rounded-full">Source: {lead.source === '/' ? 'Home' : 'Service'}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-3 text-slate-500">
                              <Phone size={14} className="shrink-0" />
                              <span className="text-sm font-bold">{lead.mobile}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-500">
                              <Mail size={14} className="shrink-0" />
                              <span className="text-sm font-bold truncate">{lead.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                              <Clock size={14} className="shrink-0" />
                              <span className="text-[10px] font-black uppercase tracking-wider">
                                {lead.timestamp ? new Date(lead.timestamp.seconds * 1000).toLocaleString() : "Recently"}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-auto">
                          <a 
                            href={`https://wa.me/91${lead.mobile?.replace(/\D/g,'')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 bg-emerald-500 text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all"
                          >
                            Reply on WhatsApp
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div 
                key="kyc"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight">KYC Submissions</h1>
                  <p className="text-slate-500 font-medium">Identity verification & agreements</p>
                </div>

                {isFetchingKyc ? (
                  <div className="flex justify-center p-20"><Loader2 className="animate-spin text-blue-600" size={40} /></div>
                ) : kycSubmissions.length === 0 ? (
                  <div className="bg-white border border-slate-100 rounded-[2rem] p-20 text-center shadow-sm">
                    <ShieldCheck size={48} className="mx-auto text-slate-200 mb-4" />
                    <p className="text-slate-500 font-bold">No KYC submissions found.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6">
                    {kycSubmissions.map((kyc) => (
                      <motion.div 
                        key={kyc.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col lg:flex-row gap-8 group"
                      >
                         <div className="flex-1 space-y-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                <User size={24} />
                              </div>
                              <div>
                                <h3 className="text-xl font-black text-slate-900">{kyc.fullName}</h3>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                                  Submitted on {kyc.timestamp ? new Date(kyc.timestamp.seconds * 1000).toLocaleDateString() : "Recently"}
                                </p>
                              </div>
                            </div>
                            <button 
                              onClick={() => deleteKyc(kyc.id)}
                              className="w-10 h-10 rounded-xl bg-red-50 text-red-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-3xl">
                             <div className="space-y-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Father's Name</p>
                                <p className="text-sm font-bold text-slate-700">{kyc.fatherName}</p>
                             </div>
                             <div className="space-y-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mobile</p>
                                <p className="text-sm font-bold text-slate-700">{kyc.mobile}</p>
                             </div>
                             <div className="space-y-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</p>
                                <p className="text-sm font-bold text-slate-700">{kyc.email}</p>
                             </div>
                             <div className="space-y-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">DOB</p>
                                <p className="text-sm font-bold text-slate-700">{kyc.dob}</p>
                             </div>
                             <div className="space-y-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">PAN Number</p>
                                <p className="text-sm font-black text-blue-600 uppercase italic">{kyc.panNumber}</p>
                             </div>
                             <div className="space-y-1 sm:col-span-2">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Address</p>
                                <p className="text-sm font-bold text-slate-700 leading-relaxed">{kyc.address}</p>
                             </div>
                          </div>
                        </div>

                        <div className="lg:w-80 space-y-4">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Document Vault</p>
                          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                            {[
                              { url: kyc.panUrl, name: 'PAN Card' },
                              { url: kyc.aadharFrontUrl, name: 'Aadhar Front' },
                              { url: kyc.aadharBackUrl, name: 'Aadhar Back' }
                            ].map((doc, i) => (
                              <a 
                                key={i}
                                href={doc.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group/doc relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100"
                              >
                                {doc.url ? (
                                  <>
                                    <img src={doc.url} alt={doc.name} className="w-full h-full object-cover transition-transform duration-500 group-hover/doc:scale-110" />
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover/doc:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1">
                                      <span className="text-[10px] text-white font-black uppercase tracking-widest">{doc.name}</span>
                                      <span className="text-[8px] text-blue-300 font-bold uppercase tracking-[0.2em]">Click to expand</span>
                                    </div>
                                  </>
                                ) : (
                                  <div className="w-full h-full flex flex-col items-center justify-center gap-1 opacity-40">
                                    <ShieldCheck size={20} />
                                    <span className="text-[8px] font-black uppercase tracking-widest">Missing</span>
                                  </div>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default Admin;
