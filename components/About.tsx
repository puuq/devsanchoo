"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 pixel-grid">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="pixel-text text-xl sm:text-2xl font-bold tracking-wider">
                ABOUT ME
              </h2>
              <p className="text-muted-foreground">
                I build user-centered products from first interface to production deployment.
              </p>
            </div>
            
            <div className="space-y-4">
              <p>
                I&apos;m Santosh Rai, a Full Stack Developer with 3+ years of
                experience delivering client and business applications. My
                recent work spans responsive interfaces, backend APIs,
                authentication, SQL database design, third-party integrations,
                and Cloudflare deployments.
              </p>
              
              <p>
                I have worked independently and in small teams, taking products
                from requirements and UI/UX design through implementation,
                testing, troubleshooting, and launch. Recent projects include
                media platforms and a private multi-branch billing dashboard
                used in day-to-day business operations.
              </p>
              
              <p>
                Away from code, I enjoy competitive FPS and hero shooters,
                Soulslike games, and exploring how software can improve player
                experiences.
              </p>
            </div>
            
            {/* <PixelButton 
              variant="outline"
              className="inline-flex"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="h-4 w-4 mr-2" /> DOWNLOAD RESUME
            </PixelButton> */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            {/* <PixelCard className="relative w-full max-w-sm aspect-square overflow-hidden">
              <div className="absolute inset-0 pixel-grid">
                <Image 
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Developer Portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </PixelCard> */}

            {/* 3D Spline Embed */}
            <div className="w-full h-[500px] overflow-hidden rounded-xl relative">
              <div className="absolute top-[5%] left-[-10%] sm-left-[5%] w-[140%] h-full scale-[1.25]">
                <iframe
                  src="https://my.spline.design/genkubgreetingrobot-miicPm6wPjnpG2czyhtbldu5/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
