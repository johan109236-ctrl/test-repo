interface Props {
  name: string; email: string; country: string;
  mobileNo: string; packageName: string; message: string;
}

export default function ContactFormEmail({ name, email, country, mobileNo, packageName, message }: Props) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>New Trek Inquiry</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Country:</strong> {country}</p>
      <p><strong>Mobile:</strong> {mobileNo}</p>
      <p><strong>Package:</strong> {packageName}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  );
}