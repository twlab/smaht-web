import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "~/components/ui/carousel"
import { Card, CardContent } from "~/components/ui/card"

const images = [
    {
        src: 'banner/SMaHTBenchmarkingPaperBanner.png',
        alt: 'SMaHT Benchmarking Paper featured in Cell',
        desc: 'SMaHT Benchmarking Paper',
        link: 'https://www.cell.com/cell/fulltext/S0092-8674%2826%2901135-9',
        external: true
    }, {
        src: 'banner/DonorFamiliesBannerv2.png',
        alt: 'Donor Families',
        desc: 'Donor Families',
        link: 'https://donorfamilies.smaht.org/',
        external: true
    },{
        src: 'banner/Linktree_Social.png',
        alt: 'Linktree Social',
        desc: 'Linktree Social',
        link: 'https://linktr.ee/smahtnetwork',
        external: true
    },
    {
        src:'banner/News.png',
        alt: 'News',
        desc: 'News',
        link: '/news',
        external: false
    },
    {
        src: 'banner/Publications.png',
        alt: 'Publications',
        desc: 'Publications',
        link: 'https://pubmed.ncbi.nlm.nih.gov/collections/64677812/?sort=pubdate',
        external: true
    }
]

export default function MyCarousel() {
    return (
        <Carousel className="w-full" opts={{
            loop: true,
          }}>
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="flex justify-center p-1">
                            <Card>
                                <CardContent className="items-center text-center p-2">
                                        <a href={image.link} target={image.external ? '_blank' : '_self'} rel="noreferrer" style={{ color: 'rgb(59 130 246)'}}>
                                            <img src={`/images/${image.src}`} alt={image.alt} className="w-full h-full object-cover" />
                                        </a>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}