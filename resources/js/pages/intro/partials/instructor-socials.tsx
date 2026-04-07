import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Github, Globe, Linkedin, Twitter } from 'lucide-react';

interface Props {
   instructor: Instructor;
   className?: string;
   buttonClass?: string;
   buttonVariant?: 'default' | 'secondary' | 'ghost' | 'link' | 'destructive' | 'outline';
}

const InstructorSocials = ({ instructor, className, buttonClass, buttonVariant = 'secondary' }: Props) => {
   const getSocialLink = (host: string, instructor: Instructor) => {
      const raw = typeof instructor.user.social_links === 'string' ? JSON.parse(instructor.user.social_links) : instructor.user.social_links;
      if (!raw) return null;
      // Handle array format: [{host, profile_link}]
      if (Array.isArray(raw)) {
         const found = raw.find((link: { host: string; profile_link: string }) => link.host === host);
         return found ? found.profile_link : null;
      }
      // Handle object format: {twitter: url, linkedin: url}
      return raw[host] || null;
   };

   const website = getSocialLink('website', instructor);
   const github = getSocialLink('github', instructor);
   const twitter = getSocialLink('twitter', instructor);
   const linkedin = getSocialLink('linkedin', instructor);

   return (
      <div className={cn('flex items-center justify-center space-x-1.5 py-4', className)}>
         {website && (
            <a href={website} target="_blank">
               <Button size="icon" variant={buttonVariant} className={cn('rounded-full p-0', buttonClass)}>
                  <Globe className="h-5 w-5" />
               </Button>
            </a>
         )}

         {github && (
            <a href={github} target="_blank">
               <Button size="icon" variant={buttonVariant} className={cn('rounded-full p-0', buttonClass)}>
                  <Github className="h-5 w-5" />
               </Button>
            </a>
         )}

         {twitter && (
            <a href={twitter} target="_blank">
               <Button size="icon" variant={buttonVariant} className={cn('rounded-full p-0', buttonClass)}>
                  <Twitter className="h-5 w-5" />
               </Button>
            </a>
         )}

         {linkedin && (
            <a href={linkedin} target="_blank">
               <Button size="icon" variant={buttonVariant} className={cn('rounded-full p-0', buttonClass)}>
                  <Linkedin className="h-5 w-5" />
               </Button>
            </a>
         )}
      </div>
   );
};

export default InstructorSocials;
