import CardFooter from "@/app/components/home/howItWork/cardFooter";
function ChooseDateTime() {
    return (
    <div className="border border-neutral-500 rounded-3xl p-0 mx-3 w-full max-w-[420px]">
      <div className="py-3 px-3">
        like calendar
      </div>
      <CardFooter headP="Choose a Date & Time" bodyP="View real-time availability and pick a slot that works best for your schedule." />
    </div>
    // <div className="border border-neutral-500 rounded-3xl p-0 mx-3 w-1/3">
    //   <div
    //     className="border border-neutral-400 rounded-3xl p-4 relative z-0 bg-white overflow-hidden"
    //     style={{ height: "325px" }}
    //   >
    //     <div className="flex items-start justify-center">
    //       <div className="scale-90 md:scale-100 origin-top">
    //         <Calendar
    //           value={date}
    //           onChange={(e) => setDate(e.value as Date)}
    //           inline
    //           prevIcon={
    //             <LeftArrowCalendarComponent className="w-5 h-5 text-secondary-500" />
    //           }
    //           nextIcon={
    //             <RightArrowCalendarComponent className="w-5 h-5 text-secondary-500" />
    //           }
    //           className="calendar-custom"
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="-mt-12 rounded-b-3xl rounded-t-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-1 bg-white relative z-10">
    //     <div className="p-4">
    //       <h3 className="text-left text-xl md:text-xl font-georgia text-secondary-500 mb-1">
    //         Choose a Date & Time
    //       </h3>
    //       <p className="text-left text-xs md:text-sm text-neutral-900 font-montserrat leading-relaxed">
    //         View real-time availability and pick a slot that works best for your
    //         schedule.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
export default ChooseDateTime;
