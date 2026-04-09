import v1  from "../../assets/videos/1.mp4"
import v2  from "../../assets/videos/2.mp4"
import v3  from "../../assets/videos/3.mp4"
import v4  from "../../assets/videos/4.mp4"



export default function ProjectVideoSection() {
  const videos = [
    {
      thumbnail: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      video: v1 ,
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      video: v2 ,
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      video: v3 ,
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      video: v4 ,   
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#686868]">
            Project <span className="text-[#FC763A]">Videos</span>
          </h2>

          <p className="mt-3 text-[#686868]/80 max-w-2xl mx-auto">
            Explore our real solar installations and see how we deliver efficient and reliable energy solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {videos.map((item, index) => (
            <div
              key={index}
              className="group  overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              
              {/* VIDEO */}
              <div className="w-full h-[250px]">
                <iframe
                  src={item.video}
                  className="w-full  object-cover h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* BOTTOM BAR */}
              <div className="p-4 bg-white">
                <p className="text-sm font-medium text-[#686868]">
                  Solar Project {index + 1}
                </p>
              </div>

            </div>
          ))}

        </div>


      </div>
    </section>
  );
}