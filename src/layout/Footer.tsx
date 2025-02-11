import { Link } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12">
      <div className="max-w-screen-xl mx-auto flex items-start justify-between w-full h-full">
        <div>
          <h4 className="text-lg">eainsharmal</h4>
          <p className="text-sm">Copyright &copy; 2025, All rights reserved</p>
          <p className="text-sm">Developed by H3XTECH.org</p>
        </div>
        <div className="flex items-start gap-8">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Explore</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
