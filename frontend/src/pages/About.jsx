export default function About() {
  return (
    <div className="bg-linear-to-r from-yellow-100 to-yellow-50 text-white min-h-screen px-6 py-12">

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          About Our Platform
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          Ace Interviews with AI-Powered Learning
        </p>
      </div>

      {/* Section 1 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-16">

        <div>
          <h2 className="text-2xl text-gray-600 font-semibold mb-4">
            🚀 Our Mission
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our mission is to help students and professionals crack interviews
            with confidence using the power of Artificial Intelligence. We aim
            to provide smart learning tools, real-time feedback, and structured
            preparation strategies to make interview success achievable for everyone.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-400">
            Why Choose Us?
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>✔ AI-based interview practice</li>
            <li>✔ Real-time performance feedback</li>
            <li>✔ Personalized learning paths</li>
            <li>✔ Industry-level questions</li>
          </ul>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center mb-16">

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            🤖 AI Mock Interviews
          </h3>
          <p className="text-gray-400">
            Practice interviews with AI that simulates real-world scenarios
            and helps you improve your communication skills.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            📊 Smart Feedback
          </h3>
          <p className="text-gray-400">
            Get instant feedback on your answers, tone, and performance
            to continuously improve.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            🎯 Targeted Preparation
          </h3>
          <p className="text-gray-400">
            Focus on important topics with curated questions and
            personalized learning plans.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl text-gray-600 font-semibold mb-4">
          💡 Our Vision
        </h2>
        <p className="text-gray-400 leading-relaxed">
          We envision a future where anyone can prepare for interviews
          effectively using AI-driven tools. Our platform bridges the gap
          between knowledge and real-world interview skills, making users
          job-ready with confidence.
        </p>
      </div>

    </div>
  );
}