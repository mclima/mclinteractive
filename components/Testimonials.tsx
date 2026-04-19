interface Testimonial {
  company: string;
  quote: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      company: 'Armelle for Kids, LLC',
      quote: 'Maria is not only a wonderful person with your best interest at heart, she is also a web developer who will not give up until all is well with your website. She is knowledgeable, crafty, technical, flexible and open minded.'
    },
    {
      company: 'Eckerle Law',
      quote: 'Maria re-did my blog. I love it. She immediately got my aesthetic and the functionality right, which was fantastic. She also has the coding part down and was extremely diligent until everything was tested and re-tested.'
    },
    {
      company: 'Salih Salon, New York',
      quote: 'I am exceptionally happy with the website Maria created for my salon business in New York City. She delivered a beautiful site that spoke directly to the style and essence of my business.'
    },
    {
      company: 'TerriKelly, LLC™',
      quote: 'Maria cares so much and is incredibly responsive about my business. And the work she creates is excellent. She is intuitive, intelligent, and very talented.'
    },
    {
      company: 'Dawnsense',
      quote: 'Maria helped design two gorgeous sales pages for my personal branding site. She really brought both pages to life with appealing graphics and design.'
    },
    {
      company: 'Creative Director',
      quote: 'Maria has always been my first choice for any web development project. She knows how to solve any interactive problem. Her development projects flow with ease, and the final product is always beautiful.'
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">CLIENT FEEDBACK</span>
          <h2 className="text-5xl md:text-7xl font-black text-accent mt-4 mb-6">
            What They Say
          </h2>
          <p className="text-xl text-accent/60 max-w-2xl">
            Trusted by businesses across industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-accent/5 border-2 border-accent/10 p-8 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-12 h-1 bg-primary mb-4"></div>
                <h3 className="font-black text-accent text-lg uppercase tracking-wide">
                  {testimonial.company}
                </h3>
              </div>
              <p className="text-accent/70 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
