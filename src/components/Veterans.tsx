import { Heart, Shield } from 'lucide-react';

export default function Veterans() {
  return (
    <section id="veterans" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="350" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" strokeDasharray="10,10" />
          <circle cx="150" cy="150" r="120" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.5" />
          <circle cx="650" cy="200" r="100" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.5" />
          <circle cx="200" cy="650" r="140" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.5" />
          <circle cx="700" cy="700" r="110" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.5" />
          <path d="M 100 400 Q 250 300, 400 400 T 700 400" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" strokeDasharray="5,5" />
          <path d="M 150 600 Q 400 500, 650 600" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold-600 flex items-center justify-center">
              <Shield className="text-gold-600" size={32} />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4 font-semibold px-2 sm:px-0">
            Honoring My Father and Our <span className="text-gold-600">Veterans</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-gold-500 to-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 sm:space-y-8 text-gray-800 leading-relaxed">
          <p className="text-base sm:text-lg">
            My father was always doing for others during his life. Growing up, he would be involved in the band boosters when I was in marching band. At church he was a Eucharist Minister, part of the Knights of Columbus and part of the Jail Ministry where he would visit local inmates. He was always involved in some type of organization doing and giving of his time. This first began when he decided to enlist in the US Army. He dropped out of high school to serve his country and joined and subsequently was sent to Vietnam.
          </p>

          <p className="text-base sm:text-lg">
            My father came back in one piece physically, but not mentally. My father suffered for years with an undiagnosed PTSD. He had the classic signs of hypervigilance and the rage that was just below the surface. There were many occasions growing up with my father that I would witness my father getting upset at something trivial, such as, a glass being filled too much with ice to then see him explode angrily. As a child I did not understand why my father could be so loving and supportive and then suddenly be enraged. As a child, it was very confusing. I spent a lot of time in my room and would stay there until things calmed down.
          </p>

          <p className="text-base sm:text-lg">
            As I got older and entered college, my father would come to visit me, and I immediately could feel he was having a difficult day. Being empathic, I could feel his anxiety and rage and it was overwhelming for me. It was difficult to be around him until I learned about what he was experiencing.
          </p>

          <p className="text-base sm:text-lg">
            Our soldiers are brave young men and women who vowed to protect our freedoms at a great cost to them. Not just physically, but mentally and emotionally as well. I have other family members who have served and suffered from PTSD as well. It is an "unseen" slayer that robs the person of their sense of security and peace. It is important that we support our soldiers when they return home so they can find that "peace" they need. They need our support to transition back into civilian life. For this reason, I will be giving 20-minute readings for $20 for those who are interested and will donate the proceeds to the Wounded Warrior Project. The Wounded Warrior Project helps soldiers with resources for when they return to civilian life.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-gold-300">
          <div className="text-center mb-6">
            <div className="inline-block mb-4">
              <Heart className="text-gold-600 mx-auto" size={32} />
            </div>
            <h3 className="text-xl sm:text-2xl text-gray-900 mb-3 sm:mb-4 font-semibold">
              Supporting Our Veterans
            </h3>
            <p className="text-base sm:text-lg text-gray-800 mb-4 sm:mb-6">
              20-minute readings for <span className="text-gold-600 font-semibold">$20</span>
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              All proceeds will be donated to the Wounded Warrior Project
            </p>
            <a
              href="#contact"
              className="inline-block bg-gold-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full hover:bg-gold-700 transition-colors duration-200 font-medium text-sm sm:text-base shadow-lg"
            >
              Book a Reading
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm sm:text-base text-gray-700 mb-2">
            For more information about the Wounded Warrior Project, please visit
          </p>
          <a
            href="https://www.woundedwarriorproject.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-600 hover:text-gold-700 font-semibold text-base sm:text-lg underline"
          >
            woundedwarriorproject.org
          </a>
        </div>
      </div>
    </section>
  );
}
