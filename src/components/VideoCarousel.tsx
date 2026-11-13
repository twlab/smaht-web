import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "~/components/ui/carousel"

// SMaHT Q&A videos shown in the "Meet the SMaHT Network" section on the home page.
// Add new videos by appending their YouTube ID here.
const videos = [
    { id: '1g2Xlbd0Kpg', title: 'SMaHT Network Q&A' },
    { id: 'ljZncMubN_w', title: '2026 SMaHT Q&A' },
]

export default function VideoCarousel() {
    return (
        <Carousel className="w-full" opts={{ align: 'start', loop: videos.length > 2 }}>
            <CarouselContent>
                {videos.map((video) => (
                    <CarouselItem key={video.id} className="md:basis-1/2">
                        <div className="p-1">
                            <div className="relative w-full overflow-hidden rounded-md shadow" style={{ paddingTop: '56.25%' }}>
                                <iframe
                                    className="absolute inset-0 h-full w-full"
                                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                                    title={video.title}
                                    loading="lazy"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
