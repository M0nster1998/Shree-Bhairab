import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for bookings and inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-purple-900/20 p-8 rounded-lg">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-300">123 Music Avenue, New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">contact@harmonicfusion.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/20 rounded-lg overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1838560983296!2d-73.9910086!3d40.7505045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1647043435129!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;