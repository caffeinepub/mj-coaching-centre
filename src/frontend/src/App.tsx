import {
  Award,
  BookOpen,
  Building2,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Phone,
  Shield,
  Star,
  Target,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About Us", href: "#about" },
  { label: "Faculty", href: "#faculty" },
  { label: "Contact", href: "#contact" },
];

const COURSES = [
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Competitive Exam Prep",
    subtitle: "ADRE / DME",
    description:
      "Comprehensive coaching for Assam Direct Recruitment Exam and District Medical Establishment exams with structured syllabus coverage.",
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: "Assam Police Exam",
    subtitle: "AB/UB Constable & SI",
    description:
      "Targeted preparation for Assam Police recruitment exams — physical standards, written tests, and interview readiness.",
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "All Assam Govt Exams",
    subtitle: "State Government Jobs",
    description:
      "Preparation for all Assam government competitive exams including APSC, Grade III/IV, and departmental exams.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "School Tuition",
    subtitle: "Class V to X",
    description:
      "Expert tuition in Mathematics, Science, and English for school students from Class V to X, aligned with SEBA and CBSE boards.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    title: "Skill Development",
    subtitle: "Communication & Personality",
    description:
      "Spoken English, communication skills, and personality development programs to boost confidence and career readiness.",
  },
  {
    icon: <Monitor className="w-6 h-6 text-white" />,
    title: "Computer Courses",
    subtitle: "Basic to Advanced",
    description:
      "Practical computer literacy courses covering MS Office, internet basics, typing skills, and digital fundamentals.",
  },
];

const FACULTY = [
  {
    initials: "SS",
    name: "Subject Specialists",
    qualification: "B.Sc. / M.Sc. Degree Holders",
    role: "Science & Mathematics",
    color: "bg-teal-500",
    description:
      "Deep conceptual clarity in Science and Mathematics for Classes V–X.",
  },
  {
    initials: "PE",
    name: "Professional Educators",
    qualification: "B.Ed. / D.El.Ed. Certified",
    role: "Pedagogy & Teaching Methods",
    color: "bg-navy-500",
    description:
      "Certified educators bringing the best pedagogical methods to every classroom.",
  },
  {
    initials: "CE",
    name: "Competitive Educators",
    qualification: "APSC / UPSC Qualified",
    role: "Government Exam Coaching",
    color: "bg-teal-700",
    description:
      "Experienced mentors who have cleared state and national competitive exams.",
  },
];

const WHY_CHOOSE = [
  { icon: <GraduationCap className="w-7 h-7" />, label: "Expert Guidance" },
  { icon: <ClipboardList className="w-7 h-7" />, label: "Regular Assessments" },
  { icon: <BookOpen className="w-7 h-7" />, label: "Modern Curriculum" },
  { icon: <Building2 className="w-7 h-7" />, label: "Disciplined Environment" },
  { icon: <Users className="w-7 h-7" />, label: "Subject Specialists" },
  { icon: <Star className="w-7 h-7" />, label: "Proven Results" },
];

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id.replace("#", ""));
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = NAV_LINKS.map((l) => l.href);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 flex-shrink-0"
              data-ocid="nav.link"
            >
              <img
                src="/assets/generated/mj-logo-transparent.dim_300x100.png"
                alt="MJ Coaching Centre"
                className="h-10 w-auto object-contain"
              />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  data-ocid="nav.link"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href
                      ? "text-teal-500 bg-teal-50"
                      : "text-gray-600 hover:text-teal-500 hover:bg-teal-50"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick("#contact")}
                data-ocid="nav.primary_button"
                className="ml-4 px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Enroll Now
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
            >
              <div className="px-4 py-3 space-y-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    data-ocid="nav.link"
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.href
                        ? "text-teal-500 bg-teal-50"
                        : "text-gray-700 hover:text-teal-500 hover:bg-teal-50"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => handleNavClick("#contact")}
                  data-ocid="nav.primary_button"
                  className="block w-full text-center mt-2 px-5 py-3 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-full transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/assets/generated/hero-classroom.dim_1200x600.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-500/92 via-navy-500/75 to-navy-500/30" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <span className="inline-block px-4 py-1.5 bg-teal-500/20 border border-teal-400/40 text-teal-300 text-sm font-semibold rounded-full mb-6 tracking-wide uppercase">
                MJ Coaching Centre
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Empowering Students,{" "}
                <span className="text-teal-400">Building Futures</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Quality coaching for school tuition (Class V–X), competitive
                government exams, and skill development — guided by expert
                educators committed to your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => scrollTo("#courses")}
                  data-ocid="hero.primary_button"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Explore Courses <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  data-ocid="hero.secondary_button"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/60 hover:border-white text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/10"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
                {[
                  { value: "500+", label: "Students Enrolled" },
                  { value: "6", label: "Course Programs" },
                  { value: "10+", label: "Expert Faculty" },
                  { value: "95%", label: "Success Rate" },
                ].map((stat) => (
                  <div key={stat.label} className="py-4 px-6 text-center">
                    <div className="text-2xl font-display font-bold text-teal-300">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-300 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="/assets/generated/about-students.dim_600x500.jpg"
                    alt="Students at MJ Coaching Centre"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-teal-500 text-white rounded-2xl p-5 shadow-xl">
                  <div className="text-2xl font-display font-bold">5+</div>
                  <div className="text-xs font-medium opacity-90">
                    Years of Excellence
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
                  About Us
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-500 mb-5 leading-tight">
                  A Centre Built on{" "}
                  <span className="text-teal-500">Academic Excellence</span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-7">
                  At MJ Coaching Centre, we believe quality education starts
                  with quality educators. Our mission is to nurture every
                  student's potential through structured learning, dedicated
                  mentorship, and a disciplined environment.
                </p>
                <ul className="space-y-3">
                  {[
                    "Personalized teaching tailored to each student's learning pace",
                    "Weekly tests and assessments to track academic progress",
                    "Curriculum designed for both board exams and competitive exams",
                    "Peaceful and structured learning environment",
                    "Highly qualified faculty with B.Sc., M.Sc., B.Ed., APSC/UPSC credentials",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Courses / Key Offerings */}
        <section id="courses" className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
                Our Programmes
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-500 mb-4">
                Key Offerings & Courses
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-base">
                Comprehensive programmes designed for academic excellence and
                career-oriented success.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COURSES.map((course, i) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  data-ocid={`courses.item.${i + 1}`}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-500 flex items-center justify-center mb-5 group-hover:bg-teal-500 transition-colors duration-300">
                    {course.icon}
                  </div>
                  <div className="mb-1">
                    <h3 className="font-display font-bold text-lg text-navy-500">
                      {course.title}
                    </h3>
                    <span className="text-xs font-semibold text-teal-500 uppercase tracking-wide">
                      {course.subtitle}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mt-2 mb-4">
                    {course.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => scrollTo("#contact")}
                    data-ocid={`courses.item.${i + 1}.button`}
                    className="inline-flex items-center gap-1 text-teal-500 hover:text-teal-600 font-semibold text-sm transition-colors"
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section id="faculty" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
                Our Team
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-500 mb-4">
                Meet Our Faculty
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-base">
                Highly qualified and experienced educators dedicated to your
                academic growth.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {FACULTY.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-ocid={`faculty.item.${i + 1}`}
                  className="bg-background rounded-2xl p-8 text-center shadow-card border border-gray-100 hover:shadow-card-hover transition-all duration-300"
                >
                  <div
                    className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-5 shadow-md`}
                  >
                    <span className="text-2xl font-display font-bold text-white">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy-500 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal-500 text-sm font-semibold mb-1">
                    {member.qualification}
                  </p>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
                Why MJ Coaching
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-500 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-base">
                We offer more than coaching — we offer a complete learning
                ecosystem.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {WHY_CHOOSE.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-white rounded-2xl p-5 text-center shadow-card border border-gray-100 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-teal-50 group-hover:bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                    <span className="text-teal-500 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </span>
                  </div>
                  <p className="text-navy-500 font-semibold text-xs leading-snug">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-20 bg-navy-500 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-300 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5">
                Ready to Start Your Journey?
              </h2>
              <p className="text-gray-300 text-base mb-8 max-w-xl mx-auto">
                Join hundreds of students who have already transformed their
                academic and career prospects at MJ Coaching Centre.
              </p>
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                data-ocid="cta.primary_button"
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-base"
              >
                Enroll Now <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
                Get In Touch
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-500 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-base">
                Have questions? Reach out to us and our team will get back to
                you promptly.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4 p-5 bg-background rounded-2xl border border-gray-100">
                  <div className="w-11 h-11 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-500 mb-1">
                      Our Location
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      MJ Coaching Centre, Assam, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-background rounded-2xl border border-gray-100">
                  <div className="w-11 h-11 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-500 mb-1">
                      Phone Number
                    </div>
                    <p className="text-gray-500 text-sm">+91 60007 09722</p>
                    <p className="text-gray-500 text-sm">+91 99572 93378</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-background rounded-2xl border border-gray-100">
                  <div className="w-11 h-11 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-500 mb-1">
                      Email Address
                    </div>
                    <p className="text-gray-500 text-sm">
                      mjcoachingcentre1@gmail.com
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-navy-500 rounded-2xl text-white">
                  <h3 className="font-display font-bold text-lg mb-3">
                    Batch Timings
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex justify-between">
                      <span>Morning Batch</span>
                      <span className="text-teal-300 font-medium">
                        6:00 AM – 9:00 AM
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Afternoon Batch</span>
                      <span className="text-teal-300 font-medium">
                        2:00 PM – 5:00 PM
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Evening Batch</span>
                      <span className="text-teal-300 font-medium">
                        5:30 PM – 8:30 PM
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Enquiry Form */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background rounded-2xl p-8 border border-gray-100 shadow-card"
              >
                <h3 className="font-display font-bold text-xl text-navy-500 mb-6">
                  Send an Enquiry
                </h3>
                <EnquiryForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <img
                src="/assets/generated/mj-logo-transparent.dim_300x100.png"
                alt="MJ Coaching Centre"
                className="h-10 w-auto object-contain mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Empowering students with knowledge, skills, and confidence to
                achieve their academic and career goals.
              </p>
            </div>

            <div>
              <h4 className="font-display font-bold text-white text-base mb-5">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href)}
                      data-ocid="footer.link"
                      className="text-gray-400 hover:text-teal-400 text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-white text-base mb-5">
                Contact Info
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  MJ Coaching Centre, Assam, India
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>
                    +91 60007 09722
                    <br />
                    +91 99572 93378
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  mjcoachingcentre1@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} MJ Coaching Centre. All rights
              reserved.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-teal-400 text-xs transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        data-ocid="contact.success_state"
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-teal-500" />
        </div>
        <h3 className="font-display font-bold text-xl text-navy-500 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-500 text-sm">
          Your enquiry has been submitted. We'll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", phone: "", course: "", message: "" });
          }}
          className="mt-6 text-teal-500 hover:text-teal-600 text-sm font-semibold transition-colors"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="enquiry-name"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Full Name
        </label>
        <input
          id="enquiry-name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          data-ocid="contact.input"
          placeholder="Your full name"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition bg-white"
        />
      </div>
      <div>
        <label
          htmlFor="enquiry-phone"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Phone Number
        </label>
        <input
          id="enquiry-phone"
          type="tel"
          required
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          data-ocid="contact.input"
          placeholder="Your phone number"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition bg-white"
        />
      </div>
      <div>
        <label
          htmlFor="enquiry-course"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Course of Interest
        </label>
        <select
          id="enquiry-course"
          required
          value={form.course}
          onChange={(e) => setForm((p) => ({ ...p, course: e.target.value }))}
          data-ocid="contact.select"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition bg-white text-gray-700"
        >
          <option value="">Select a course</option>
          <option>Competitive Exam Prep (ADRE/DME)</option>
          <option>Assam Police Exam</option>
          <option>All Assam Govt Exams</option>
          <option>School Tuition (Class V–X)</option>
          <option>Skill Development</option>
          <option>Computer Courses</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="enquiry-message"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Message (Optional)
        </label>
        <textarea
          id="enquiry-message"
          rows={3}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          data-ocid="contact.textarea"
          placeholder="Any additional information..."
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition bg-white resize-none"
        />
      </div>
      <button
        type="submit"
        data-ocid="contact.submit_button"
        className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md text-sm"
      >
        Submit Enquiry
      </button>
    </form>
  );
}
