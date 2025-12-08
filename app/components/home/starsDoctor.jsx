import HomeStarComponent from "@/app/components/SVGs/homeStar";
import FilledHomeStarComponent from "@/app/components/SVGs/filledHomeStar";
function StartSearchDoctor() {
  return (
    <>
    {[0, 1].map((itemUp) => (
    <div className="flex flex-row justify-center text-center items-center" key={itemUp}>
        {[0, 1].map((item) => (
        <HomeStarComponent
            key={item}
            className="h-2 w-2 text-primary-500 md:m-2 m-2"
        />
        ))}
        {[0, 1].map((itemP) => (
        <span
        className="flex flex-row"
            key={itemP}
        >
            <FilledHomeStarComponent
            className="h-2 w-2 text-primary-500 md:m-2 m-1"
            />
            {[0, 1, 2].map((item) => (
            <HomeStarComponent
                key={item}
                className="h-2 w-2 text-primary-500 md:m-2 m-1"
            />
            ))}
        </span>
        ))}
        <FilledHomeStarComponent className="h-2 w-2 text-primary-500 md:m-2 m-1" />
    </div>
    ))}
    </>
  );
}

export default StartSearchDoctor;