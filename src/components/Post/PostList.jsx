import React from 'react';

export default function PostList() {
  const postData = [
    {
      title: 'A case for Data engineers in web 3 businesses',
      postHref: '/blog/blog-details', 
      subtitle:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae...',
      authorName: 'Arino Admin',
      authorImg: '/images/avatar_2.jpeg',
      authorDesignation: 'London, United Kindom',
      date: '07',
      month: 'Mar',
      year: '2022',
    },
    {
      title: 'A case for NFTs to return to the Super Bowl following Usher',
      postHref: '/blog/a-case-for-nfts',
      subtitle:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae...',
      authorName: 'David Milar',
      authorImg: '/images/avatar_3.jpeg',
      authorDesignation: 'London, United Kindom',
      date: '15',
      month: 'Mar',
      year: '2022',
    },
    {
      title: 'How NOT to start a web 3 business',
      postHref: '/blog/blog-details',
      subtitle:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae...',
      authorName: 'Jhone Doe',
      authorImg: '/images/avatar_4.jpeg',
      authorDesignation: 'London, United Kindom',
      date: '20',
      month: 'Mar',
      year: '2022',
    },
  ];
  return (
    <ul className="cs-post_3_list cs-mp0">
      {postData.map((item, index) => (
        <li key={index}>
          <div className="cs-post cs-style3">
            <div className="cs-post_left">
              <div className="cs-posted_by">
                <span className="cs-primary_font">{item.date}</span>
                <span>
                  {item.month} <br />
                  {item.year}
                </span>
              </div>
            </div>
            <div className="cs-post_right">
              <h2 className="cs-post_title">
                <a href={item.postHref}>{item.title}</a>
              </h2>
              <div className="cs-post_subtitle">{item.subtitle}</div>
              <div className="cs-post_meta">
                <div className="cs-post_avatar">
                  <div className="cs-post_avatar_img">
                    <img src={item.authorImg} alt="Avatar" />
                  </div>
                  <div className="cs-post_avatar_info">
                    <h4>{item.authorName}</h4>
                    <p>{item.authorDesignation}</p>
                  </div>
                </div>
                <a href={item.postHref} className="cs-text_btn">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
