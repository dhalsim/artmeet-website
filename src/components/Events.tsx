
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Events = () => {
  const events = [
    {
      type: "Exhibition",
      title: "Voices of Resistance",
      artist: "Collective of 12 International Artists",
      time: "Sept 15-17, 10AM-8PM",
      description: "A powerful exhibition exploring themes of migration, identity, and human rights through multimedia installations.",
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      type: "Concert",
      title: "Sounds of Change",
      artist: "Maya Chen & The Social Justice Orchestra",
      time: "Sept 16, 7PM-9PM",
      description: "An evening of music that bridges cultural divides and amplifies stories of resilience and hope.",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      type: "Talk",
      title: "Art in the Age of Crisis",
      artist: "Dr. Amara Johnson & Panel",
      time: "Sept 17, 2PM-4PM",
      description: "Leading voices discuss how contemporary art responds to and shapes our understanding of global challenges.",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      type: "Exhibition",
      title: "Digital Dialogues",
      artist: "Tech Collective NYC",
      time: "Sept 15-17, 10AM-6PM",
      description: "Interactive digital art installations exploring surveillance, privacy, and digital rights in the modern world.",
      image: "photo-1494891848038-7bd202a2afeb"
    },
    {
      type: "Performance",
      title: "Sacred Spaces",
      artist: "Diverse Faith Communities",
      time: "Sept 16, 3PM-5PM",
      description: "A collaborative performance piece exploring spirituality, community, and belonging across cultures.",
      image: "photo-1466442929976-97f336a657be"
    },
    {
      type: "Workshop",
      title: "Community Canvas",
      artist: "Local Artists Collective",
      time: "Sept 17, 10AM-12PM",
      description: "A hands-on workshop where visitors contribute to a large-scale community mural addressing local issues.",
      image: "photo-1473177104440-ffee2f376098"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Festival Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three days of immersive experiences designed to challenge, inspire, and unite our community around critical social issues.
          </p>
        </div>
        
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-purple-200 to-orange-200 relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${event.image}?auto=format&fit=crop&w=400&h=300`}
                  alt={event.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-orange-600 font-medium mb-2">
                  {event.artist}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {event.time}
                </p>
                <p className="text-gray-700 mb-6">
                  {event.description}
                </p>
                <Button className="w-full bg-purple-900 hover:bg-purple-800 text-white">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Events;
