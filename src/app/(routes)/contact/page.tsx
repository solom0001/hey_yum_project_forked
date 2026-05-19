import ContactForm from "@/app/components/contactComponents/ContactForm";
import Nav from "@/app/components/utilityComponents/Header/Nav";
import HeaderOneComp from "@/app/components/utilityComponents/HeaderOneComp";

export default function Contact() {
  return (
    <div className="grid">
      <Nav page="contact" />
      <ContactForm />
    </div>
  );
}
