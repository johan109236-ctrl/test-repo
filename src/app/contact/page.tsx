import { ContactForm } from '@/app/components/contact-form';
export const metadata = {
  title: 'Contact Us | Nepal Himal Adventures',
  description: 'Get in touch with Nepal Himal Adventures. Contact us for trek bookings and inquiries.',
};

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <ContactForm />
      </div>
    </main>
  );
}