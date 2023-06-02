"use server"

import { MOVIE } from "@/app/movie/movie"
import { revalidatePath } from "next/cache"
export const handleForm = async (formValue: any) => {
    const movieName = formValue.get("moveName")
    MOVIE.push(movieName)
    console.log(MOVIE)
    revalidatePath("/movie")


}