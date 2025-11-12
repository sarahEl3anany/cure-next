import StarsComponent from "../SVGs/stars";

function Opening() {
    return (
        <div className="flex justify-center text-center mx-auto gap-2 items-center mt-10">
            <div className="flex gap-2 items-center">
                <StarsComponent className="h-4 w-4 text-primary-500 " />
                <span className="text-secondary-500 font-montserrat">Upgrade your account</span>
            </div>
        </div>
    )
}

export default Opening