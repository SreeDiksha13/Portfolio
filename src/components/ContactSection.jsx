import { Linkedin, Mail, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email",
    value: "sreedikshap@gmail.com",
    href: "mailto:sreedikshap@gmail.com",
  },
  {
    icon: <Linkedin className="h-6 w-6 text-primary" />,
    title: "LinkedIn",
    value: "Sree Diksha P",
    href: "https://www.linkedin.com/in/psreediksha",
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Location",
    value: "Hyderabad, India",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m always open to new opportunities, collaborations, or just a
          friendly hello. Feel free to reach out via any of the channels below.
        </p>

        <div className="flex flex-col items-center space-y-8">
          <div className="flex justify-center gap-12">
            {contactItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-primary/10 mb-3">
                  {item.icon}
                </div>
                <h4 className="font-medium">{item.title}</h4>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
