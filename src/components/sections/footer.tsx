import Image from "next/image";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-8 md:mb-0 text-center md:text-left">
            <Image
              src="https://customer-assets.emergentagent.com/job_site-in-72hrs/artifacts/5hf9iowu_Screenshot%202025-08-30%20224123.png"
              alt="BuildSumo Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-primary mb-1">BUILDSUMO</div>
              <p className="text-sm text-text-secondary">
                © 2025 BuildSumo. All rights reserved.
              </p>
            </div>
          </div>

          <a
            href="tel:+918097503422"
            className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm">+91 8097503422</span>
          </a>
        </div>

        <div className="flex justify-center md:justify-end mt-12">
          <a
            href="https://app.emergent.sh/?utm_source=emergent-badge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="flex items-center space-x-2 bg-background/50 text-xs text-text-secondary p-2 rounded-md hover:bg-background/75 transition-colors">
              <Image
                src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4"
                alt="Emergent Logo"
                width={20}
                height={20}
                className="rounded-sm"
              />
              <p>Made with Emergent</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;