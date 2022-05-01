import Image from 'next/image'


export default function Landing() {
    return (
        <div className="flex justify-center">
            <div className="flex md:flex-row sm:flex-col">
                <div className="flex justify-center">
                    <Image
                        src="/images/judo-flip.png"
                        alt="Picture of a judo flip"
                        // layout="responsive"
                        width={600}
                        height={600}
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center">Hwangs Judo</div>
                    <div className="flex justify-center">황의 유도</div>
                    <div className="flex justify-center">Sign Up</div>
                </div>
            </div>
        </div>
    )
}
