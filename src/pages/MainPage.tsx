import { Button, Input } from "@heroui/react"
import { useState } from "react"

export const MainPage = () => {

    const [to, setTo] = useState('')
    const [from, setFrom] = useState('')






    return (
        <main className="mt-32 flex justify-center bg-slate-700 w-1/2 mx-auto rounded-xl p-4">
            <div className="space-y-4 flex flex-col">
                <div>
                    <p>From</p>
                    <div>
                        <Input />
                    </div>
                </div>
                <Button className="mx-auto">swap</Button>
                <div>
                    <p>To</p>
                    <Input />
                </div>
            </div>
        </main>
    )
}