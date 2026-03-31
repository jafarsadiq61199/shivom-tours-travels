import React, { useState } from 'react';
import { 
  Car, Phone, MapPin, Clock, Users, Star, 
  ArrowRight, Menu, X, MessageCircle, Navigation 
} from 'lucide-react';
import { cn } from './utils/cn';

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Vehicle {
  name: string;
  type: string;
  price: string;
  capacity: string;
  image: string;
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

const services: Service[] = [
  {
    icon: <Car className="h-8 w-8" />,
    title: "Local Trips",
    desc: "Reliable cab service within the city for daily commute and short trips."
  },
  {
    icon: <Navigation className="h-8 w-8" />,
    title: "Outstation Trips",
    desc: "Comfortable rides to nearby cities and tourist destinations."
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Airport Transfers",
    desc: "On-time pickup and drop from airports with flight tracking."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Cab Rentals",
    desc: "Hourly or daily rentals for events, weddings and corporate use."
  }
];

const vehicles: Vehicle[] = [
  {
    name: "Sedan",
    type: "Swift Dzire or Equivalent",
    price: "₹13/km",
    capacity: "4 passengers",
    image: "https://tiimg.tistatic.com/fp/1/008/149/4-seater-manual-gearbox-petrol-or-diesel-steel-sheet-metal-family-car-499.jpg/id/1074/600/400",
    icon: <Car className="h-10 w-10" />
  },
  {
    name: "SUV",
    type: "Innova Crysta or Equivalent",
    price: "₹20/km",
    capacity: "6-7 passengers",
    image: "https://media.zigcdn.com/media/content/2026/Jan/6960c03947d91.png?tr=w-420/id/1015/600/400",
    icon: <Car className="h-10 w-10" />
  },
  {
    name: "Mini Bus",
    type: "Traveller or Tempo",
    price: "₹22/km",
    capacity: "12-15 passengers",
    image: "https://cpimg.tistatic.com/9597943/b/4/mini-bus.jpg/id/160/600/400",
    icon: <Users className="h-10 w-10" />
  }
];

const testimonials: Testimonial[] = [
  {
    name: "Ravin M",
    location: "Bangalore",
    text: "Very professional driver and clean car. Reached airport on time. Highly recommended!",
    rating: 5,
    image: "/id/64/128/128"
  },
  {
    name: "Priya Patel",
    location: "Mysore",
    text: "Outstation trip to Coorg was very comfortable. Driver was very polite and knowledgeable.",
    rating: 5,
    image: "/id/65/128/128"
  },
  {
    name: "Arjun Reddy",
    location: "Hyderabad",
    text: "Used for airport pickup. The cab arrived 15 mins early. Great service and pricing.",
    rating: 4,
    image: "/id/66/128/128"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    time: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        pickup: '',
        drop: '',
        date: '',
        time: ''
      });
      alert("Booking request received! We'll contact you shortly on " + formData.phone);
    }, 800);
  };

  const handleCall = () => {
    window.location.href = "tel:9916979567";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919916979567", "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 bg-gradient-to-br from-sky-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-inner">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-2xl tracking-tighter text-red-500">Shivom</div>
                <div className="text-[10px] text-slate-500 -mt-1">TOURS &amp; TRAVELS</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-9 text-sm font-medium">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Vehicles', id: 'vehicles' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "transition-colors hover:text-sky-600",
                    activeSection === item.id ? "text-sky-600 font-semibold" : "text-slate-600"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={handleCall}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-700 rounded-2xl hover:brightness-110 transition-all active:scale-[0.97]"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-slate-300 hover:bg-slate-50 rounded-2xl transition-all"
              >
                <MessageCircle className="h-4 w-4 text-green-500" />
                WhatsApp
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-700 ml-[200px]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white px-6 py-6 space-y-4">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Vehicles', id: 'vehicles' },
              { label: 'Pricing', id: 'pricing' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-lg font-medium text-slate-700 hover:text-sky-600"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={handleCall}
                className="w-full py-4 bg-sky-600 text-white rounded-3xl font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" /> 99169 79567
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-full py-4 border border-green-500 text-green-600 rounded-3xl font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_bottom_right,#0ea5e9_0%,#1e3a8a_70%)]"></div>
        
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `url("https://picsum.photos/id/1015/2000/1200")`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
        </div>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-1.5 rounded-3xl mb-6 text-sm tracking-widest font-medium">
            <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
            24x7 SUPPORT AVAILABLE
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4 leading-none">
            YOUR JOURNEY,<br />OUR RESPONSIBILITY
          </h1>
          <p className="max-w-md mx-auto text-xl text-white/80 mb-10">
            Safe, comfortable and affordable rides across Karnataka. 
            Trusted by thousands of happy travelers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('booking')}
              className="group flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-3xl font-semibold text-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all active:scale-95"
            >
              BOOK YOUR RIDE
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
            
            <button 
              onClick={handleCall}
              className="flex items-center justify-center gap-3 border-2 border-white/70 hover:border-white px-8 py-4 rounded-3xl font-semibold text-lg transition-all"
            >
              <Phone className="h-5 w-5" />
              CALL 99169 79567
            </button>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-white/40"></div>
              <span className="uppercase tracking-[2px] text-xs">From Staring Price ₹13/km</span>
            </div>
            <div>✓ Professional Drivers</div>
            <div>✓ GPS Enabled Vehicles</div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="text-white/60 text-xs tracking-widest mb-3">SCROLL TO EXPLORE</div>
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7">
              <div className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider bg-orange-100 text-orange-700 rounded-3xl mb-6">
                EST. 2018 • KARNATAKA
              </div>
              <h2 className="text-5xl font-semibold tracking-tight text-slate-900 mb-8 leading-none">
                Trusted travel partner<br />for over 6 years
              </h2>
              <div className="prose text-lg text-slate-600 max-w-prose">
                <p className="mb-6">
                  Shivom Tours and Travels was founded with a simple mission: 
                  to provide safe, reliable, and affordable transportation to our customers.
                </p>
                <p>
                  With a fleet of well-maintained vehicles and experienced drivers, 
                  we ensure every journey is comfortable and punctual. Our transparent 
                  pricing of <span className="font-semibold text-orange-600">₹14 per kilometer</span> makes us one of the most affordable options.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 bg-white p-8 rounded-3xl shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-semibold text-sky-600 mb-1">6000+</div>
                  <div className="text-sm text-slate-500">TRIPS COMPLETED</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-semibold text-sky-600 mb-1">98%</div>
                  <div className="text-sm text-slate-500">ON-TIME DELIVERY</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-semibold text-sky-600 mb-1">5900+</div>
                  <div className="text-sm text-slate-500">HAPPY CLIENTS</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-semibold text-sky-600 mb-1">24</div>
                  <div className="text-sm text-slate-500">CITIES COVERED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-orange-600 text-sm font-medium tracking-widest">WHAT WE OFFER</div>
            <h2 className="text-5xl font-semibold tracking-tighter mt-2">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white border border-slate-100 hover:border-orange-200 p-8 rounded-3xl transition-all hover:-translate-y-3 hover:shadow-xl"
              >
                <div className="h-16 w-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-2xl mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                <div className="mt-8 pt-8 border-t text-orange-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  LEARN MORE <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLES */}
      <section id="vehicles" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <div className="uppercase text-orange-400 text-sm tracking-[3px]">OUR FLEET</div>
              <h2 className="text-5xl font-semibold tracking-tighter">Comfortable Vehicles</h2>
            </div>
            <p className="max-w-xs text-slate-400 mt-4 md:mt-0">
              All vehicles are regularly serviced, air-conditioned and equipped with GPS
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, i) => (
              <div key={i} className="group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-orange-400 transition-all">
                <div className="h-64 relative">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-6 right-6 bg-black/70 px-4 py-1 text-xs rounded-3xl flex items-center gap-1">
                    {vehicle.icon}
                    <span>{vehicle.capacity}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <div className="text-3xl font-semibold">{vehicle.name}</div>
                      <div className="text-slate-400 text-sm">{vehicle.type}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-orange-400 font-mono text-xl">{vehicle.price}</div>
                      <div className="text-xs text-slate-500">PER KM</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex px-6 py-2 rounded-3xl bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">TRANSPARENT PRICING</div>
          
          <h6 className="text-4xl font-bold text-slate-900 tracking-tighter mb-8"> Seden    ₹13  <span className="text-4xl font-normal text-slate-400">per kilometer</span></h6>
          <h6 className="text-4xl font-bold text-slate-900 tracking-tighter mb-8"> Mini SUV ₹17  <span className="text-4xl font-normal text-slate-400">per kilometer</span></h6>
          <h6 className="text-4xl font-bold text-slate-900 tracking-tighter mb-8"> SUV      ₹20  <span className="text-4xl font-normal text-slate-400">per kilometer</span></h6>
          <h6 className="text-4xl font-bold text-slate-900 tracking-tighter mb-8"> Hycross Hybrid ₹22  <span className="text-4xl font-normal text-slate-400">per kilometer</span></h6>
          <h6 className="text-4xl font-bold text-slate-900 tracking-tighter mb-8"> Temple Travell ₹22  <span className="text-4xl font-normal text-slate-400">per kilometer</span></h6>

          <p className="max-w-md mx-auto text-xl text-slate-600 mb-12">
            No hidden charges. No waiting time fees. 
            Fuel, driver allowance and taxes included.
          </p>

          <div className="bg-slate-100 rounded-3xl p-10 max-w-md mx-auto">
            <div className="text-left space-y-6">
              <div className="flex justify-between items-center border-b pb-6">
                <div className="font-medium">Base rate</div>
                <div className="font-mono text-3xl font-semibold text-emerald-700">₹13</div>
              </div>
              <div className="flex justify-between text-slate-500 text-sm">
                <div>Minimum distance</div>
                <div>10 kilometers</div>
              </div>
              <div className="flex justify-between text-slate-500 text-sm">
                <div>Extra waiting charges</div>
                <div className="text-emerald-600 font-medium">FREE for first 15 mins</div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-xs text-slate-400">* Outstation trips may have different rates. Contact us for exact quote.</div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tighter">Why Choose Shivom?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="h-7 w-7" />, title: "On Time", desc: "Punctual service guaranteed. We value your time." },
              { icon: <Car className="h-7 w-7" />, title: "Clean Fleet", desc: "Sanitized vehicles with AC and music system." },
              { icon: <Users className="h-7 w-7" />, title: "Expert Drivers", desc: "Licensed, polite and familiar with local routes." },
              { icon: <Star className="h-7 w-7" />, title: "Best Price", desc: "₹20/km with zero hidden charges." },
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-slate-50 rounded-3xl">
                <div className="text-sky-500 mb-6">{feature.icon}</div>
                <div className="font-semibold text-xl mb-3">{feature.title}</div>
                <div className="text-slate-600">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-orange-500">TESTIMONIALS</div>
              <h3 className="text-4xl font-semibold tracking-tight">Happy Travelers</h3>
            </div>
            <div className="hidden md:block text-slate-400">— Real stories from real customers</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-8">“{testimonial.text}”</p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-11 w-11 rounded-2xl object-cover" 
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-slate-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-semibold tracking-tighter leading-none mb-8">
              Let's take you<br />to your destination
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="mt-1">
                  <Phone className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="font-medium text-lg mb-1">Call or WhatsApp</div>
                  <a href="tel:9916979567" className="text-4xl font-mono hover:text-orange-400 transition">99169 79567</a>
                  <div className="text-slate-400 text-sm mt-3">Available 8:00 AM - 10:00 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="mt-1">
                  <MapPin className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="font-medium text-lg mb-1">Visit Us</div>
                  <div className="text-slate-300">#309 , Hebbal, papanna Layout, 1st 'A' cross, V.Nagenahalli Main Road</div>
                  <div className="text-slate-400">Bangalore, Karnataka 560032</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="mt-1">
                  <Clock className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="font-medium text-lg mb-1">Working Hours</div>
                  <div className="text-slate-300">Monday - Sunday</div>
                  <div className="text-emerald-400 font-medium">6:00 AM — 12:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Fake Map */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-700 h-96 md:h-auto bg-slate-800 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-6 h-20 w-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                📍
              </div>
              <div className="text-2xl font-medium mb-2">Karnataka, India</div>
              <div className="text-slate-400 max-w-[220px]">We operate in Bangalore, Mysore, Coorg, Ooty and more</div>
            </div>
            
            <div className="absolute bottom-8 left-8 bg-white/90 text-slate-900 text-xs px-5 py-3 rounded-2xl flex items-center gap-2 shadow">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-ping"></div>
              LIVE TRACKING ENABLED
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-y-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-white mb-6">
              <div className="h-9 w-9 bg-white rounded-2xl flex items-center justify-center">
                <Car className="h-5 w-5 text-slate-950" />
              </div>
              <div className="font-bold text-3xl tracking-tighter">Shivom</div>
            </div>
            
            <p className="max-w-xs text-slate-500">
              Making travel easy, safe and affordable since 2018.
            </p>
            
            <div className="mt-8 flex gap-5">
              {[
                { name: 'facebook', icon: 'f', url: 'https://www.facebook.com/share/1Aa2yY6dbS/' },
                { name: 'instagram', icon: '📷', url: 'https://www.instagram.com/kanaka.raj.779?igsh=bDV3aTBha29venVh' },
                { name: 'twitter', icon: 'X', url: 'https://twitter.com/yourprofile' }
              ].map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 border border-slate-700 hover:border-orange-400 hover:bg-orange-400/10 transition-colors rounded-2xl flex items-center justify-center text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="uppercase text-xs tracking-widest mb-6 text-slate-500">QUICK LINKS</div>
            <div className="space-y-4 text-sm">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Our Fleet', id: 'vehicles' },
                { label: 'Services', id: 'services' },
                { label: 'Terms &amp; Conditions', id: 'terms' }
              ].map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-white cursor-pointer transition-colors block text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="uppercase text-xs tracking-widest mb-6 text-slate-500">CONTACT INFORMATION</div>
            
            <div className="space-y-5">
              <a href="tel:9916979567" className="block hover:text-white flex items-center gap-4 group">
                <div className="h-9 w-9 flex items-center justify-center bg-white/5 rounded-2xl group-hover:bg-white/10 transition">☎</div>
                <div>
                  <div className="text-xs text-slate-500">PHONE / WHATSAPP</div>
                  <div className="font-mono text-xl text-white">99169 79567</div>
                  <div className="font-mono text-xl text-white">63636 58544</div>
                </div>
              </a>
              
              <a href="mailto:kanakaraj1590@gmail.com" className="block hover:text-white flex items-center gap-4 group">
                <div className="h-9 w-9 flex items-center justify-center bg-white/5 rounded-2xl group-hover:bg-white/10 transition">✉</div>
                <div>
                  <div className="text-xs text-slate-500">EMAIL</div>
                  <div className="font-medium">shivomtravels99@gmail.com</div>
                  <div className="font-medium">kanakaraj1590@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-slate-500 mt-20">
          © {new Date().getFullYear()} Shivom Tours and Travels. All rights reserved.
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      
    </div>
  );
}
