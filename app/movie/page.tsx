import React from "react";
import { MOVIE } from "./movie";
import { handleForm } from "./action";

const movie = () => {

    return <div>
        <h1> Moves </h1>
        <form action={handleForm}>
            <input className="border border-black p-3 text-black" type="text" name="moveName" placeholder="title" />

            <button type="submit">Submit</button>
        </form>

        {
            MOVIE.map((item) => {
                return <div key={item}> {item}</div>
            })
        }
    </div>;
};

export default movie;
