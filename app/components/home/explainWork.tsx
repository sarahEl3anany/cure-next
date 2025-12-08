import { useState, useEffect } from "react";
import DrSearch from "./howItWork/drSearch";
import ChooseDateTime from "./howItWork/chooseDateTime";
import BookPay from "./howItWork/bookPay";
import useMediaQuery from "@/app/hooks/useMediaQuery";
function ExplainWork() {
  const [isDesktop, setIsDesktop] = useState(false);
  const mqIsDesktop = useMediaQuery("(min-width: 993px)");

  useEffect(() => {
    setIsDesktop(mqIsDesktop);
  }, [mqIsDesktop]);

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center mt-8 px-6">
      <h2 className="text-xl md:text-2xl font-georgia text-secondary-500 mt-6 max-w-2xl">
        How it works
      </h2>
      {isDesktop ? (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full md:justify-center mt-8">
            <DrSearch />
            <ChooseDateTime />
            <BookPay />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 w-full mt-6">
      ddd
        </div>
      )}
    </section>
  );
}
export default ExplainWork;
