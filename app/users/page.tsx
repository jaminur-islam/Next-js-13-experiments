
import React from "react";
import axios, { AxiosResponse } from "axios"
import Link from "next/link";

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {};
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    },
}

const page = async () => {
    const userData: AxiosResponse<User[]> = await axios.get("https://jsonplaceholder.typicode.com/users");

    return <ul>
        {
            userData.data.map((user, index) => {
                return <li className="mt-5 border border-black w-max p-2
                " key={index}>
                    <Link href={{
                        pathname: `/users/${user.id}`,
                        query: {
                            admin: false
                        }
                    }}   > {user.name} </Link>
                </li>

            })
        }
    </ul>
};

export default page;
