import HeroSection from '../../Components/HeroSection';
import CtaSection from '../../Components/CtaSection.jsx';
import About from '../../Components/About/index.jsx';
import CounterSection from '../../Components/FunSection/CounterSection.jsx';
import Service from '../../Components/Service/index.jsx';
import TeamSection from '../../Components/TeamSection/index.jsx';
import BrandsSlider from '../../Components/BrandsSection/index.jsx';
import ChooseUs from '../../Components/ChooseUs/index.jsx';
import ProjectSection from '../../Components/ProjectSection/index.jsx';
import CtaSection1 from '../../Components/CtaSection.jsx/CtaSection1.jsx';
import MedicalTabSection from '../../Components/MedicalTabSection/index.jsx';
import BlogSection from '../../Components/BlogsSection/index.jsx';
import Section from '../../Components/Section/index.jsx';
import ContactSection2 from '../../Components/ContactSection/ContactSection2.jsx';
import { useLanguage } from '../../utils/LanguageContext';

const MainHome = () => {
  const { t } = useLanguage();

  const heroData = {
    primarySlider: [
      {
        bgImageUrl: 'assets/img/hero_slider_3.jpg',
        title: t('hero_title_1'),
        contactSubtitle: t('hero_subtitle'),
        contactTitle: t('receive_medical_service'),
        contact: t('call_us'),
        btnText1: t('contact_now'),
        link: '/contact',
        btnText2: t('discover_more'),
        link2: '/about',
        iconImgUrl: 'assets/img/icons/hero_icon.png',
      },
      {
        bgImageUrl: 'assets/img/hero_slider_2.jpg',
        title: t('hero_title_2'),
        contactSubtitle: t('hero_subtitle'),
        contactTitle: t('receive_medical_service'),
        contact: t('call_us'),
        btnText1: t('contact_now'),
        link: '/contact',
        btnText2: t('discover_more'),
        link2: '/about',
        iconImgUrl: 'assets/img/icons/hero_icon.png',
      },
      {
        bgImageUrl: 'assets/img/hero_slider_1.jpg',
        title: t('hero_title_1'),
        contactSubtitle: t('hero_subtitle'),
        contactTitle: t('receive_medical_service'),
        contact: t('call_us'),
        btnText1: t('contact_now'),
        link: '/contact',
        btnText2: t('discover_more'),
        link2: '/about',
        iconImgUrl: 'assets/img/icons/hero_icon.png',
      },
    ],
    secondarySlider: [
      'assets/img/hero_slider_sm_1.png',
      'assets/img/hero_slider_sm_2.png',
      'assets/img/hero_slider_sm_3.png',
    ],
  };

  const ctaData = {
    imageUrl: '/assets/img/cta_img_1.jpg',
    title: t('meet_the_team_support_medical_service'),
    subtitle: t('for_us_there_are_no_minor_aspects'),
    buttonUrl: '/appointments',
    buttonText: t('booking_now'),
  };

  const aboutData = {
    sectionSubtitle: t('our_about_us'),
    sectionTitle: t('more_than_years'),
    aboutText: t('about_text'),
    service: t('service_text'),
    experienceYears: '26+',
    experienceTitle: t('experience'),
    videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoText: t('how_we_work'),
    iconboxes: [
      {
        imgUrl: '/assets/img/icons/about_icon_1.png',
        title: t('client_support'),
        subtitle: t('client_support_text'),
      },
      {
        imgUrl: '/assets/img/icons/about_icon_2.png',
        title: t('doctor_support'),
        subtitle: t('doctor_support_text'),
      },
    ],

    btnUrl: '/about',
    btnText: t('about_more'),
    sectionImgUrl: 'assets/img/about_section_img_1.png',
    headImgUrl: 'assets/img/about_img_1.jpg',
  };

  const countersData = [
    {
      iconUrl: '/assets/img/icons/counter_icon_1.png',
      number: '567+',
      title: t('active_clients'),
    },
    {
      iconUrl: '/assets/img/icons/counter_icon_2.png',
      number: '23K+',
      title: t('team_support'),
    },
    {
      iconUrl: '/assets/img/icons/counter_icon_3.png',
      number: '241+',
      title: t('projects_complete'),
    },
    {
      iconUrl: '/assets/img/icons/counter_icon_4.png',
      number: '16K+',
      title: t('award_winner'),
    },
  ];

  const serviceData = {
    subtitle: t('our_best_service'),
    title: t('high_quality_services'),
    description: t('services_description'),
    services: [
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_1.png',
        index: '01',
        title: t('pharmacology'),
        subtitle: t('service_subtitle'),
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_2.png',
        index: '02',
        title: t('orthopedic'),
        subtitle: t('service_subtitle'),
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_3.png',
        index: '03',
        title: t('hematology'),
        subtitle: t('service_subtitle'),
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_4.png',
        index: '04',
        title: t('plastic_surgery'),
        subtitle: t('service_subtitle'),
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_5.png',
        index: '05',
        title: t('neurology'),
        subtitle: t('service_subtitle'),
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_6.png',
        index: '06',
        title: t('ophthalmology'),
        subtitle: t('service_subtitle'),
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_7.png',
        index: '07',
        title: t('dental_care'),
        subtitle: t('service_subtitle'),
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_8.png',
        index: '08',
        title: t('cardiology'),
        subtitle: t('service_subtitle'),
        link: '/service/service-details',
      },
    ],
    footerIcon: '/assets/img/icons/service_footer_icon_1.png',
    footerText: t('delivering_tomorrow_health_care'),
    footerLink: '/',
    footerLinkText: t('see_more'),
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

  const brandData = [
    { image: '/assets/img/envato-logo.png', altText: t('brand_1') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_2') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_3') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_4') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_5') },
    { image: '/assets/img/envato-logo.png', altText: t('brand_6') },
  ];

  const sectionData = {
    subtitle: t('why_choose_us'),
    title: t('medical_ready'),
    services: [
      {
        iconUrl: '/assets/img/icons/service_icon_9.png',
        title: t('expert_care'),
        subtitle: t('service_subtitle'),
      },
      {
        iconUrl: '/assets/img/icons/service_icon_10.png',
        title: t('emergency_help'),
        subtitle: t('service_subtitle'),
      },
      {
        iconUrl: '/assets/img/icons/service_icon_11.png',
        title: t('qualified_doctors'),
        subtitle: t('service_subtitle'),
      },
      {
        iconUrl: '/assets/img/icons/service_icon_12.png',
        title: t('medical_advices'),
        subtitle: t('service_subtitle'),
      },
      {
        iconUrl: '/assets/img/icons/service_icon_13.png',
        title: t('medical_research'),
        subtitle: t('service_subtitle'),
      },
      {
        iconUrl: '/assets/img/icons/service_icon_14.png',
        title: t('affordable_prices'),
        subtitle: t('service_subtitle'),
      },
    ],
  };

  const projectData = {
    title: t('great_work'),
    subtitle: t('our_portfolio'),
    description: t('portfolio_description'),
    tabs: [
      { id: 'dental', label: t('dental') },
      { id: 'cardiology', label: t('cardiology') },
      { id: 'neurology', label: t('neurology') },
      { id: 'medical', label: t('medical') },
    ],
    tabData: [
      {
        id: 'dental',
        items: [
          {
            imgUrl: '/assets/img/project_1.jpg',
            title: t('medical_of_working'),
            subtitle: t('project_subtitle'),
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_2.jpg',
            title: t('medical_of_dental'),
            subtitle: t('project_subtitle'),
            index: 2,
          },
          {
            imgUrl: '/assets/img/project_3.jpg',
            title: t('laboratory_technologist'),
            subtitle: t('project_subtitle'),
            index: 3,
          },
        ],
      },
      {
        id: 'cardiology',
        items: [
          {
            imgUrl: '/assets/img/project_1.jpg',
            title: t('medical_of_working'),
            subtitle: t('project_subtitle'),
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_3.jpg',
            title: t('laboratory_technologist'),
            subtitle: t('project_subtitle'),
            index: 3,
          },
          {
            imgUrl: '/assets/img/project_2.jpg',
            title: t('medical_of_dental'),
            subtitle: t('project_subtitle'),
            index: 2,
          },
        ],
      },
      {
        id: 'neurology',
        items: [
          {
            imgUrl: '/assets/img/project_1.jpg',
            title: t('medical_of_working'),
            subtitle: t('project_subtitle'),
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_3.jpg',
            title: t('medical_of_working'),
            subtitle: t('project_subtitle'),
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_2.jpg',
            title: t('medical_of_working'),
            subtitle: t('project_subtitle'),
            index: 1,
          },
        ],
      },
      {
        id: 'medical',
        items: [
          {
            imgUrl: '/assets/img/project_3.jpg',
            title: t('medical_of_working'),
            subtitle: t('project_subtitle'),
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_2.jpg',
            title: t('medical_of_working'),
            subtitle: t('project_subtitle'),
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_1.jpg',
            title: t('medical_of_working'),
            subtitle: t('project_subtitle'),
            index: 1,
          },
        ],
      },
    ],
  };

  const ctaData1 = {
    videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoButtonText: t('watch_video'),
    subtitle: t('our_watch_video'),
    title: t('professional_medical_care'),
    description: t('portfolio_description'),
    buttonLink: '/contact',
    buttonText: t('video_more'),
    brandImage: 'assets/img/medical_brand.png',
  };

  const medicalTabsData = {
    subtitle: t('service_offerings'),
    title: t('explore_our_service'),
    tabsTitle: [
      {
        href: 'brain_althim',
        iconUrl: 'assets/img/icons/tab_link_icon_1.png',
        label: t('modern_technology'),
      },
      {
        href: 'emergency',
        iconUrl: 'assets/img/icons/tab_link_icon_2.png',
        label: t('success_of_treatment'),
      },
      {
        href: 'heart_beat',
        iconUrl: 'assets/img/icons/tab_link_icon_3.png',
        label: t('certified_doctors'),
      },
      {
        href: 'blood_test',
        iconUrl: 'assets/img/icons/tab_link_icon_4.png',
        label: t('medical_advice'),
      },
    ],
    tabsData: [
      {
        id: 'brain_althim',
        imageSrc: 'assets/img/post_6.jpeg',
        title: t('we_are_here_to_hear_and_heal'),
        subtitle: t('we_are_privileged_to_work_with_hundreds'),
        points: [
          {
            icon: 'assets/img/icons/check_icon_1.png',
            text: t('medical_sint_occaecat_cupidatat'),
          },
          {
            icon: 'assets/img/icons/check_icon_1.png',
            text: t('we_are_occaecat_cupidatat'),
          },
        ],
        linkHref: '/contact',
        buttonText: t('read_more'),
      },
      {
        id: 'emergency',
        imageSrc: 'assets/img/post_5.jpeg',
        title: t('treatment_patients_in_primary_care'),
        subtitle: t('we_are_privileged_to_work_with_hundreds'),
        points: [
          {
            icon: 'assets/img/icons/check_icon_1.png',
            text: t('medical_sint_occaecat_cupidatat'),
          },
          {
            icon: 'assets/img/icons/check_icon_1.png',
            text: t('we_are_occaecat_cupidatat'),
          },
        ],
        linkHref: '/contact',
        buttonText: t('read_more'),
      },
      {
        id: 'heart_beat',
        imageSrc: 'assets/img/post_1.jpeg',
        title: t('accreditation_within_a_given_specialty'),
        subtitle: t('we_are_privileged_to_work_with_hundreds'),
        points: [
          {
            icon: 'assets/img/icons/check_icon_1.png',
            text: t('medical_sint_occaecat_cupidatat'),
          },
          {
            icon: 'assets/img/icons/check_icon_1.png',
            text: t('we_are_occaecat_cupidatat'),
          },
        ],
        linkHref: '/contact',
        buttonText: t('read_more'),
      },
      {
        id: 'blood_test',
        imageSrc: 'assets/img/post_3.jpeg',
        title: t('better_health_while_aging'),
        subtitle: t('we_are_privileged_to_work_with_hundreds'),
        points: [
          {
            icon: 'assets/img/icons/check_icon_1.png',
            text: t('medical_sint_occaecat_cupidatat'),
          },
          {
            icon: 'assets/img/icons/check_icon_1.png',
            text: t('we_are_occaecat_cupidatat'),
          },
        ],
        linkHref: '/contact',
        buttonText: t('read_more'),
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
        date: 'May 02',
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
        date: 'May 02',
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
        date: 'May 02',
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
        date: 'May 02',
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
      <HeroSection data={heroData} />
      <Section
        className={
          'cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden'
        }
      >
        <CtaSection data={ctaData} />
      </Section>

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 position-relative"
      >
        <About data={aboutData} />
      </Section>

      <Section className="cs_counter_area cs_gray_bg">
        <CounterSection data={countersData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_gray_bg'}
      >
        <Service cardBg={'cs_gray_bg'} data={serviceData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        className={'cs_team_section position-relative'}
      >
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section>
      <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
        <BrandsSlider data={brandData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed"
        backgroundImage="/assets/img/service_bg_2.jpg"
      >
        <ChooseUs data={sectionData} />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="110" className="cs_tabs">
        <ProjectSection data={projectData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData1} />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="110">
        <MedicalTabSection data={medicalTabsData} />
      </Section>

      <ContactSection2></ContactSection2>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogsData} />
      </Section>
    </>
  );
};

export default MainHome;