'use client'
import axios from "axios"
import React from 'react'

type Props = {}

type Item = {
    name: string
    email: string
    message: string
}

const page = (props: Props) => {
    const [data, setData] = React.useState([])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await axios.post("/api/admin", data);
            setData(res.data);
        } catch (error) {
            alert("Error");
            setData([]);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="secret" name="secret" type="text" className="rounded-sm h-auto text-black border-[#8D8D8D] border-[0.5px] text-[13px] p-2" />
                <button type="submit">Submit</button>
            </form>

            <div className="mt-10">
                {data.map((item: Item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                        <p>{item.message}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page