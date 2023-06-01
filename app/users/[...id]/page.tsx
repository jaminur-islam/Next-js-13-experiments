import axios, { AxiosResponse } from 'axios';
import * as React from 'react';
import { User } from '../page';



interface IAppProps {
    params: {
        id: string
    }
}

const fetchData = async (id: string): Promise<User> => {
    const response: AxiosResponse<User> = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data
}


export async function generateMetadata({ params }: IAppProps) {
    const response = await fetchData(params.id)
    return {
        title: response.name,
    };
}


const UserDetails = async ({ params }: IAppProps) => {
    const response = await fetchData(params.id)
    return <div className='border p-2 w-max mx-auto'>
        <div> {response.name} </div>
        <div> {response.id}</div>
    </div>
};

export default UserDetails;




