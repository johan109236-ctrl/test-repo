interface AutoReplyEmailProps {
  name: string;
  packageName: string;
}

export default function CustomerAutoReplyEmail({ name, packageName }: AutoReplyEmailProps) {
  return (
    <div style={{ fontFamily: 'Georgia, serif', backgroundColor: '#0a0a0a', color: '#f5f0e8', padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', borderBottom: '1px solid #2a2a2a', paddingBottom: '30px', marginBottom: '30px' }}>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#c9a84c', margin: '0 0 8px' }}>
          Nepal Himal Adventures
        </p>
        <h1 style={{ fontSize: '28px', fontWeight: '300', color: '#f5f0e8', margin: '0' }}>
          We&apos;ve Received Your Inquiry
        </h1>
      </div>

      {/* Body */}
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: 'rgba(245,240,232,0.7)', lineHeight: '1.8', margin: '0 0 20px' }}>
        Dear {name},
      </p>

      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: 'rgba(245,240,232,0.7)', lineHeight: '1.8', margin: '0 0 20px' }}>
        Thank you for reaching out to Nepal Himal Adventures. We have received your inquiry
        regarding the <strong style={{ color: '#c9a84c' }}>{packageName}</strong> and one of our
        Himalayan experts will be in touch with you within 24 hours.
      </p>

      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: 'rgba(245,240,232,0.7)', lineHeight: '1.8', margin: '0 0 30px' }}>
        In the meantime, feel free to reach us directly via WhatsApp or phone if you have
        any urgent questions.
      </p>

      {/* Contact box */}
      <div style={{ border: '1px solid #2a2a2a', padding: '20px', marginBottom: '30px' }}>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#c9a84c', margin: '0 0 12px' }}>
          Contact Us Directly
        </p>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'rgba(245,240,232,0.6)', margin: '0 0 6px' }}>
          📞 <a href="tel:+9779808968520" style={{ color: '#c9a84c', textDecoration: 'none' }}>+977 9808968520</a>
        </p>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'rgba(245,240,232,0.6)', margin: '0 0 6px' }}>
          💬 <a href="https://wa.me/9779808968520" style={{ color: '#c9a84c', textDecoration: 'none' }}>WhatsApp: +977 9808968520</a>
        </p>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'rgba(245,240,232,0.6)', margin: '0' }}>
          📍 Lazimpat, Kathmandu, Nepal
        </p>
      </div>

      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: 'rgba(245,240,232,0.7)', lineHeight: '1.8', margin: '0 0 8px' }}>
        Warm regards,
      </p>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: '300', color: '#f5f0e8', margin: '0 0 4px' }}>
        Nepal Himal Adventures
      </p>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '2px', color: '#c9a84c', margin: '0' }}>
        YOUR GATEWAY TO THE HIMALAYAS
      </p>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #2a2a2a', marginTop: '30px', paddingTop: '20px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: 'rgba(245,240,232,0.25)', margin: '0' }}>
          © 2026 Nepal Himal Adventures. Lazimpat, Kathmandu, Nepal.
        </p>
      </div>

    </div>
  );
}