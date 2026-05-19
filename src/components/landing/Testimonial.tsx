import React from 'react'

const TESTIMONIALS = [
    {
        quote:
            "A real team made up of experienced consumer investors and consumer of tech with complementary skill sets and a track record in investing and scaling USD 1Bn+ brands; we have built, operated.",
        name: "Helena Williams",
        role: "Influencer, NY",
        avatarColor: "#c4654e",
    },
    {
        quote:
            "A real team made up of experienced consumer investors and consumer of tech with complementary skill sets and a track record in investing and scaling USD 1Bn+ brands; we have built, operated.",
        name: "Micheal Johnson",
        role: "CEO, Avis Tech",
        avatarColor: "#1c3d0f",
    },
    {
        quote:
            "A real team made up of experienced consumer investors and consumer of tech with complementary skill sets and a track record in investing and scaling USD 1Bn+ brands; we have built, operated.",
        name: "Adam Jackson",
        role: "CTO, ReoTech",
        avatarColor: "#f59e0b",
    },
    {
        quote:
            "A real team made up of experienced consumer investors and consumer of tech with complementary skill sets and a track record in investing and scaling USD 1Bn+ brands; we have built, operated.",
        name: "John Jackson",
        role: "CTO, ReoTech",
        avatarColor: "#f59e0b",
    },
];

const Testimonial = () => {
    return (

        <div className="relative overflow-hidden py-24 lg:py-32 max-w-7xl mx-auto">
            <div className=" ">
                <h2 className="flex flex-col font-medium justify-center items-center p-2 text-[2.6rem] leading-[1.05] tracking-[-0.02em] text-forest sm:text-[3rem]">
                    Clients trust us and our
                    <p>exclusive service</p>

                </h2>

                <div className="mt-8 flex gap-8 overflow-x-auto px-10 pb-4 snap-x snap-mandatory scrollbar-hide max-w-7xl mx-auto py-10">
                    {TESTIMONIALS.map((t) => (
                        <article
                            key={t.name}
                            className="snap-start shrink-0 w-[80vw] sm:w-[340px] flex flex-col gap-8 relative rounded-2xl bg-forest-deep p-8 text-cream transition-all duration-300 hover:-translate-y-1"
                        >
                            <svg
                                className="h-10 w-10 fill-cream/60 rotate-180"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 191.029 191.029"
                            >
                                <path d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918
          C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433
          c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474
          C152.613,48.759,171.149,48.759,181.107,48.759z"/>
                            </svg>

                            <p className="text-[0.8rem] leading-relaxed tracking-wide font-light text-cream">
                                {t.quote}
                            </p>

                            <div className="flex items-center gap-2.5">
                                <span
                                    className="grid h-7 w-7 place-items-center rounded-full text-[0.7rem] font-bold text-white"
                                    style={{ background: t.avatarColor }}
                                >
                                    {t.name[0]}
                                </span>
                                <div>
                                    <p className="text-[0.78rem] font-medium text-cream">{t.name}</p>
                                    <p className="text-[0.62rem] text-cream/55">{t.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-20 flex items-center justify-center gap-1.5 mx-auto">
                    <span className="h-1.5 w-6 rounded-full bg-forest" />
                    <span className="h-1.5 w-1.5 rounded-full bg-forest/30" />
                    <span className="h-1.5 w-1.5 rounded-full bg-forest/30" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial