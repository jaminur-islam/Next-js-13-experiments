import axios, { AxiosResponse } from 'axios';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/components/Mypage';
import Image from 'next/image';



interface IAppProps {
    params: {
        id: string,
    },
    searchParams: {
        admin: string
    }
}

const fetchData = async (id: string): Promise<User> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {

    });
    return await response.json()
}
const fetchUserPost = async (id: string): Promise<User> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    return await response.json()
}


export async function generateMetadata({ params }: IAppProps) {
    const response = await fetchData(params.id)
    return {
        title: response.name,
    };
}


const UserDetails = async ({ params, searchParams
}: IAppProps) => {
    // console.log(params)

    // const router = useRouter();
    // console.log(router)

    // setTimeout(() => {
    //     if (JSON.parse(searchParams.admin)) {
    //         router.push("/users")

    //     }
    // }, 5000);

    const response1 = fetchData(params.id)
    const getUserPost1 = fetchUserPost(params.id);

    const [response, getUserPost]: any = await Promise.all([response1, getUserPost1])

    const res = await fetch("https://dog.ceo/api/breeds/image/random", {
        next: { revalidate: 10 }
    });
    const im = await res.json()
    console.log(im)


    return <div className='border p-2 w-max mx-auto'>
        <Image src={im.message} height={500} width={500} alt='sagor' />
        <div> {response.name} </div>
        <div> {response.id}</div>
        <div>
            {
                getUserPost?.map((item: any) => {
                    return <div className='bg-red-400 text-white mt-5 p-2' key={item.id}>
                        {item.title}
                    </div>
                })
            }
        </div>
    </div>
};

export default UserDetails;




