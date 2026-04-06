import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import InstructorSocials from '@/pages/intro/partials/instructor-socials';
import { Link } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const TopInstructorsCarousel1 = ({ data }: { data: Collection<Instructor> }) => {
   const [api, setApi] = useState<CarouselApi>();

   return (
      <Carousel setApi={setApi} className="relative" opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 3000 })]}>
         <CarouselContent>
            {data &&
               data.collection.map((instructor) => {
                  return (
                     <CarouselItem key={instructor.id} className="basis-full md:basis-1/2 lg:basis-1/4">
                        <div className="px-1.5 py-0.5">
                           <div className="group relative h-[380px] overflow-hidden rounded-2xl">
                              <Link href={route('instructors.show', instructor.id)}>
                                 <img
                                    className="h-full w-full object-cover object-center"
                                    src={instructor.user.photo || '/assets/images/intro/default/instructors/instructor-1.png'}
                                    alt=""
                                 />

                                 <div className="from-primary dark:from-primary-foreground absolute bottom-0 left-1/2 flex h-full w-full -translate-x-1/2 flex-col justify-end bg-gradient-to-t px-4 pt-4 pb-2 text-center opacity-0 transition-all duration-200 group-hover:opacity-100">
                                    <p className="mb-1 text-lg font-semibold text-white">{instructor.user.name}</p>
                                    <p className="text-sm text-white">{instructor.designation}</p>
                                 </div>
                              </Link>

                              <div className="from-primary dark:from-primary-foreground absolute bottom-0 left-1/2 w-full -translate-x-1/2 bg-gradient-to-t opacity-0 transition-all duration-200 group-hover:opacity-100">
                                 <InstructorSocials
                                    instructor={instructor}
                                    buttonVariant="ghost"
                                    buttonClass="bg-muted hover:bg-muted/80 dark:bg-primary/90 dark:hover:bg-primary/80 dark:text-primary-foreground"
                                    className="py-2"
                                 />
                              </div>
                           </div>
                        </div>
                     </CarouselItem>
                  );
               })}
         </CarouselContent>

         <Button
            size="icon"
            variant="outline"
            disabled={!api?.canScrollPrev()}
            onClick={() => api?.scrollPrev()}
            className="hover:border-primary hover:bg-background absolute top-1/2 -left-3 -translate-y-1/2"
         >
            <ChevronLeft />
         </Button>
         <Button
            size="icon"
            variant="outline"
            disabled={!api?.canScrollNext()}
            onClick={() => api?.scrollNext()}
            className="hover:border-primary hover:bg-background absolute top-1/2 -right-3 -translate-y-1/2"
         >
            <ChevronRight />
         </Button>
      </Carousel>
   );
};

export default TopInstructorsCarousel1;
