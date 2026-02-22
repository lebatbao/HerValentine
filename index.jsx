import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function ValentinePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-rose-400 to-red-500 p-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl max-w-lg w-full p-8 text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="flex justify-center mb-4"
        >
          <Heart className="w-16 h-16 text-red-500" />
        </motion.div>

        <h1 className="text-3xl font-bold mb-4">Happy Valentine's Day ❤️\n        <div className="text-lg font-medium mt-2">and Happy Birthday 🎂</div></h1>

        <p className="text-gray-700 mb-6">
          I really enjoy having you in my life. This little page is just a simple way to say I appreciate you and everything we share.
        </p>

        {!open ? (
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold shadow hover:scale-105 transition"
          >
            Open Your Surprise 💝
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 space-y-4"
          >
            <p className="text-lg font-medium text-rose-600">
              I care about you a lot.
            </p>

            <p className="text-gray-600">
              Thanks for being you — and for being here with me.
            </p>

            <div className="text-4xl">💖 💕 💗</div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
