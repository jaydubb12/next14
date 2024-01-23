'use client';

// todo refactor to pull content from Builder.io

export default async function HeroComponent() {
    return (
        <div className="mt-6 relative min-h-[600px]">
            <picture>
                <source srcSet="/images/man-child2.png" media="(min-width: 768px)" />
                <img
                    src="/images/man-child2.png"
                    alt=""
                    className="absolute w-full h-full md:object-cover"
                />
            </picture>
            <div className="absolute inset-1 md:flex md:flex-row-reverse md:justify-center min-h-[500px] max-w-[1536px] mx-auto">
                <div className="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
                </div>
                <div className="absolute inset-0 p-4 md:flex md:flex-col md:justify-center md:items-start">
                    <h1 className="typography-display-1 md:leading-[50px] font-bold mt-20 mb-4">
                        <p> The All New</p>
                        Digital Showroom

                    </h1>
                    <p className="typography-text-base md:typography-text-lg">
                        Redesigned & reimagined to new features <br/>
                        and a world-class experience.
                    </p>

                </div>
            </div>
        </div>
    );
}
