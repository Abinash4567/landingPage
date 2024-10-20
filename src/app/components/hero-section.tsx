import { MoveUpRight } from "lucide-react";

export default function HeroSection(){
    return (
    <div className="">
        <div className="flex gap-2 text-white">
            <div className="basis-1/2 flex items-center boder-2 border-yelow-300 h-[calc(100vh-90px)]">
                <div>
                    <div className="text-6xl font-extrabold tracking-tight leading-none order-2 boder-red-500">
                        Uniting Professionals, Transforming Transactions
                    </div>

                    <div className="pt-8 text-lg font-medium">
                    Join Pinnacle Partnerships to unlock growth with innovative lead generation and connect with top professionals for optimal real estate results.
                    </div>

                    <div className="mt-8 font-semibold flex">
                        <span className="mr-4 hover:underline hover:cursor-pointer hover:mr-2 transition-all duration-300">Schedule Meeting Now</span>
                        <MoveUpRight size={18} className="mt-1"/>
                    </div>
                </div>
            </div>

            <div className="basis-1/2 text-4xl font-extrabold tracking-tight leading-none brder-2 order-green-500 mt-32 ml-24">
                More content
            </div>
        </div>
    </div>)
}