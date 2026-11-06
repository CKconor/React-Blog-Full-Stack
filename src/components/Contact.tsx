import { contactEmail } from '@/data/site';

function Contact() {
  return (
    <a href={`mailto:${contactEmail}`} className="btn-primary max-md:w-full">
      Get in touch
    </a>
  );
}

export default Contact;
