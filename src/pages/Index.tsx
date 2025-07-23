import { Timeline } from "@/components/Timeline";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import constellationHero from "@/assets/constellation-hero.jpg";
import chiefArchitect from "@/assets/chief-architect.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${constellationHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="animate-float">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-stellar via-primary-glow to-nebula bg-clip-text text-transparent">
              Constellation AI
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-stellar to-nebula mx-auto mb-8 animate-glow"></div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
              Pioneering the future of artificial intelligence through innovative constellation-based learning systems. 
              We harness the power of distributed intelligence to create AI solutions that adapt, evolve, and excel.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our cutting-edge research in neural network architectures, quantum-inspired algorithms, and 
              autonomous systems positions us at the forefront of the AI revolution. We don't just build AI — 
              we cultivate digital consciousness that understands, learns, and grows.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Badge variant="secondary" className="px-4 py-2 text-stellar bg-stellar/20 border-stellar/40">
                Machine Learning
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-stellar bg-stellar/20 border-stellar/40">
                Neural Networks
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-stellar bg-stellar/20 border-stellar/40">
                Quantum AI
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-stellar bg-stellar/20 border-stellar/40">
                Autonomous Systems
              </Badge>
            </div>
          </div>
          
          <div className="pt-12">
            <Button 
              size="lg" 
              className="bg-stellar hover:bg-stellar-glow text-white px-8 py-3 text-lg font-medium shadow-[0_0_30px_hsl(var(--stellar)_/_0.4)] hover:shadow-[0_0_50px_hsl(var(--stellar-glow)_/_0.6)] transition-all duration-500"
              onClick={() => document.getElementById('chief-architect')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Meet Our Chief Architect
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-stellar/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-stellar rounded-full mt-2 animate-stellar-pulse"></div>
          </div>
        </div>
      </section>

      {/* Chief Architect Section */}
      <section id="chief-architect" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-stellar to-nebula bg-clip-text text-transparent">
              Chief Architect
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-stellar to-nebula mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leader driving our technological innovation and architectural excellence.
            </p>
          </div>

          {/* Biography Card */}
          <Card className="mb-16 p-8 bg-card/80 backdrop-blur-sm border-stellar/20 hover:border-stellar/40 transition-all duration-500">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="relative">
                  <img 
                    src={chiefArchitect} 
                    alt="Chief Architect" 
                    className="w-full max-w-sm mx-auto rounded-lg shadow-[0_0_30px_hsl(var(--stellar)_/_0.3)] hover:shadow-[0_0_50px_hsl(var(--stellar-glow)_/_0.4)] transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-stellar/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">Dr. Alexandra Chen</h3>
                  <p className="text-xl text-stellar font-medium mb-4">Chief Architect & Co-Founder</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-cosmic text-foreground">Ph.D. Computer Science</Badge>
                    <Badge className="bg-cosmic text-foreground">MIT '08</Badge>
                    <Badge className="bg-cosmic text-foreground">15+ Years Experience</Badge>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dr. Alexandra Chen is a renowned computer scientist and visionary architect who has dedicated her career 
                    to pushing the boundaries of artificial intelligence. With over 15 years of experience in machine learning, 
                    distributed systems, and neural network optimization, she brings unparalleled expertise to Constellation AI.
                  </p>
                  
                  <p>
                    Her groundbreaking research in quantum-inspired learning algorithms has been published in over 40 
                    peer-reviewed journals, earning her recognition as one of the top 100 AI researchers globally. 
                    Alexandra's innovative approach to constellation-based neural architectures forms the foundation 
                    of our proprietary AI systems.
                  </p>
                  
                  <p>
                    Before founding Constellation AI, Alexandra led AI research initiatives at several Fortune 500 companies, 
                    where she developed systems that now process billions of transactions daily. Her passion for creating 
                    AI that genuinely understands and adapts to human needs drives our mission to build the next generation 
                    of intelligent systems.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Professional Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Professional Journey
            </h3>
            <Timeline />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;