import React from "react";
import Forts from "./Forts";
// import Footer from "./Footer";
import "./Css/FortD.css";
export default function FortD() {
  //   const backgroundImageUrl = "url(/images/back.jpeg)";
  const containerStyling = {
    // background: backgroundImageUrl,
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat", // Adjust as needed
    height: "300vh", // Set height as needed
    // background,
    // Add other styles as needed
  };

  const fortData = [
    // Pratapgad
    {
      title: "Pratapgad",
      image: "/images/Pratapgarh.jpg",
      description: "Pratapgarh Fort, Bhavani Temple, Afzal Khan’s Tomb",
      details:
        "Located at a distance of 21 km from Mahabaleshwar, Pratapgarh Fort is a popular mountain fort in Maharashtra. It was built by Chhatrapati Shivaji Maharaj and stands tall at 3543 ft above sea level. This popular hilltop with splendid architecture is divided into two parts–the upper and lower forts. Besides enjoying and capturing panoramic views of the Konkan coast, lakes and valleys, you can seek the blessings of goddess Bhavani at the lower fort..",
    },
    // Raigad
    {
      title: "Raigad",
      image: "/images/raigad.jpg",
      description:
        "Raigad is situated 820 metres above sea level on the Sahyadris hills.",
      details:
        "The walls of this fort have seen a lot of intriguing events. Famously called the ‘Gibraltar of the East’ by Europeans, it belonged to the distinguished Maratha ruler – Chhatrapati Shivaji Maharaj. He seized the Raigad Fort from Rajchandraji More in 1659 but shortly after his demise, the fort was captured by the Mughals, and was eventually acquired by the British Empire. Despite the destruction caused over the years, the fort still stands glorious and will let you imagine its greatness and splendour back in 1030 CE.Speaking of splendour, the fort’s history is not the only thing that attracts visitors. Its majestic built and cleverly executed architecture, the view of the lush green valleys of Sahyadri Mountains and the beautiful Gangasagar Lake nearby are also reasons why this fort is famous amongst trekkers. With a difficult terrain and over 1,737 steps to reach the top, Raigad Fort is considered as one of the best forts in Maharashtra for trekking.",
    },
    // Lohagad
    {
      title: "Lohagad",
      image: "/images/Lohagad.jpg",
      description: "Standing 1,033 metres tall above sea level, Lohagad Fort",
      details:
        "A military marvel built in the 16th century, Lohagad Fort was ruled by the Maratha Empire throughout (apart from a short span of 5 years when it fell into the hands of the Mughal Empire). Standing 1,033 metres tall above sea level, Lohagad Fort is one of the best forts in Maharashtra for trekking. It is inter-connected to Visapur Fort by a small range. So, if you like a good challenge, you could visit two forts in one day.During the monsoon season, the trail to the fort is even more beautiful. If you take a small detour, you can explore the majestic Bhaja Caves, especially if spelunking is your thing. Another option is to scale this mountain in a motor vehicle, as there is a well-paved tar road that goes all the way up to the fort. Once you reach the top, you can enjoy the stunning views of Parvana Reservoir.",
    },
    //Rajmachi
    {
      title: "Rajmachi",
      image: "/images/rajmachi.jpg",
      description: " Rajmachi Trek ,Kondhana Village",
      details:
        "The trail to Rajmachi Fort encompasses several waterfalls, deep gorges and valleys, quaint and rustic villages, and water streams. If you are a painter or photographer, this trail is a Pandora of inspiration. If you thought the trail was everything, wait till you get to the two fortified peaks at Rajmachi – Shrivardhan and Manaranjan. The view is breath-taking. During the monsoon season, you can even marvel at the sight of fireflies dancing in the air.",
    },
    // Shivneri
    {
      title: "Shivneri",
      image: "/images/Shivneri.jpg",
      description:
        "Birthplace of the Maratha Empire’s founder Chhatrapati Shivaji Maharaj",
      details:
        "Famous for being the birthplace of the Maratha Empire’s founder Chhatrapati Shivaji Maharaj, the Shivneri Fort is a 17th-century military fortification. It is located in the Junnar district of Pune. The trek to this fort is a short one with beautiful scenery along the way. Because it is short, it is considered to be one of the best forts in Maharashtra for beginners as the steps are perfectly laid. At the fort, you will find two water springs called Ganga and Yamuna, which flow throughout the year. The pond in the middle of the fort and the gardens along the way are great places for you to relax and re-energise.",
    },
    // Tikona
    {
      title: "Tikona",
      image: "/images/Tikona-Fort.jpg",
      description: "Situated at a height of 1,107 metres",
      details:
        "Situated at a height of 1,107 metres, this is among the most popular forts in Maharashtra for trekking. The name Tikona comes from the triangular shape of the hill. Also called Vitangad, the fort is a dominant hill fortress of Konkan’s Pawan Maval region. It consists of enchanting Buddhist and Satavahana caves. Are you thinking about meditating already? But you might want to keep your eyes open to soak in the views of the Sahyadris, which will instantly melt all your exhaustion from trekking. After you have rested, you can also visit the Trimbakeshwar Mahadev Temple within the fort. It signifies the spiritual beliefs of the first residents of this fort.",
    },
  ];
  return (
    <>
      <div className="fd" style={containerStyling}>
        <h2 className="pagetitle"> BEST FORTS IN MAHARASHTRA </h2>
        <div className="App">
          <div className="container">
            <div className="row">
              {fortData.map((fort, index) => (
                <div className="col-md-4" key={index}>
                  <Forts {...fort} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
