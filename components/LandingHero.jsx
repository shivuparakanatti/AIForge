import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

const LandingHero = ()=>{
    return(
        <div className="text-white font-bold text-center py-36 space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">

            <h1>The Best AI Tool for </h1>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                <TypewriterComponent
                options={{
                    strings: [
                        "Chatbot.",
                        "Photo Generation.",
                        "Code Generation.",
                        "Music Generation.",
                        
                    ],
                    autoStart:true,
                    loop: true
                }}
                />
            </div>
            </div>
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3012047798. */}
            <div className="text-sm  md:text-xl font-light text-zinc-400">
                Create content using AI 10x faster

            </div>
            <div>
                <Link href='/sign-up'>
                    <Button variant="premium" className='md:text-lg p-4 md:p-6 rounded-full font-semibold'>Start generating for Free</Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingHero;
