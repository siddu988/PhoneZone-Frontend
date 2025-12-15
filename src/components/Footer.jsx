import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">

        <div>
          <h3 className="font-bold text-white mb-3">PhoneZone</h3>
          <p className="text-sm">
            Your trusted store for the latest smartphones & accessories.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/account">My Orders</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-3">Policies</h3>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

      </div>

      <p className="text-center text-slate-500 mt-6 text-sm">
        © {new Date().getFullYear()} PhoneZone — All Rights Reserved.
      </p>
    </footer>
  );
}
