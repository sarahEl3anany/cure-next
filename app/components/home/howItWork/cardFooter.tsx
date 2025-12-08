function CardFooter({ headP, bodyP }: { headP: string; bodyP: string }) {
    return (
        <div className="rounded-b-3xl rounded-t-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-1">
            <div className="p-4">
                <h3 className="text-left text-xl md:text-xl font-georgia text-secondary-500 mb-1">
                    {headP}
                </h3>
                <p className="text-left text-xs md:text-sm text-neutral-900 font-montserrat leading-relaxed">
                    {bodyP}
                </p>
            </div>
        </div>
    )
}
export default CardFooter;