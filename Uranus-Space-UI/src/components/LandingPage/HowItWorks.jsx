function HowItWorks() {
    const howitworks = [
        {
            id: 1,
            title: 'Create Project',
            description:
                'Start by creating your project on the platform, outlining its objectives, roadmap, and token distribution plan.',
        },
        {
            id: 2,
            title: 'Connect Community',
            description:
                'Engage with the community by sharing updates, hosting discussions, and involving them in decision-making processes. Build a strong community around your project.',
        },
        {
            id: 3,
            title: 'Launching Project',
            description:
                'Once ready, launch your project through the platform, allowing investors to contribute in various roles. Tokens are distributed fairly to the early IDO community, promoting inclusivity and participation.',
        },
    ]

    return (
        <section id="HowItWorks" className="px-40 py-32">
            <div className="grid grid-cols-3 gap-24">
                {howitworks.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-center relative h-[20rem] text-primary bg-bgsecondary rounded-[2rem]"
                    >
                        <div className="text-center mt-20">
                            <h3 className="text-xl font-bold mb-4">
                                {item.title}
                            </h3>
                            <p className="text-sm p-4">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HowItWorks
