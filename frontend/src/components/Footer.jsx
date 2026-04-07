import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-xl font-bold text-blue-400 mb-2">
              AI Interviews
            </h2>
            <p className="text-sm">
              Ace interviews with AI-powered learning.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white mb-2 font-semibold">Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:text-blue-400">LandingPage</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
              <li><Link to="/interview/1" className="hover:text-blue-400"></Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white mb-2 font-semibold">Features</h3>
            <ul className="space-y-1 text-sm">
              <li>AI Mock</li>
              <li>Feedback</li>
              <li>Tracking</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-2 font-semibold">Contact</h3>
            <p className="text-sm">support@ai.com</p>
            <div className="flex gap-3 mt-2 text-lg">
              <span className="hover:text-blue-400 cursor-pointer">🌐</span>
              <span className="hover:text-blue-400 cursor-pointer">🐦</span>
              <span className="hover:text-blue-400 cursor-pointer">💼</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-xs mt-6 border-t border-gray-800 pt-4">
          © {new Date().getFullYear()} AI Interviews
        </div>
      </div>
    </footer>
  );
}



