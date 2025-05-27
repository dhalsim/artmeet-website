
const Artists = () => {
  const featuredArtists = [
    {
      name: "Elena Rodriguez",
      specialty: "Installation Artist",
      description: "Known for her powerful works addressing immigration and displacement, Elena's installations have been featured in major galleries worldwide.",
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      name: "Marcus Thompson",
      specialty: "Digital Media Artist",
      description: "A pioneer in using technology to explore racial justice and digital equity, Marcus creates immersive experiences that challenge viewers.",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      name: "Yuki Tanaka",
      specialty: "Performance Artist",
      description: "Through movement and sound, Yuki's performances explore themes of identity, belonging, and the intersection of tradition and modernity.",
      image: "photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  return (
    <section id="artists" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Featured Artists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary creators whose work challenges conventions and inspires social change.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredArtists.map((artist, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={`https://images.unsplash.com/${artist.image}?auto=format&fit=crop&w=400&h=400`}
                  alt={artist.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-purple-900 mb-2">
                {artist.name}
              </h3>
              <p className="text-orange-600 font-medium mb-4">
                {artist.specialty}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {artist.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white">
            View All Artists
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Artists;
