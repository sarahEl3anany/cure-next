import CardFooter from "@/app/components/home/howItWork/cardFooter";
function BookPay() {
  return (
    <div className="border border-neutral-500 rounded-3xl p-0 mx-3 w-full max-w-[420px]">
      <div className="py-3 px-3">
        steps
      </div>
      <CardFooter
        headP="Book & Pay Online"
        bodyP="Confirm your appointment and pay securely using various payment options—credit card, mobile wallet."
      />
    </div>
  );
}
export default BookPay;
