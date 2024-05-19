"use client"
import AboutInfo from "../ui/about/AboutInfo";
import Blog from "../ui/blog/Blog";
import Gallery from "../ui/gallery/Gallery";
import Hero from "../ui/hero/Hero";
import Iconbox from "../ui/iconbox/Iconbox";
import IconboxStyle2 from "../ui/iconbox/IconboxStyle2";
import MovingText from "../ui/movingText/MovingText";
import Section from "../ui/section/Section";
import SectionHeading from "../ui/sectionHeading/SectionHeading";
import SectionHeadingStyle2 from "../ui/sectionHeading/SectionHeadingStyle2";
import Spacing from "../ui/spacing/Spacing";
import Testimonial from "../ui/testimonial/Testimonial";
import Timeline from "../ui/timeline/Timeline";
import VideoBlock from "../ui/videoBlock/VideoBlock";
import heroImgUrl from '../../../public/images/hero_img.png';
import AboutImgUrl from '../../../public/images/about.jpeg';


const portfolioData = [
  {
    imgUrl: '/images/portfolio_1.jpeg',
    title: 'Design Pattern',
  },
  {
    imgUrl: '/images/portfolio_2.jpeg',
    title: 'Mountain Illustration',
  },
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Summer Illustration',
  },
  {
    imgUrl: '/images/portfolio_4.jpeg',
    title: 'Background Illustration',
  },
  {
    imgUrl: '/images/portfolio_2.jpeg',
    title: 'Mountain Illustration',
  },
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Summer Illustration',
  },
  {
    imgUrl: '/images/portfolio_4.jpeg',
    title: 'Background Illustration',
  },
]

const funfactData = [
  {
    title: '07',
    subTitle: 'Years Experience',
  },
  {
    title: '160',
    subTitle: 'Project Completed',
  },
  {
    title: '200',
    subTitle: 'Satisfied Client',
  },
]

const educationData = [
  {
    time: '2022 - 2024',
    title: 'Computer Information Systems',
    subTitle: 'Bsc. in CIS by University of California',
  },
  {
    time: '2020 - 2021',
    title: 'Digital Media and Web Technology',
    subTitle: 'Bsc. in CIS by University of California',
  },
  {
    time: '2020 - 2021',
    title: 'User Experience Design',
    subTitle: 'Interaction Design Foundation',
  },
]
const experienceData = [
  {
    time: '2020 - 2021',
    title: 'Front-end Developer',
    subTitle: 'Marina Technology',
  },
  {
    time: '2020 - 2021',
    title: 'UI/UX Designer',
    subTitle: 'World Info Tech',
  },
  {
    time: '2020 - 2021',
    title: 'React Developer',
    subTitle: 'Laralink Ltd',
  },
]
const movingTextData = ['Navigating the Landscape of My Abilities', 'Navigating the Landscape of My Abilities'];
const brandingData = [
  {
    imgUrl: '/images/icons/figma.png',
    title: 'Figma',
    progress: '80%',
  }, 
  {
    imgUrl: '/images/icons/ps.png',
    title: 'Photoshop',
    progress: '70%',
  }, 
  {
    imgUrl: '/images/icons/ai.png',
    title: 'Illustrator',
    progress: '65%',
  }, 
  {
    imgUrl: '/images/icons/sketch.png',
    title: 'Sketch',
    progress: '80%',
  },
  {
    imgUrl: '/images/icons/figma.png',
    title: 'Framer',
    progress: '90%',
  },
];


const serviceData = [
  {
    imgUrl: '/images/icons/customize-computer.svg',
    title: 'UI/UX Design',
    subTitle: 'Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.',
  },
  {
    imgUrl: '/images/icons/vector-alt.svg',
    title: 'Logo Design',
    subTitle: 'Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.',
  },
  {
    imgUrl: '/images/icons/illustration.svg',
    title: 'Illustration Design',
    subTitle: 'Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.',
  },
  {
    imgUrl: '/images/icons/layers.svg',
    title: 'Motion graphics',
    subTitle: 'Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.',
  },  
]

const testimonialData = [
  {
    imgUrl: '/images/avatar_1.png',
    title: 'Angrew Bolar',
    subTitle: 'Envato Client',
    text: 'Pure bliss at our exceptional resort! Impeccable service, breathtaking views, and exquisite dining, spa, and infinity pool experiences await your perfect escape.',
    rating: '4.5',
  },
  {
    imgUrl: '/images/avatar_2.png',
    title: 'Bebo Money',
    subTitle: 'Envato Client',
    text: 'Pure bliss at our exceptional resort! Impeccable service, breathtaking views, and exquisite dining, spa, and infinity pool experiences await your perfect escape.',
    rating: '4',
  },
  {
    imgUrl: '/images/avatar_3.png',
    title: 'Jon Thomas',
    subTitle: 'Envato Client',
    text: 'Pure bliss at our exceptional resort! Impeccable service, breathtaking views, and exquisite dining, spa, and infinity pool experiences await your perfect escape.',
    rating: '5',
  },
]

const blogData = [
  {
    imgUrl: '/images/blog_1.jpeg',
    date: '22 April 2024',
    title: 'Mastering User Experience: Key Principles and Best Practices',
    linkUrl: '/blog-details',
  },
  {
    imgUrl: '/images/blog_2.jpeg',
    date: '23 April 2024',
    title: 'The Art of Interface Design: Crafting Engaging User Experiences',
    linkUrl: '/blog-details',
  },
  {
    imgUrl: '/images/blog_3.jpeg',
    date: '24 April 2024',
    title: 'Navigating the UX Landscape: Trends and Innovations to Watch',
    linkUrl: '/blog-details',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="cs_hero cs_style_1 cs_center position-relative cs_hobble" id="home">
        <Hero 
          titleUp='Hi There'
          title='I am Jaky <br/> UX designer'
          subTitle='My passion for design, code, and web interaction fuels my journey in the web design realm.'
          downloadFile='Resume.pdf'
          movingText={movingTextData}
          imgUrl={heroImgUrl}
        />
      </Section>


      {/* Portfolio Section */}
      <Section topLg="126" topMd="80" bottomLg="80" bottomMd="40" id="portfolio">
        <div className="container">
          <div className="cs_grid_1">
            <div className="cs_grid_item">
              <SectionHeading 
                subTitle='Portfolio'
                title='Latest projects' 
              />
              <Spacing lg='50' md='50' />
            </div>
            <Gallery data={portfolioData} />
          </div>
        </div>
      </Section>


      {/* About Section */}
      <Section className='cs_ternary_bg' topLg="145" topMd="70" bottomLg="150" bottomMd="80" id="about">
        <div className="container">
          <SectionHeading 
            title='Unveiling the <br/> Layers of My Story'
            subTitle='About Me'
            varient='text-center'
          />
          <Spacing lg='95' md='50' />
          <div className="row align-items-center cs_gap_y_50">
            <div className="col-lg-5">
              <VideoBlock 
                videoSrc='https://www.youtube.com/embed/UJEUwEJ6gH4'
                imgUrl={AboutImgUrl}
              />
            </div>
            <div className="col-lg-7">
              <AboutInfo 
                text='Hello, I am Lora Gonzales transformation overnight? I ponder, as I
                sense a subtle shift within. If Im not the same, then who am I? Ah,
                the enigma unfolds! Embrace authenticity, for to others, what I seem
                to be is simply what I must appear to be, or rather, what I might have
                been perceived as, had walla will be the circumstances been different.'
                funfact={funfactData}
                email='loragonzales@gmail.com'
                phone='+44 2321 78736'
                location="USA"
              />
            </div>
          </div>
        </div>
      </Section>

      
      {/* Resume Seciton */}
      <Section topLg="145" topMd="75" bottomLg="145" bottomMd="75" id="resume">
        <div className="container">
          <SectionHeadingStyle2
            title='Academic knowledge and hands-on expertise'
            subTitle='Resume'
            downloadBtn={true}
            downloadFile='Resume.pdf'
          />
          <Spacing lg='95' md='50' />
          <div className="row cs_gap_y_50">
            <div className="col-lg-6">
              <Timeline title='Education' data={educationData}/>
            </div>
            <div className="col-lg-6">
              <div className="cs_pl_100">
                <Timeline title='Experience' data={experienceData} />
              </div>
            </div>
          </div>
        </div>
        <Spacing lg='135' md='70' />
        <MovingText data={movingTextData} />
        <Spacing lg='135' md='70' />
        <div className="container">
          <div className="cs_grid_5">
            {brandingData.map((item,index) => (
              <div
              className="cs_grid_item wow fadeIn"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
              key={index}
            >
              <IconboxStyle2 imgUrl={item.imgUrl} title={item.title} progress={item.progress} />
            </div>
          ))}
          </div>
        </div>
      </Section>

      
      {/* Service Section */}
      <Section className='cs_ternary_bg' topLg="145" topMd="75" bottomLg="150" bottomMd="80">
        <div className="container">
          <SectionHeading 
            title='Crafting Solutions Tailored <br/> to Your Needs' 
            subTitle='Services'
          />
          <Spacing lg='95' md='50' />
          <div className="row cs_gap_y_30">
            {serviceData.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <Iconbox {...item} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      
      {/* Testimonial Section */}
      <Section id="testimonial" topLg="145" topMd="75" bottomLg="145" bottomMd="75">
        <div className="container">
          <SectionHeading 
            title='Reviews from Our<br/> Satisfied Client' 
            subTitle='Testimonial'
            varient='text-center'
          />
          <Spacing lg='95' md='50' />
          <div className="row cs_gap_y_30">
            {testimonialData.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <Testimonial imgUrl={item.imgUrl} title={item.title} subTitle={item.subTitle} text={item.text} rating={item.rating}/>
              </div>
            ))}
          </div>
        </div>
      </Section>

      
      {/* Post Section */}
      <Section className="cs_ternary_bg" topLg="145" topMd="75" bottomLg="150" bottomMd="80">
        <div className="container">
          <SectionHeading
            title="Exploring Ideas, Trends, and Perspectives"
            subTitle="Blog"
          />
          <Spacing lg='95' md='50' />
          <div className="row cs_gap_y_50">
            {blogData.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <Blog {...item} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
