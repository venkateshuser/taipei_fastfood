'use client'

import { MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function FindUs() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="aspect-video w-full bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60930.116976836136!2d78.5118645!3d17.3573652!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb995d847853af%3A0xa633a71f6b8420b9!2sTaipei%20Chinese%20Food%20Joint!5e0!3m2!1sen!2sin!4v1779797824501!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Taipei Fast Food Center Location"
        />
      </div>

      <div className="p-6 sm:p-8 space-y-4">
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Find Us</h3>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#C0392B] mt-0.5 shrink-0" />
          <div>
            <p className="font-medium text-[#1A1A1A]">
              Taipei Fast Food Center
            </p>
            <p className="text-gray-500 text-sm">
              123 Connaught Place, Block C
              <br />
              New Delhi, Delhi 110001
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-[#C0392B] shrink-0" />
          <div>
            <p className="text-gray-500 text-sm">+91 98765 43210</p>
            <p className="text-gray-500 text-sm">011-12345678 (Landline)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-[#C0392B] shrink-0" />
          <p className="text-gray-500 text-sm">info@taipeifastfood.com</p>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-[#C0392B] shrink-0" />
          <div>
            <p className="text-gray-500 text-sm">
              Mon - Sun: 11:00 AM - 11:00 PM
            </p>
            <p className="text-gray-500 text-sm">Delivery until 10:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}
