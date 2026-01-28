import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, PawPrint, MessageCircle } from "lucide-react";

export default function PawPatrolStoke() {
  const pricing = [
    { title: '1 to 1 Solo Walk (1 hour)', price: '£18' },
    { title: '30 Minute 1 to 1', price: '£9' },
    { title: '1 Hour Single Dog Walk', price: '£14' },
    { title: '1 Hour Dog Walk with 2 Dogs (Same House)', price: '£22' },
    { title: '30 Minute Solo Dog Walk', price: '£7' },
    { title: '30 Minute 2 Dogs (Same House)', price: '£8' },
    { title: 'Pet Sitting 1hr', price: '£14' },
    { title: 'Pet Sitting 30mins', price: '£7' },
    { title: 'Puppy Sitting', price: '£18' }
  ];

  return (
    <div className="min-h-screen relative text-gray-800 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1603052875332-1e7c3d57b4d4')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />

      {/* Header Image */}
      <div className="absolute top-0 left-0 w-full h-64 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558788353-f76d92427f16" 
          alt="Golden Retriever" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 p-6 max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-pink-600 flex justify-center items-center gap-2 drop-shadow-lg animate-fadeInDown">
            <PawPrint className="w-10 h-10" /> Paw Patrol Stoke
          </h1>
          <p className="text-lg mt-3 text-gray-700 animate-fadeInUp">
            Fun, friendly, and reliable dog walking in Stoke-on-Trent 🐶
          </p>
        </header>

        {/* Services */}
        <section className="grid gap-6 md:grid-cols-3 mb-12">
          {['Daily Walks', 'Adventure Hikes', 'Home Visits'].map((service, idx) => (
            <Card key={idx} className="shadow-xl bg-white/80 backdrop-blur hover:scale-105 transition-transform duration-500 animate-fadeInUp">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">{service}</h2>
                <p>
                  {service === 'Daily Walks' && 'Regular walks to keep your dog happy and social.'}
                  {service === 'Adventure Hikes' && 'Exciting outdoor adventures for energetic pups.'}
                  {service === 'Home Visits' && 'Feeding, playtime, and cuddles when you’re away.'}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6 animate-fadeInUp">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((item, idx) => (
              <Card key={idx} className="shadow-lg bg-white/80 backdrop-blur hover:scale-105 transition-transform duration-500 animate-fadeInUp">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-3xl font-extrabold text-pink-600 animate-bounce-slow">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Facebook */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fadeInUp">Follow Our Pack!</h2>
          <p className="mb-4 animate-fadeInUp">See our latest walks, happy dogs, and updates on Facebook.</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white flex gap-2 mx-auto animate-bounce-slow">
            <Facebook className="w-5 h-5" /> Visit Our Facebook Page
          </Button>
        </section>

        {/* Contact & Booking */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6 animate-fadeInUp">Contact & Booking</h2>
          <Card className="shadow-xl bg-white/80 backdrop-blur hover:scale-105 transition-transform duration-500 animate-fadeInUp">
            <CardContent className="p-6">
              <form className="grid gap-4" action="mailto:lisa.hewitt@live.co.uk" method="post" encType="text/plain">
                <input className="border rounded-lg p-3" name="name" placeholder="Your Name" required />
                <input className="border rounded-lg p-3" type="email" name="email" placeholder="Email Address" required />
                <input className="border rounded-lg p-3" name="phone" placeholder="Phone Number" />
                <input className="border rounded-lg p-3" name="dog" placeholder="Dog's Name & Breed" />
                <textarea className="border rounded-lg p-3" name="message" placeholder="Message / Booking Details" rows={4}></textarea>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white animate-bounce-slow" type="submit">Send Booking Request</Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* WhatsApp */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3 animate-fadeInUp">Prefer WhatsApp?</h2>
          <p className="mb-4 animate-fadeInUp">Message us directly for quick bookings & questions!</p>
          <a href="https://wa.me/447496470044" target="_blank" rel="noreferrer">
            <Button className="bg-green-600 hover:bg-green-700 text-white flex gap-2 mx-auto animate-bounce-slow">
              <MessageCircle className="w-5 h-5" /> WhatsApp: 07496 470044
            </Button>
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 mb-6">
          <p>© {new Date().getFullYear()} Paw Patrol Stoke. All paws reserved 🐾</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
        .animate-fadeInUp { animation: fadeInUp 1s forwards; }
        .animate-fadeInDown { animation: fadeInDown 1s forwards; }
      `}</style>
    </div>
  );
}
