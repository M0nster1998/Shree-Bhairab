import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-300">
                  123 Music Avenue<br />
                  Symphony District<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-300">contact@harmonicfusion.com</p>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280949922!2d-74.11976341508278!3d40.70583158964816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1679925150151!5m2!1sen!2sus"
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