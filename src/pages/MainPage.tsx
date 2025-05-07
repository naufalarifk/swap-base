import { Input } from "@heroui/react"

export const MainPage = () => {
    return (
        <div className="mt-32 flex justify-center bg-stone-800 w-1/2 mx-auto rounded-xl p-4">
            <div className="space-y-4">
                <Input />
                <Input />
            </div>
        </div>
    )
}