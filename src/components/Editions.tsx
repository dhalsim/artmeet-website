
const Editions = () => {
  const editions = [
    {
      year: "2025",
      status: "Upcoming",
      period: "October - December 2025",
      description: "The third edition of EMERGE promises to be our most ambitious yet, featuring groundbreaking installations and performances that challenge the boundaries of contemporary art.",
      theme: "Transformation & Resistance"
    },
    {
      year: "2024",
      status: "Past Edition",
      period: "September 15-17, 2024",
      description: "Our second edition brought together visionary artists from around the world, exploring themes of identity, displacement, and social justice through powerful visual narratives.",
      theme: "Voices Unheard"
    },
    {
      year: "2023",
      status: "First Edition",
      period: "October 2023",
      description: "The inaugural EMERGE festival introduced our mission to merge contemporary art with social consciousness, setting the foundation for this vital cultural movement.",
      theme: "Breaking Boundaries"
    }
  ];

  return (
    <section id="editions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Festival Editions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three years of artistic excellence, social engagement, and cultural transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {editions.map((edition, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-4xl font-bold text-purple-900 mb-2">
                  {edition.year}
                </h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  edition.status === 'Upcoming' 
                    ? 'bg-orange-100 text-orange-800' 
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {edition.status}
                </span>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {edition.theme}
                </h4>
                <p className="text-orange-600 font-medium mb-4">
                  {edition.period}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {edition.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Editions;
