import { contact } from "../data/content";
import { MailIcon, WhatsappIcon } from "./icons/ContactIcons";
import "./Contact.css";

const items = [
  { Icon: MailIcon, label: "E-mail", value: contact.email },
  {
    Icon: WhatsappIcon,
    label: "WhatsApp",
    value: contact.phone,
    href: contact.whatsapp,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <h2 className="section-title">Contato</h2>
      <div className="contact__grid">
        {items.map(({ Icon, label, value, href }) => (
          <div key={label} className="contact-item">
            {href ? (
              <a
                href={href}
                className="contact-item__link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-item__icon-wrap">
                  <Icon className="contact-item__icon" />
                </div>
                <span className="contact-item__label">{label}</span>
                {value ? (
                  <span className="contact-item__value">{value}</span>
                ) : null}
              </a>
            ) : (
              <>
                <div className="contact-item__icon-wrap">
                  <Icon className="contact-item__icon" />
                </div>
                <span className="contact-item__label">{label}</span>
                <span className="contact-item__value">{value}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
