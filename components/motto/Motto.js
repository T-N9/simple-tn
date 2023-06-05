import { GiBrickWall } from "react-icons/gi";

const Motto = () => {
  return (
    <section className="my-10">
      <p className="text-center text-gray-300 font-bold">
        “ If I can't build a wall, I'll lay one brick every day until it's done.
        ”
      </p>
      <div className="flex flex-col items-center mt-3 text-dark/40 dark:text-light/40">
          <div className="flex gap-1">
              <GiBrickWall size={25}/>
              <GiBrickWall className="text-primary dark:text-accent" size={25}/>
              <GiBrickWall size={25}/>
          </div>
          <br/>
          <div className="flex gap-1 -mt-5">
              <GiBrickWall size={25}/>
              <GiBrickWall size={25}/>
              <GiBrickWall size={25}/>
          </div>
          
      </div>
    </section>
  );
};

export default Motto;
