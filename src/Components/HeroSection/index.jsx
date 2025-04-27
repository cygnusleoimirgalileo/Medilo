import { useEffect, useRef, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import Slider from "react-slick";
import Button from "../Buttons";
import { useLanguage } from "../../utils/LanguageContext";

const HeroSection = ({ data }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    fade: false,
    swipeToSlide: true,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    fade: false,
    swipeToSlide: true,
    vertical: true,
    arrows: false,
  };

  return (
    <>
      <section className="position-relative">
        <div className="cs_hero_slider_thumb slick-slider">
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
          >
            {data?.primarySlider.map((items, index) => {
              // Choose the right title based on index
              const titleKey = index === 1 ? 'hero_title_2' : 'hero_title_1';
              
              return (
                <div className="cs_hero_slider_thumb_item" key={index}>
                  <div
                    className="cs_hero cs_style_1 cs_center cs_bg_filed"
                    style={{
                      backgroundImage: `url(${items.bgImageUrl})`,
                    }}
                  >
                    <div className="container">
                      <div className="cs_hero_text">
                        <div className="cs_hero_text_in">
                          <h1
                            className="cs_hero_title"
                            dangerouslySetInnerHTML={{ __html: t(titleKey) }}
                          />
                          <p
                            className="cs_hero_subtitle"
                            dangerouslySetInnerHTML={{
                              __html: t('hero_subtitle'),
                            }}
                          />
                          <div className="cs_hero_info">
                            <h3
                              dangerouslySetInnerHTML={{
                                __html: t('receive_medical_service'),
                              }}
                            />
                            <p
                              dangerouslySetInnerHTML={{ __html: t('call_us') }}
                            />
                          </div>
                          <div className="cs_hero_btns">
                            <Button
                              btnText={t('contact_now')}
                              variant={"cs_btn cs_style_1 cs_color_1"}
                              btnIcons={<FaAnglesRight />}
                              btnUrl={items.link}
                            />
                            <Button
                              btnText={t('discover_more')}
                              variant={"cs_btn cs_style_1 cs_color_2"}
                              btnIcons={<FaAnglesRight />}
                              btnUrl={items.link2}
                            />
                          </div>
                        </div>
                        <div className="cs_hero_shape">
                          <img
                            src={items.iconImgUrl}
                            alt="Icon"
                            className="cs_spinner_img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="cs_hero_slider_nav slick-slider">
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            {...settings2}
          >
            {data?.secondarySlider?.map((items, index) => (
              <div className="cs_hero_slider_thumb_mini" key={index}>
                <img src={items} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
