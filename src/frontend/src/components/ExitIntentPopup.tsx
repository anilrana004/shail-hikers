import { Gift, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const shown = localStorage.getItem("shailhikers_exit_popup");
    if (shown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !triggered.current && !dismissed) {
        triggered.current = true;
        setVisible(true);
      }
    };

    // Desktop only
    if (window.innerWidth > 768) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
    localStorage.setItem("shailhikers_exit_popup", "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.setItem("shailhikers_exit_popup", "1");
    setTimeout(handleDismiss, 2500);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 hidden md:block"
            style={{ background: "rgba(26,14,16,0.75)" }}
            onClick={handleDismiss}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            data-ocid="exit_popup.dialog"
            className="fixed inset-0 z-50 hidden md:flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="w-full max-w-md p-8 rounded-2xl relative pointer-events-auto"
              style={{
                background: "#1A0E10",
                border: "1px solid rgba(181,82,94,0.4)",
                boxShadow: "0 32px 80px rgba(181,82,94,0.2)",
              }}
            >
              <button
                type="button"
                data-ocid="exit_popup.close_button"
                onClick={handleDismiss}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(181,82,94,0.2)", color: "#E8A0AA" }}
                aria-label="Close popup"
              >
                <X size={15} />
              </button>

              {!submitted ? (
                <>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(181,82,94,0.15)",
                      border: "1px solid rgba(181,82,94,0.3)",
                    }}
                  >
                    <Gift size={28} style={{ color: "#B5525E" }} />
                  </div>

                  <h2
                    className="text-2xl font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#FAD4D8",
                    }}
                  >
                    Wait — Before You Go!
                  </h2>
                  <p className="text-sm mb-2" style={{ color: "#E8A0AA" }}>
                    Get
                    <span
                      className="font-bold mx-1"
                      style={{ color: "#C9A84C" }}
                    >
                      ₹500 OFF
                    </span>
                    your first Himalayan trek.
                  </p>
                  <p className="text-xs mb-6" style={{ color: "#E8A0AA70" }}>
                    Join 8,000+ trekkers — exclusive offer for new subscribers
                    only.
                  </p>

                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      type="email"
                      data-ocid="exit_popup.input"
                      required
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                      style={{
                        background: "rgba(45,27,30,0.8)",
                        border: "1px solid rgba(232,160,170,0.25)",
                        color: "#FAD4D8",
                      }}
                    />
                    <button
                      type="submit"
                      data-ocid="exit_popup.submit_button"
                      className="px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                      style={{ background: "#B5525E", color: "#FAD4D8" }}
                    >
                      Claim
                    </button>
                  </form>

                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="mt-4 text-xs w-full text-center transition-colors"
                    style={{ color: "#E8A0AA50" }}
                  >
                    No thanks, I'll pay full price
                  </button>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#FAD4D8",
                    }}
                  >
                    You're In!
                  </h3>
                  <p className="text-sm" style={{ color: "#E8A0AA" }}>
                    Your ₹500 coupon is on its way to{" "}
                    <span style={{ color: "#C9A84C" }}>{email}</span>.
                    <br />
                    The Himalayas are waiting!
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
