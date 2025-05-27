
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-8">
            Art as Catalyst for Change
          </h2>
          
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            EMERGE is more than an art festival—it's a movement. We believe that contemporary 
            art has the power to challenge perspectives, spark conversations, and drive social change. 
            Our carefully curated program brings together visionary artists, activists, and thinkers 
            to explore the most pressing issues of our time.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-4">Contemporary Exhibitions</h3>
              <p className="text-gray-600">
                Cutting-edge installations and artworks that challenge conventional thinking and address current social issues.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-4">Live Performances</h3>
              <p className="text-gray-600">
                Musical acts and performance art that amplify voices from marginalized communities and promote social justice.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-4">Panel Discussions</h3>
              <p className="text-gray-600">
                Thought-provoking conversations with artists, critics, and activists about art's role in social transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
