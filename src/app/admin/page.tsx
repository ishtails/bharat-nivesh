'use client'
import axios from "axios"
import { useState } from "react"


type Props = {}

type Item = {
    name: string
    email: string
    message: string
}

const AdminPage = (props: Props) => {
    const [data, setData] = useState([])
    const [isActive, setIsActive] = useState(true)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await axios.post("/api/admin", data);
            setIsActive(false);
            setData(res.data);
        } catch (error) {
            alert("Error");
            setData([]);
        }
    }

    return (
        <div className="bg-zinc-900 flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className={`text-white flex flex-col gap-4 bg-zinc-800 px-10 py-6 rounded-xl items-center ${isActive ? "" : "hidden"}`}>
                <p>Enter Password</p>
                <input id="secret" name="secret" type="text" className="rounded-sm h-auto text-black border-[#8D8D8D] border-[0.5px] text-[13px] p-2" />
                <button className="border rounded-md px-2 py-1" type="submit">Submit</button>
            </form>

            <div className={`${isActive ? "hidden" : ""} text-white`}>
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

export default AdminPage