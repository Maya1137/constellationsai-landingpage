import { Card } from "@/components/ui/card";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2024",
    title: "Chief Architect",
    company: "Constellation AI",
    description: "Leading the architectural vision for next-generation AI systems, overseeing the development of scalable machine learning infrastructure and guiding technical strategy across all product lines."
  },
  {
    year: "2021-2023",
    title: "Senior Principal Engineer",
    company: "TechNova Systems",
    description: "Architected and implemented cloud-native AI platforms serving millions of users. Led cross-functional teams in developing distributed computing solutions for real-time data processing."
  },
  {
    year: "2018-2021",
    title: "Lead AI Engineer",
    company: "Neural Dynamics",
    description: "Pioneered deep learning models for computer vision and natural language processing. Published 12 peer-reviewed papers and secured 3 patents in machine learning optimization."
  },
  {
    year: "2015-2018",
    title: "Software Architect",
    company: "Quantum Labs",
    description: "Designed microservices architecture supporting high-frequency trading systems. Implemented distributed algorithms achieving 99.99% uptime across global data centers."
  },
  {
    year: "2012-2015",
    title: "Senior Software Engineer",
    company: "DataFlow Inc",
    description: "Developed real-time analytics engines processing petabytes of data daily. Optimized database systems achieving 10x performance improvements."
  },
  {
    year: "2010-2012",
    title: "Software Engineer",
    company: "StartupVenture",
    description: "Full-stack development of web applications using modern frameworks. Built scalable backend systems from ground up supporting rapid user growth."
  }
];

export const Timeline = () => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Central timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-stellar via-primary to-stellar/20 transform -translate-x-1/2"></div>
      
      <div className="space-y-12">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className="relative flex items-center">
              {/* Timeline dot with pointing line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center">
                {/* Pointing line - positioned to start from center spine */}
                <div className={`w-12 h-0.5 bg-stellar ${isLeft ? 'transform -translate-x-4' : 'transform translate-x-4'}`}></div>
                {/* Dot positioned at center spine */}
                <div className="absolute w-8 h-8 bg-stellar rounded-full flex items-center justify-center animate-stellar-pulse transform -translate-x-1/2">
                  <div className="w-3 h-3 bg-stellar-glow rounded-full"></div>
                </div>
              </div>
              
              {/* Content - alternating left and right */}
              <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'ml-auto pl-8 text-left'}`}>
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-stellar/20 hover:border-stellar/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--stellar)_/_0.2)]">
                  <div className="mb-3">
                    <div className={`${isLeft ? 'text-right' : 'text-left'}`}>
                      <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-stellar font-medium mb-2">{item.company}</p>
                      <span className="inline-block text-sm bg-stellar/20 text-stellar-glow px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  <p className={`text-muted-foreground leading-relaxed ${isLeft ? 'text-right' : 'text-left'}`}>
                    {item.description}
                  </p>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};