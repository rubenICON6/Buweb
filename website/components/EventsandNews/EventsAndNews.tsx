import React, { useEffect, useState } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Event, News } from '@/types/types';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle'
const EventsAndNews: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [news, setNews] = useState<News[]>([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch('https://buweb.onrender.com/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const fetchNews = async () => {
    try {
      const response = await fetch('https://buweb.onrender.com/news');
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchNews();
  }, []);

  const slideStyle = " flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row";
  const imgStyle = "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg";
  const contentStyle = "flex flex-col justify-center p-6";
  const titleStyle = "mb-2 text-xl font-medium";
  const textStyle = "mb-4 text-base";
  const dateStyle = "text-xs text-surface/75 dark:text-neutral-300";

  return (
    <section id='eventsnadnews'>
        <SectionTitle
          title="Our Latest Events And News"
          paragraph="You'll find a wealth of 
        knowledge and insights on various topics related to academia, student life, research, and more."
          center
        />
        <div className="flex flex-col md:flex-row gap-4 container">

            {/* Events Column */}
            <div className="w-full h-[300px] md:w-1/2 relative">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Events</h2>
            <SwiperComponent
                spaceBetween={30}
                centeredSlides
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                renderBullet: (index, className) => `<span class="${className} bg-gray-300 w-4 h-[280] rounded-full inline-block mx-1"></span>`,
                }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {events.map((event) => (
                <SwiperSlide key={event._id}>
                    <div className={slideStyle}>
                    <Image
                        className={imgStyle}
                        src={event.coverPhotoUrl}
                        alt={event.title}
                        width={192}
                        height={192}
                    />
                    <div className={contentStyle}>
                        <h3 className={titleStyle}>{event.title}</h3>
                        <p className={textStyle}>{event.description}</p>
                        <p className={dateStyle}>{new Date(event.date).toLocaleDateString()}</p>
                        <p className={dateStyle}>{event.location}</p>
                    </div>
                    </div>
                </SwiperSlide>
                ))}
            </SwiperComponent>
            </div>

            {/* News Column */}
            <div className="w-full md:w-1/2 relative">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">News</h2>
            <SwiperComponent
                spaceBetween={30}
                centeredSlides
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                renderBullet: (index, className) => `<span class="${className} bg-gray-300 w-4 h-4 rounded-full inline-block mx-1"></span>`,
                }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {news.map((item) => (
                <SwiperSlide key={item._id}>
                    <div className={slideStyle}>
                    <Image
                        className={imgStyle}
                        src={item.photo}
                        alt={item.title}
                        width={192}
                        height={192}
                    />
                    <div className={contentStyle}>
                        <h3 className={titleStyle}>{item.title}</h3>
                        <p className={textStyle}>{item.content}</p>
                        <p className={dateStyle}>{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                    </div>
                </SwiperSlide>
                ))}
            </SwiperComponent>
            </div>
            </div>
    </section>
  );
};

export default EventsAndNews;
