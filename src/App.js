import './App.css';
import AchievementsSection from './components/AchievementSection.js';
import BioSection from './components/BioSection.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import ImageSection from './components/ImageSection.js';
import TimelineSection from './components/TimelineSection.js';

function App() {
  const events = [
    { date: '1937', description: 'Ratan Tata is born to Soonoo and Naval Tata' },
    { date: '1955', description: 'Leaves for Cornell University (Ithaca, New York, USA) at age 17; goes on to study architecture and engineering over a seven-year period.' },
    { date: '1962', description: 'Awarded bachelor of architecture degree.' },
    { date: '1962', description: 'Joins the Tata group as an assistant in Tata Industries; later in the year, spends six months training at the Jamshedpur plant of Tata Engineering and Locomotive Company (now called Tata Motors).' },
    { date: '1963', description: 'Moves to Tata Iron and Steel Company, or Tisco (now called Tata Steel), at its Jamshedpur facility for a training programme' },
    { date: '1965', description: 'Is appointed technical officer in Tisco’s engineering division' },
    { date: '1969', description: 'Works as the Tata group’s resident representative in Australia.' },
    { date: '1970', description: 'Returns to India, joins Tata Consultancy Services, then a software fledgling, for a short stint.' },
    { date: '1971', description: 'Is named director-in-charge of National Radio and Electronics (better known as Nelco), an ailing electronics enterprise.' },
    { date: '1974', description: 'Joins the board of Tata Sons as a director.' },
    { date: '1975', description: 'Completes the Advanced Management Program at Harvard Business School.' },
    { date: '1981', description: ' Is appointed Chairman of Tata Industries; begins the process of transforming it into a promoter of high-technology businesses.' },
    { date: '1983', description: 'Drafts the Tata strategic plan.'},
    { date: '1986-89', description: 'Serves as Chairman of Air India, the national carrier.' },
    { date: '1991', description: 'Takes over from JRD Tata as Chairman of Tata Sons and Chairman of the Tata trusts and Begins restructuring of the Tata group at a time when the liberalisation of the Indian economy is underway.' },
    { date: '2000', description: 'The growth and globalisation drive of the Tata group gathers pace under his stewardship and the new millennium sees a string of high-profile Tata acquisitions, among them Tetley, Corus, Jaguar Land Rover, Brunner Mond, General Chemical Industrial Products and Daewoo.' },
    { date: '2008', description: 'Launches the Tata Nano, born of the trailblazing small car project he guided and commanded with zeal and determination.'},
    { date: 'Dec-2012', description: ' Steps down as Chairman of Tata Sons after 50 years with the Tata group; is appointed Chairman Emeritus of Tata Sons.'},
  ];


  return (
    <div className='App'>
      <div className='container'>
      <Header />
      </div>
      <ImageSection 
        src='https://theinnerdetail.com/wp-content/uploads/2021/07/ratan.jpg'
        // src='https://cdna.artstation.com/p/assets/images/images/037/789/516/large/raja-huzoor-tata-take01.jpg?1621334418'
        // src='https://e0.pxfuel.com/wallpapers/388/924/desktop-wallpaper-ratan-tata-sets-his-eyes-on-bollywood.jpg'
        // src='https://asiaone.co.in/wp-content/uploads/2024/04/Ratan-Tata.jpg'
        alt='Sir Ratan Tata'
      />
      <BioSection
        title="Sir Ratan Tata (1904-1982)"
        biography=
              "Ratan Naval Tata (born 28 December 1937) is an Indian industrialist, philanthropist and former chairman of Tata Sons. He was a chairman of the Tata Group from 1990 to 2012, and interim chairman from October 2016 through February 2017. He continues to head its charitable trusts.In 2008, he received the Padma Vibhushan, the second highest civilian honour in India, after receiving the Padma Bhushan, the third highest civilian honour in 2000.
              He is the son of Naval Tata, who was adopted by Ratan-ji Tata, son of Jamset-ji Tata, the founder of the Tata Group. He graduated from the Cornell University College of Architecture with a bachelor's degree in architecture. He joined Tata in 1961, where he worked on the shop floor of Tata Steel. He later succeeded J. R. D. Tata as chairman of Tata Sons upon the latter's retirement in 1991. Under his tenure the Tata Group acquired Tetley, Jaguar Land Rover, and Corus, in an attempt to turn Tata from a largely India-centric group into a global business. Tata is also one of the largest philanthropists in the world, having donated around 60–65% of his income to charity.
              Ratan Tata is also a prolific investor and has made numerous investments in several startups. Tata has invested in over 30 start-ups to date, most in a personal capacity and some via his investment company."/>
      <AchievementsSection
        title="Key Achievements"
        achievements={[
          'Founding Tata Steel: Played a pivotal role in founding Tata Steel (formerly Tata Iron and Steel Company) in 1907, which became one of India largest steel producers.',
          'Establishing Tata Motors: Instrumental in the establishment of Tata Motors in 1945, which later introduced the Tata Nano, the world’s cheapest car',
          'Creating Tata Consultancy Services (TCS): Expanded Tata Consultancy Services (TCS) into a global IT services leader, contributing significantly to the IT sector growth in India',
          'Developing Tata Power: Contributed to the growth of Tata Power, which is one of India largest and oldest power generation companies',
          'Philanthropic Efforts: Was a major supporter of various charitable initiatives through the Tata Trusts, focusing on healthcare, education, and rural development',
          'Tata Education Trust: Supported the creation and development of educational institutions, including the Tata Institute of Fundamental Research (TIFR) and the Tata Institute of Social Sciences (TISS)',
          'Tata Chemicals and Innovation: Played a key role in the growth and innovation at Tata Chemicals, which became a leader in the production of chemicals and fertilizers',
          'Tata Motors Acquisition of Jaguar and Land Rover: Oversaw Tata Motors’ acquisition of British car brands Jaguar and Land Rover, expanding the company global footprint',
          'Leading Tata Groups Expansion: Guided the Tata Groups diversification into various industries, including hospitality (Taj Hotels), steel, telecommunications, and more',
          'Contributions to Indian Industry and Economy: His leadership and vision helped transform the Tata Group into a globally recognized conglomerate, significantly impacting the Indian economy and industry',
        ]}
        imageUrl={'https://image.slidesharecdn.com/tata-141231044922-conversion-gate02/85/Tata-group-an-overview-1-638.jpg'}
      />
      <TimelineSection
        title="Major Achievements Timeline"
        events={events}
        imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/35._ISC-Symposium-Ratan_N._Tata_in_der_Pause-HSGN_028-01812.JPG/800px-35._ISC-Symposium-Ratan_N._Tata_in_der_Pause-HSGN_028-01812.JPG'}
      />
      <Footer />
    </div>
  );
}

export default App;
