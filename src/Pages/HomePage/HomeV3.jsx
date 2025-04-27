import AboutSection2 from '../../Components/About/AboutSection2';
import BlogSection from '../../Components/BlogsSection';
import BrandsSlider from '../../Components/BrandsSection';
import ContactSection from '../../Components/ContactSection';
import CtaSection3 from '../../Components/CtaSection.jsx/CtaSection3';
import DentalSolution from '../../Components/DentalSolution';
import HeroSection2 from '../../Components/HeroSection/HeroSection2';
import LocationMap from '../../Components/LocationMap/Index';
import MedicalSolution2 from '../../Components/MedicalSolutionSection/MedicalSolution2';
import ProcessSection1 from '../../Components/ProcessSection/ProcessSection1';
import ProjectsSection2 from '../../Components/ProjectSection/ProjectsSection2';
import Section from '../../Components/Section';
import ServiceSection3 from '../../Components/Service/ServiceSection3';
import TimelineSection from '../../Components/TimelineSection';
import { useLanguage } from '../../utils/LanguageContext';

const HomeV3 = () => {
  const { t } = useLanguage();

  // Translated Hero Data
  const heroData = {
    slides: [
      {
        backgroundImage: '/assets/img/hero_slider_5.jpg',
        title: t('doctors_need_help_patient_service'),
        highlight: t('service'),
        subtitle: t('medical_description'),
        features: [
          t('this_man_for_it_medical_doctor'),
          t('we_provide_a_revolutionary'),
        ],
        btnText: t('contact_now'),
        btnLink: '/contact',
        btnText2: t('discover_more'),
        btnLink2: '/about',
        shapeImage: 'assets/img/icons/hero_shape_2.png',
      },
      {
        backgroundImage: '/assets/img/hero_slider_6.jpg',
        title: t('doctors_need_help_patient_service'),
        highlight: t('service'),
        subtitle: t('medical_description'),
        features: [
          t('this_man_for_it_medical_doctor'),
          t('we_provide_a_revolutionary'),
        ],
        btnText: t('contact_now'),
        btnLink: '/contact',
        btnText2: t('discover_more'),
        btnLink2: '/about',
        shapeImage: '/assets/img/icons/hero_shape_2.png',
      },
      {
        backgroundImage: '/assets/img/hero_slider_7.jpg',
        title: t('doctors_need_help_patient_service'),
        highlight: t('service'),
        subtitle: t('medical_description'),
        features: [
          t('this_man_for_it_medical_doctor'),
          t('we_provide_a_revolutionary'),
        ],
        btnText: t('contact_now'),
        btnLink: '/contact',
        btnText2: t('discover_more'),
        btnLink2: '/about',
        shapeImage: '/assets/img/icons/hero_shape_2.png',
      },
    ],
    emergency: {
      icon: '/assets/img/icons/call_icon_1.png',
      title: t('emergency_call'),
      phone1: '+8965 55000 222',
      phone2: '+5699 5333 322',
    },
  };

  // Translated CTA Data
  const ctaData = {
    imageUrl: '/assets/img/cta_img_2.png',
    imageAlt: t('team_support'),
    title: t('meet_the_team_support_medical_service'),
    subtitle: t('for_us_there_are_no_minor_aspects'),
    buttonText: t('booking_now'),
    buttonLink: '/appointments',
  };

  // Translated About Data
  const aboutData = {
    aboutImage: '/assets/img/about_img_6.png',
    subtitle: t('our_about_us'),
    title: t('more_than_years'),
    description: t('about_text'),
    experienceBg: '/assets/img/experience_bg.jpg',
    experienceNumber: '26+',
    experienceTitle: t('experience'),
    iconBoxes: [
      {
        iconSrc: '/assets/img/icons/about_icon_1.png',
        iconAlt: t('client_support'),
        title: t('client_support'),
      },
      {
        iconSrc: '/assets/img/icons/about_icon_2.png',
        iconAlt: t('doctor_support'),
        title: t('doctor_support'),
      },
    ],
    progressLabel: t('dental_service_medical'),
    progressValue: '40',
    videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoText: t('how_we_work'),
    signImage: 'assets/img/sign.png',
    sectionImage: 'assets/img/about_section_img_3.png',
  };

  // Translated Service Section Data
  const serviceSectionData = {
    sectionTitle: t('high_quality_services'),
    sectionSubtitle: t('our_best_service'),
    description: t('services_description'),
    slides: [
      {
        imageUrl: '/assets/img/service_2.jpg',
        icon: '/assets/img/icons/service_icon_20.png',
        title: t('dental_of_service'),
        subtitle: t('medical_standard_chunk'),
        detailsLink: '/service/service-details',
        detailsText: t('read_more'),
        bgImagUrl: '/assets/img/service_bg_4.jpg',
      },
      {
        imageUrl: '/assets/img/service_3.jpg',
        icon: '/assets/img/icons/service_icon_1.png',
        title: t('individual_approach'),
        subtitle: t('medical_standard_chunk'),
        detailsLink: '/service/service-details',
        detailsText: t('read_more'),
        bgImagUrl: '/assets/img/service_bg_4.jpg',
      },
      {
        imageUrl: '/assets/img/service_4.jpg',
        icon: '/assets/img/icons/service_icon_21.png',
        title: t('check_treatment'),
        subtitle: t('medical_standard_chunk'),
        detailsLink: '/service/service-details',
        detailsText: t('read_more'),
        bgImagUrl: '/assets/img/service_bg_4.jpg',
      },
    ],
  };

  // Translated Medical Solution Data
  const medicalSolutionData = {
    subtitle: t('our_solution_dental'),
    title: t('your_dental_solution'),
    description: t('about_text'),
    links: [
      {
        href: '/service/service-details',
        iconSrc: '/assets/img/icons/tab_link_icon_5.png',
        iconAlt: t('teblet_medical_dental_care'),
        text: t('teblet_medical_dental_care'),
      },
      {
        href: '/service/service-details',
        iconSrc: '/assets/img/icons/service_icon_1.png',
        iconAlt: t('expert_medical_dental_care'),
        text: t('expert_medical_dental_care'),
      },
      {
        href: '/service/service-details',
        iconSrc: '/assets/img/icons/service_icon_4.png',
        iconAlt: t('infection_prevention_medical_dental'),
        text: t('infection_prevention_medical_dental'),
      },
      {
        href: '/service/service-details',
        iconSrc: '/assets/img/icons/service_icon_6.png',
        iconAlt: t('preventive_care_medical_dental'),
        text: t('preventive_care_medical_dental'),
      },
    ],
    thumbnailSrc: '/assets/img/medical_solution_4.png',
  };

  // Translated Dental Solution Data
  const dentalSolutionData = {
    backgroundClass: 'cs_blue_bg',
    wrapperClass: 'cs_blue_bg',
    subtitle: t('our_solution_dental'),
    title: t('your_dental_solution'),
    slides: [
      {
        heading: t('reviews'),
        subtitle: t('testimonial_subtitle'),
        avatarImage: '/assets/img/avatar_1.png',
        avatarAlt: 'Avatar',
        avatarName: 'Dr. Mehara Bara',
        avatarTitle: t('dental_manager'),
        rating: 4,
      },
      {
        heading: t('reviews'),
        subtitle: t('testimonial_subtitle'),
        avatarImage: '/assets/img/avatar_1.png',
        avatarAlt: 'Avatar',
        avatarName: 'Dr. Mehara Bara',
        avatarTitle: t('dental_manager'),
        rating: 2,
      },
      {
        heading: t('reviews'),
        subtitle: t('testimonial_subtitle'),
        avatarImage: '/assets/img/avatar_1.png',
        avatarAlt: 'Avatar',
        avatarName: 'Dr. Mehara Bara',
        avatarTitle: t('dental_manager'),
        rating: 3,
      },
    ],
    shapeImage: '/assets/img/msg_quote_1.png',
  };

  // Translated TimeLine Data
  const timeLineData = {
    subtitle: t('our_timetable'),
    title: t('events_calendar_specialist'),
    scheduleData: {
      days: [
        t('saturday'),
        t('sunday'),
        t('monday'),
        t('tuesday'),
        t('wednesday'),
        t('thursday'),
        t('friday'),
      ],
      times: [
        {
          time: '10.00',
          schedules: [
            {
              title: t('pulmonary'),
              timeRange: '10.00-11.00',
              doctor: t('laparoscopy'),
            },
            null,
            {
              title: t('cardiology'),
              timeRange: '10.00-11.00',
              doctor: t('laparoscopy'),
            },
            null,
            { title: t('pulmonary'), timeRange: '10.00-11.00', doctor: t('routine') },
            null,
            { title: t('cardiology'), timeRange: '10.00-11.00', doctor: t('runada') },
          ],
        },
        {
          time: '11.00',
          schedules: [
            { title: t('dental'), timeRange: '11.00-12.00', doctor: t('dr_porta') },
            {
              title: t('cardiology'),
              timeRange: '11.00-12.00',
              doctor: t('randy_nelson'),
            },
            null,
            {
              title: t('pulmonary'),
              timeRange: '11.00-12.00',
              doctor: t('randy_nelson'),
            },
            null,
            {
              title: t('cardiology'),
              timeRange: '11.00-12.00',
              doctor: t('randy_nelson'),
            },
            {
              title: t('cardiology'),
              timeRange: '11.00-12.00',
              doctor: t('randy_nelson'),
            },
          ],
        },
        {
          time: '11.00',
          schedules: [
            { title: t('dental'), timeRange: '11.00-12.00', doctor: t('dr_porta') },
            null,
            {
              title: t('cardiology'),
              timeRange: '11.00-12.00',
              doctor: t('randy_nelson'),
            },
            {
              title: t('pulmonary'),
              timeRange: '11.00-12.00',
              doctor: t('randy_nelson'),
            },
            null,
            {
              title: t('cardiology'),
              timeRange: '11.00-12.00',
              doctor: t('randy_nelson'),
            },
            null,
          ],
        },
      ],
    },
  };

  // Translated Project Section Data
  const projectSectionData = {
    heading: {
      subtitle: t('our_portfolio'),
      title: t('great_work'),
      description: t('portfolio_description'),
      variant: 'cs_type_1',
    },
    projects: [
      {
        index: '01',
        title: t('preventive_care'),
        subtitle: t('service_subtitle'),
        overlayImage: 'assets/img/project_10.jpg',
        thumbnailImage: 'assets/img/project_11.png',
        thumbnailShape: null,
        link: '/',
      },
      {
        index: '02',
        title: t('heart_surgery'),
        subtitle: t('service_subtitle'),
        overlayImage: '/assets/img/project_10.jpg',
        thumbnailImage: '/assets/img/project_12.png',
        thumbnailShape: null,
        link: '/',
      },
      {
        index: '03',
        title: t('cardio_oncology'),
        subtitle: t('service_subtitle'),
        overlayImage: '/assets/img/project_10.jpg',
        thumbnailImage: '/assets/img/project_13.png',
        thumbnailShape: null,
        link: '/',
      },
      {
        index: '04',
        title: t('service_check'),
        subtitle: t('service_subtitle'),
        overlayImage: 'assets/img/project_10.jpg',
        thumbnailImage: '/assets/img/project_11.png',
        thumbnailShape: '/assets/img/project_thumb_shape.png',
        link: '/',
      },
      {
        index: '05',
        title: t('therapeutic_check'),
        subtitle: t('service_subtitle'),
        overlayImage: '/assets/img/project_10.jpg',
        thumbnailImage: '/assets/img/project_14.png',
        thumbnailShape: '/assets/img/project_thumb_shape.png',
        link: '/',
      },
    ],
  };

  // Translated Brand Data
  const brandData = [
    { image: '/assets/img/envato-logo.png', altText: t('brand_1') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_2') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_3') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_4') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_5') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_6') },
  ];

  // Translated Section Data
  const sectionData = {
    heading: {
      subtitle: t('our_working_process'),
      title: t('meet_our_specialist'),
      variant: 'text-center',
    },
    processes: [
      {
        index: '01',
        title: t('service_check'),
        subtitle: t('service_subtitle'),
        icon: 'assets/img/icons/process_icon_1.png',
        shape: 'assets/img/iconbox_shape.png',
        shapePosition: 'cs_right',
        active: false,
      },
      {
        index: '02',
        title: t('infection_prevention'),
        subtitle: t('service_subtitle'),
        icon: 'assets/img/icons/process_icon_2.png',
        shape: null,
        shapePosition: '',
        active: true,
      },
      {
        index: '03',
        title: t('complete_check'),
        subtitle: t('service_subtitle'),
        icon: 'assets/img/icons/process_icon_3.png',
        shape: 'assets/img/iconbox_shape.png',
        shapePosition: 'cs_left',
        active: false,
      },
    ],
    button: {
      variant: 'cs_btn cs_style_1 cs_color_1',
      text: t('view_all_work'),
      url: '/',
    },
    backgroundImage: 'assets/img/process_bg_1.jpg',
  };

  // Translated Contact Data
  const contactData = {
    sectionSubtitle: t('contact'),
    SectionTitle: t('meet_our_specialist'),
    teethShapeImg: 'assets/img/icons/hero_shape_3.png',
    contactImg: 'assets/img/contact.png',
    iconBox: {
      style: 'cs_style_4',
      icon: 'assets/img/icons/call_icon_1.png',
      title: t('emergency_call'),
      subtitle: t('support_and_easy'),
    },
  };

  // Map Data
  const mapData = {
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.5851960224!2d-0.2664050245106056!3d51.52852620113951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z4Kay4Kao4KeN4Kah4KaoLCDgpq_gp4HgppXgp43gpqTgprDgpr7gppzgp43gpq8!5e0!3m2!1sbn!2sbd!4v1723284219451!5m2!1sbn!2sbd',
  };

  // Translated Blogs Data
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
      <HeroSection2 data={heroData} />
      {/* End Hero Section */}

      {/* Start CTA Section */}

      <Section className="cs_cta cs_style_1 cs_type_1 position-relative overflow-hidden">
        <CtaSection3 data={ctaData} />
      </Section>

      {/* End CTA Section */}
      {/* Start About Section */}

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 cs_type_2 position-relative"
      >
        <AboutSection2 data={aboutData} />
      </Section>

      {/* End About Section */}
      {/* Start Service Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg"
      >
        <ServiceSection3 data={serviceSectionData} />
      </Section>

      {/* End Service Section */}
      {/* Start Medical Solution Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <MedicalSolution2 data={medicalSolutionData} />
      </Section>

      {/* End Medical Solution Section */}
      {/* Start Dental Solution Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="76"
        bottomSpaceLg="70"
        bottomSpaceMd="76"
        className={'cs_bg_filed'}
        backgroundImage="/assets/img/medical_solution_bg_2.jpg"
      >
        <DentalSolution data={dentalSolutionData} />
      </Section>

      {/* End Dental Solution Section */}
      {/* Start Timeline Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <TimelineSection data={timeLineData} />
      </Section>

      {/* End Timeline Section */}
      {/* Start Projects Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_gray_bg'}
      >
        <ProjectsSection2 data={projectSectionData} />
      </Section>

      {/* End Projects Section */}
      {/* Start Brand Section */}
      <Section topSpaceLg="70" topSpaceMd="110" className={'cs_blue_bg'}>
        <BrandsSlider hr bgColor={'cs_blue_bg'} data={brandData} />
      </Section>

      {/* End Brand Section */}
      {/* Start Process Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="110"
        className={'cs_process cs_style_1 position-relative'}
      >
        <ProcessSection1 data={sectionData} />
      </Section>

      {/* End Process Section */}
      {/* Start Contact Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_contact'}
      >
        <ContactSection data={contactData} />
      </Section>

      {/* End Contact Section */}
      {/* Start Location Map */}

      <LocationMap mapSrc={mapData.mapSrc} />

      {/* End Location Map */}
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

export default HomeV3;