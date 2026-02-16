
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Formspree as the functional endpoint
      // Users should replace 'mnnnyyzz' with their actual Formspree ID
      const response = await fetch('https://formspree.io/f/mnnnyyzz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _to: 'amnawaheed445@gmail.com'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#020617] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />
        
        <div className="grid lg:grid-cols-5 gap-12 bg-[#0f172a] rounded-3xl overflow-hidden border border-slate-800 p-4 sm:p-12 relative">
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-2xl font-bold text-white">Let's discuss a project</h4>
            <p className="text-slate-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:amnawaheed445@gmail.com" className="flex items-center gap-4 group cursor-pointer no-underline">
                <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500 group-hover:text-white text-orange-400 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-tight">Email Me</p>
                  <p className="text-slate-200 font-bold">amnawaheed445@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:03076821543" className="flex items-center gap-4 group cursor-pointer no-underline">
                <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500 group-hover:text-white text-orange-400 transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-tight">Call Me</p>
                  <p className="text-slate-200 font-bold">0307-6821543</p>
                </div>
              </a>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <p className="text-sm text-slate-500 font-bold mb-4 uppercase tracking-widest">Social Profiles</p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/amna-waheed" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1e293b] border border-slate-700 rounded-xl text-slate-400 hover:text-orange-400 hover:border-orange-400 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/amnawaheed" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1e293b] border border-slate-700 rounded-xl text-slate-400 hover:text-orange-400 hover:border-orange-400 transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-[#020617] p-6 sm:p-10 rounded-2xl shadow-2xl border border-slate-800 relative overflow-hidden">
            {submitStatus === 'success' && (
              <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6 animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="w-20 h-20 text-green-500 mb-6 animate-bounce" />
                <h5 className="text-3xl font-bold text-white mb-2">Message Sent!</h5>
                <p className="text-slate-400 mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="px-8 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-bold text-slate-400 mb-2">Full Name</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Your Name" 
                    className={`w-full px-4 py-3 rounded-xl bg-[#0f172a] border ${errors.name ? 'border-red-500/50' : 'border-slate-700'} text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0">{errors.name}</p>}
                </div>
                <div className="relative">
                  <label className="block text-sm font-bold text-slate-400 mb-2">Email Address</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="name@email.com" 
                    className={`w-full px-4 py-3 rounded-xl bg-[#0f172a] border ${errors.email ? 'border-red-500/50' : 'border-slate-700'} text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0">{errors.email}</p>}
                </div>
              </div>
              <div className="relative pt-2">
                <label className="block text-sm font-bold text-slate-400 mb-2">Subject</label>
                <input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text" 
                  placeholder="How can I help?" 
                  className={`w-full px-4 py-3 rounded-xl bg-[#0f172a] border ${errors.subject ? 'border-red-500/50' : 'border-slate-700'} text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all`}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0">{errors.subject}</p>}
              </div>
              <div className="relative pt-2">
                <label className="block text-sm font-bold text-slate-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  placeholder="Tell me about your project..." 
                  className={`w-full px-4 py-3 rounded-xl bg-[#0f172a] border ${errors.message ? 'border-red-500/50' : 'border-slate-700'} text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all resize-none`}
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0">{errors.message}</p>}
              </div>

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                  <AlertCircle className="w-5 h-5" />
                  <p className="text-sm">Something went wrong. Please try again or email me directly.</p>
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden relative"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
