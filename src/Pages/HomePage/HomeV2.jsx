import AboutSection1 from '../../Components/About/AboutSection1';
import BlogSection from '../../Components/BlogsSection';
import BrandsSlider from '../../Components/BrandsSection';
import CtaSection2 from '../../Components/CtaSection.jsx/CtaSection2';
import CounterSection2 from '../../Components/FunSection/CounterSection2';
import HeroSection1 from '../../Components/HeroSection/HeroSection1';
import MedicalSolution from '../../Components/MedicalSolutionSection/MedicalSolution1';
import ProcessSection from '../../Components/ProcessSection';
import ProjectsSection1 from '../../Components/ProjectSection/ProjectsSection1';
import Section from '../../Components/Section';
import ServiceSection2 from '../../Components/Service/ServiceSection2';
import TeamSection from '../../Components/TeamSection';
import TestimonialSection from '../../Components/TestimonialSection';
import VideoSection from '../../Components/VideoSection';
import { useLanguage } from '../../utils/LanguageContext';

const HomeV2 = () => {
  const { t } = useLanguage();

  const HeroData = {
    backgroundImage: 'assets/img/hero_slider_4.jpg',
    title: t('doctors_need_help_patient_service'),
    subtitle: t('medical_description'),
    features: [
      t('this_man_for_it_medical_doctor'),
      t('we_provide_a_revolutionary_medical_service'),
    ],
    btnText: t('contact_now'),
    btnHref: '/contact',
    BtnText1: t('how_we_work'),
    videoHref: 'https://www.youtube.com/embed/rRid6GCJtgc',
    heroShape: 'assets/img/icons/hero_shape_1.png',
    supportText: {
      number: '24',
      unit: t('hours'),
      description: t('support'),
    },
    iconBoxes: [
      {
        icon: 'assets/img/icons/call_icon_1.png',
        title: t('emergency_call'),
        subtitle: t('support_and_easy'),
        buttonHref: '/appointments',
        buttonText: t('appointment_now'),
      },
      {
        icon: 'assets/img/icons/message_icon_1.png',
        title: t('your_message'),
        subtitle: 'medixo25822@gmail.com',
        buttonHref: '/appointments',
        buttonText: t('appointment_now'),
      },
    ],
  };

  const aboutData = {
    sectionSubtitle: t('our_about_us'),
    sectionTitle: t('more_than_years'),
    aboutText: t('about_text'),
    experienceYears: '26+',
    experienceTitle: t('experience'),
    iconUrl: '/assets/img/icons/about_icon_1.png',
    title: t('client_support'),
    imgUrl: '/assets/img/about_img_4.jpg',
    iconUrl2: '/assets/img/icons/about_icon_2.png',
    title2: t('doctor_support'),
    imgUrl2: 'assets/img/about_img_5.jpg',
    aboutIconboxSubtitle: t('about_service_team'),
    readMoreText: t('read_more'),
    readMoreLink: '/',
    videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoText: t('how_we_work'),
    aboutMoreLink: '/about',
    aboutMoreText: t('about_more'),
    sectionImageUrl: '/assets/img/about_section_img_2.png',
  };

  const counterData = [
    {
      iconSrc: '/assets/img/icons/counter_icon_1.png',
      countTo: 567,
      suffix: '+',
      title: t('active_clients'),
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_2.png',
      countTo: 23,
      suffix: 'K+',
      title: t('team_support'),
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_3.png',
      countTo: 241,
      suffix: '+',
      title: t('projects_complete'),
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_4.png',
      countTo: 16,
      suffix: 'K+',
      title: t('award_winner'),
    },
  ];

  const serviceData = {
    subtitle: t('our_best_service'),
    title: t('high_quality_services'),
    description: t('services_description'),
    services: [
      {
        iconSrc: 'assets/img/icons/service_icon_15.png',
        title: t('pharmacology'),
        subtitle: t('service_subtitle'),
        link: '/service/service-details',
        imageSrc: 'assets/img/service_1.png',
      },
      {
        iconSrc: 'assets/img/icons/service_icon_16.png',
        title: t('orthopedic'),
        subtitle: t('service_subtitle'),
        link: '/service/service-details',
        imageSrc: 'assets/img/service_1.png',
      },
      {
        iconSrc: 'assets/img/icons/service_icon_17.png',
        title: t('hematology'),
        subtitle: t('service_subtitle'),
        link: '/service/service-details',
        imageSrc: 'assets/img/service_1.png',
      },
      {
        iconSrc: 'assets/img/icons/service_icon_18.png',
        title: t('plastic_surgery'),
        subtitle: t('service_subtitle'),
        link: '/service/service-details',
        imageSrc: 'assets/img/service_1.png',
      },
    ],
  };

  const brandData = [
    { image: '/assets/img/envato-logo.png', altText: t('brand_1') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_2') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_3') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_4') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_5') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_6') },
  ];

  const videoSectionData = {
    videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
    title: t('we_provide_medical_this_services'),
    title2: t('who_generally_alone'),
    highlightedText: t('health'),
    subtitle: t('about_text'),
    btnText: t('contact_now'),
    btnLink: '/contact',
    btnText1: t('discover_more'),
    btnLink1: '/about',
    shapeImage: 'assets/img/medical_brand.png',
  };

  const medicalSolutionData = {
    sectionSubtitle: t('why_choose_us'),
    sectionTitle: t('medical_solution_title'),
    sectionDescription: t('about_text'),
    cards: [
      {
        icon: '/assets/img/icons/service_icon_19.png',
        index: '01',
        title: t('medical_service'),
        description: t('service_subtitle'),
      },
      {
        icon: '/assets/img/icons/service_icon_10.png',
        index: '02',
        title: t('blood_check'),
        description: t('service_subtitle'),
      },
      {
        icon: '/assets/img/icons/service_icon_11.png',
        index: '03',
        title: t('heart_beat'),
        description: t('service_subtitle'),
      },
    ],
    mainImage: '/assets/img/medical_solution_3.png',
  };

  const ctaSectionData = {
    title: t('meet_the_team_support'),
    subtitle: t('for_us_there_are'),
    buttonText: t('contact_now'),
    buttonLink: '/contact',
  };

  const projectsSectionData = {
    sectionTitle: t('great_work'),
    sectionSubtitle: t('our_portfolio'),
    sectionDescription: t('portfolio_description'),
    projects: [
      {
        id: 1,
        title: t('medical_board'),
        subtitle: t('medical_doctor'),
        imageSrc: '/assets/img/project_4.jpg',
        link: '/',
      },
      {
        id: 2,
        title: t('gynecology_project'),
        subtitle: t('medical_doctor'),
        imageSrc: '/assets/img/project_5.jpg',
        link: '/',
      },
      {
        id: 3,
        title: t('dental_project'),
        subtitle: t('medical_doctor'),
        imageSrc: '/assets/img/project_6.jpg',
        link: '/',
      },
      {
        id: 4,
        title: t('neurology_project'),
        subtitle: t('medical_doctor'),
        imageSrc: '/assets/img/project_7.jpg',
        link: '/',
      },
      {
        id: 5,
        title: t('eye_care_project'),
        subtitle: t('medical_doctor'),
        imageSrc: '/assets/img/project_8.jpg',
        link: '/',
      },
      {
        id: 6,
        title: t('surgery_project'),
        subtitle: t('medical_doctor'),
        imageSrc: '/assets/img/project_9.jpg',
        link: '/',
      },
    ],
  };

  const teamData = {
    subtitle: t('our_team_member'),
    title: t('meet_our_specialist'),
    sliderData: [
      {
        name: 'Dr. Norma Pedric',
        profession: t('neurologist'),
        imageUrl: '/assets/img/team_1.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. James Lewis',
        profession: t('neurologist'),
        imageUrl: '/assets/img/team_3.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Sophia Anderson',
        profession: t('neurologist'),
        imageUrl: '/assets/img/team_4.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Michael Thompson',
        profession: t('neurologist'),
        imageUrl: 'assets/img/team_5.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. David Wilson',
        profession: t('neurologist'),
        imageUrl: '/assets/img/team_6.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
    ],
  };

  const testimonialData = {
    thumbnail: '/assets/img/testimonial_1.png',
    testimonials: [
      {
        rating: 2,
        subtitle: t('testimonial_subtitle'),
        avatar: 'assets/img/avatar_1.png',
        name: 'Dr. Mehara Bara',
        position: t('dental_manager'),
      },
      {
        rating: 4,
        subtitle: t('testimonial_subtitle'),
        avatar: 'assets/img/avatar_2.png',
        name: 'John Doe',
        position: t('healthcare_professional'),
      },
      {
        rating: 3,
        subtitle: t('testimonial_subtitle'),
        avatar: 'assets/img/avatar_2.png',
        name: 'John Doe',
        position: t('healthcare_professional'),
      },
    ],
  };

  const processData = {
    sectionSubtitle: t('our_working_process'),
    sectionTitle: t('doctor_supporting_patient'),
    sectionDescription: t('about_text'),
    processSlides: [
      {
        id: 1,
        imageUrl: '/assets/img/process_1.png',
        title: t('make_appointment'),
        subtitle: t('medical_dolor_text'),
        bgImageUrl: '/assets/img/overlay_bg_1.jpeg',
        link: '/service/service-details',
      },
      {
        id: 2,
        imageUrl: '/assets/img/process_2.png',
        title: t('get_consultant'),
        subtitle: t('medical_dolor_text'),
        bgImageUrl: '/assets/img/overlay_bg_1.jpeg',
        link: '/service/service-details',
      },
      {
        id: 3,
        imageUrl: '/assets/img/process_3.png',
        title: t('take_treatment'),
        subtitle: t('medical_dolor_text'),
        bgImageUrl: '/assets/img/overlay_bg_1.jpeg',
        link: '/service/service-details',
      },
      {
        id: 4,
        imageUrl: '/assets/img/process_4.png',
        title: t('get_relief'),
        subtitle: t('medical_dolor_text'),
        bgImageUrl: '/assets/img/overlay_bg_1.jpeg',
        link: '/service/service-details',
      },
    ],
  };

  const blogsData = {
    sectionTitle: t('our_largest_blog'),
    sectionSubtitle: t('latest_posts_articles'),
    postsData: [
      {
        title: t('medical_of_this_working_health_blog'),
        subtitle: t('medical_standard_chunk'),
        date: t('may_02'),
        category: t('medical'),
        author: t('admin'),
        thumbnail: '/assets/img/post_1.jpeg',
        btnText: t('read_more'),
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: t('there_is_only_one_thing_that_is_hospital'),
        subtitle: t('medical_standard_chunk'),
        date: t('may_02'),
        category: t('medical'),
        author: t('admin'),
        thumbnail: 'assets/img/post_2.jpeg',
        btnText: t('read_more'),
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: t('this_working_world_and_infection_prevention'),
        subtitle: t('medical_standard_chunk'),
        date: t('may_02'),
        category: t('medical'),
        author: t('admin'),
        thumbnail: 'assets/img/post_3.jpeg',
        btnText: t('read_more'),
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: t('medical_of_this_working_health_blog'),
        subtitle: t('medical_standard_chunk'),
        date: t('may_02'),
        category: t('medical'),
        author: t('admin'),
        thumbnail: 'assets/img/post_1.jpeg',
        btnText: t('read_more'),
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
    ],
  };

  return (
    <>
      {/* Start Hero Section */}
      <HeroSection1 data={HeroData} />
      {/* End Hero Section */}
      {/* Start About Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 cs_type_1 position-relative"
      >
        <AboutSection1 data={aboutData} />
      </Section>

      {/* End About Section */}
      {/* Start Counter Section */}

      <Section
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_counter_area_2"
      >
        <CounterSection2 data={counterData} />
      </Section>

      {/* End Counter Section */}
      {/* Start Service Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_blue_bg cs_bg_filed"
        backgroundImage="assets/img/service_bg_3.jpg"
      >
        <ServiceSection2 data={serviceData} />
      </Section>

      {/* End Service Section */}
      {/* Start Brand Section */}
      <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
        <BrandsSlider hr={true} data={brandData} />
      </Section>

      {/* End Brand Section */}
      {/* Start Video Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_video_area position-relative"
      >
        <VideoSection data={videoSectionData} />
      </Section>

      {/* End Video Section */}
      {/* Start Medical Solution Section */}

      <Section
        className="cs_blue_bg position-relative"
        backgroundImage="/assets/img/medical_solution_bg_1.jpg"
      >
        <MedicalSolution data={medicalSolutionData} />
      </Section>

      {/* End Medical Solution Section */}
      {/* Start CTA Section */}
      <Section className="cs_cta cs_style_3 cs_accent_bg">
        <CtaSection2 data={ctaSectionData} />
      </Section>

      {/* End CTA Section */}
      {/* Start Projects Section */}
      <Section topSpaceLg="70" topSpaceMd="110">
        <ProjectsSection1 data={projectsSectionData} />
      </Section>

      {/* End Projects Section */}
      {/* Start Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        className="cs_team_section position-relative"
      >
        <TeamSection
          variant={'cs_pagination cs_style_2 cs_accent_color'}
          bgColor={true}
          data={teamData}
        />
      </Section>

      {/* End Team Section */}
      {/* Start Testimonial Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_testimonial_area"
        backgroundImage="/assets/img/testomonial_bg_1.png"
      >
        <TestimonialSection data={testimonialData} />
      </Section>

      {/* End Testimonial Section */}
      {/* Start Process Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg_2"
      >
        <ProcessSection data={processData} />
      </Section>

      {/* End Process Section */}
      {/* Start Blog Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogsData} />
      </Section>
      {/* End Blog Section */}
    </>
  );
};

export default HomeV2;