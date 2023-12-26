import React from "react";
import Card from "./Card";
// import Footer from "./Footer";

// import Signup from './Signup';
// import { Col, Row, Container } from "react-bootstrap";

export default function Home() {
  const backgroundImageUrl = "url(/images/back.jpeg)";
  const containerStyle = {
    background: backgroundImageUrl,
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat", // Adjust as needed
    height: "400vh", // Set height as needed
    // Add other styles as needed
  };

  const cardData = [
    // Mumbai
    {
      title: "Mumbai",
      image: "/images/Mumbai.jpg",
      description:
        "Gateway of India, Marine Drive, Elephanta Caves, Juhu Beach, Haji Ali Dargah, Siddhivinayak Temple",
      details:
        "Mayanagri, the city of dreams, the one that never sleeps, India’s financial centre, Bollywood—Mumbai has many names and it lives up to each of them every day.  Mumbai is among the most populated Maharashtra tourist places. Dotted with well-maintained architectural wonders from India’s colonial past, Mumbai offers a visual treat to Gothic architecture lovers.",
    },
    // Lonavala
    {
      title: "Lonavala",
      image: "/images/Lonavala.jpg",
      description:
        "Rajmachi Point, Tiger’s Leap, Bhushi Dam, Karla Caves, Lohagad Fort",
      details:
        "Located between Mumbai and Pune, this beautiful hill station offers a quick getaway from the rushed city life. Lonavala offers a scenic drive from both cities. The beautiful winding roads and long tunnels on the Pune-Mumbai Expressway is a reason enough to keep going back to Lonavala. While Lonavala itself is a very small hill station, it is surrounded by some of the best tourist places in Maharashtra such as Pawna Lake, Lohagarh Fort, Visapur Fort, Tiger’s Point, Bhaja Caves, Kune Falls and Shree Narayani Dham Temple. You can also enjoy camping and trekking in Lonavala.",
    },
    // Pune
    {
      title: "Pune",
      image: "/images/pune.jpg",
      description:
        "Shaniwar Wada, Aga Khan Palace, Sinhagad Fort, Osho Ashram, Dagdusheth Halwai Ganpati Temple",
      details:
        "Cultural capital of Maharashtra, Pune holds a place of pride in every Marathi’s heart. Once a political centre of the Indian sub-continent, Pune was the seat of Peshwas of the Maratha Empire. The district alone boasts  17 forts of which the most famous are Shaniwar Wada, Singhagad Fort, and Purandar Fort, closely followed by a remarkably different- looking Aga Khan Palace that served as a prison for Mahatma Gandhi and Kasturba Gandhi soon after he launched the Quit India movement. Pune is a heaven for an art, culture, and adventure lover.",
    },
    // khandala
    {
      title: "Khandala",
      image: "/images/Khandala.jpg",
      description:
        "Karla and Bhanja Caves, Della Adventure Park, Sunil’s Celebrity Wax Museum, and Aadishakti Mata Temple",
      details:
        "Located quite close to Lonavala, Khandala is one of the famous places in Maharashtra, thanks to a popular Bollywood song. The hill station enjoys pleasant weather throughout the year and turns lush green during the monsoons. In addition to the pristine lakes and beautiful waterfalls, the quaint little hill station offers views of picturesque peaks and stunning valleys. Some popular attractions in Khandala include Karla and Bhanja Caves, Della Adventure Park, Sunil’s Celebrity Wax Museum and Aadishakti Mata Temple.",
    },
    // Matheran
    {
      title: "Matheran",
      image: "/images/Matheran.jpg",
      description:
        "Panorama Point, Louisa Point, Charlotte Lake, Echo Point, Porcupine Point",
      details:
        "If you prefer a non-touristy hill station away from the hustle and bustle of weekend travellers, then Matheran is the right choice. What makes Matheran an extraordinary experience is the absence of cars and buses on the road. Yes, you read it right. Cars are not allowed in Matheran, leaving the pathways free for leisurely walks. The town offers many trekking trails to various viewpoints from where you can enjoy alluring views of the sunrise, sunset and mountains. The peaceful and picturesque Charlotte Lake is an ideal spot for picnics and camping.",
    },
    // pratapgarh
    {
      title: "Pratapgarh Fort",
      image: "/images/Pratapgarh.jpg",
      description: "Pratapgarh Fort, Bhavani Temple, Afzal Khan’s Tomb",
      details:
        "Located at a distance of 21 km from Mahabaleshwar, Pratapgarh Fort is a popular mountain fort in Maharashtra. It was built by Chhatrapati Shivaji Maharaj and stands tall at 3543 ft above sea level. This popular hilltop with splendid architecture is divided into two parts–the upper and lower forts. Besides enjoying and capturing panoramic views of the Konkan coast, lakes and valleys, you can seek the blessings of goddess Bhavani at the lower fort..",
    },
    // Kalavantin Durg
    {
      title: "Tarkarli",
      image: "/images/Tarkarli.jpg",
      description:
        "Tarkali Beach, Devbag Beach, Karli Backwaters, Sindhudurg Fort, Malvan Marine Sanctuary",
      details:
        "This small town located at the convergence of the Arabian Sea and Karli river is known for its white-sand beaches and pristine water. It is a newfound holiday destination and is untouched by commercialisation. Tarkarli is known for the fine talcum-powder like sand. The beaches here are perfect for relaxing and enjoying different water sports. While at the beach, do not miss the beautiful sunset and the sight of dolphins jumping around in the water.",
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
    // Add more cards as needed
  ];

  return (
    <div>
      <div className="hm" style={containerStyle}>
        <div className="App">
          <div className="container">
            <div className="row">
              {cardData.map((card, index) => (
                <div className="col-md-4" key={index}>
                  <Card {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* forts  */}
      </div>
    </div>
  );
}
