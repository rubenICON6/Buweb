import { useEffect, useState } from "react";
import Link from "next/link";
import MaturePopup from "../MaturePopup/MaturePopup";

export default function MatureEntryAd() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-[99]">
      {isVisible && (
        <div
          onClick={() => setIsPopupVisible(!isPopupVisible)}
          aria-label="scroll to top"
          className="flex h-10 w-[220px] cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <span className="mt-[6px] text-white">Mature Entry Results Out!!</span>

          <MaturePopup trigger={isPopupVisible} setTrigger={setIsPopupVisible}>
            <div className="text-dark">
              <h2 className="mb-2 text-blue-600">Mature Entry Results Out!!</h2>
              <p>
                The wait is over! We{"'"}re pleased to announce that the results
                for our mature entry program exams are now available. You can
                check them{" "}
                <span>
                  <Link href="/mature_entry.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</Link>
                </span>
                , or if you have any questions, please do not hesitate to
                contact our admissions office.
              </p>
            </div>
          </MaturePopup>

        </div>
      )}
    </div>
  );
}