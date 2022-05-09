import React from 'react'

export default function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="heading">
          <h1>CUSTOMER TESTIMONIALS</h1>
        </div>
        <div className="text">
          <p>These quotes represent a few of the many positive reviews that we have received for therapists who work with us. We don’t pay anyone to provide their review and they are all made voluntarily. </p>
        </div>
        <div className="testimonial-box-container">
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src="/images/customer1.jpeg" alt="" />
                </div>
                <div className="name-user">
                  <strong>John Kibue</strong>
                  <span>@johnkibue93</span>
                </div>
              </div>
              <div className="reviews">
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='far fa-star'></i>
              </div>
            </div>
            <div className="client-comment">
              <p>I’ve already recommended their website to 3 more friends and I’m honestly going to tell as many people as possible about it I’m so grateful for this service. I love my therapist!</p>
            </div>
           </div> 
        </div>
        <div className="testimonial-box-container">
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src="/images/customer2.jpeg" alt="" />
                </div>
                <div className="name-user">
                  <strong>Eva Mutesia</strong>
                  <span>@evaMutesia1</span>
                </div>
              </div>
              <div className="reviews">
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
            </div>
            <div className="client-comment">
              <p>I’ve seen so many therapists in the past, but none have ever had such an immediate grasp at my past traumas and current struggles from that. After having just a few sessions, I’m already so encouraged by my growth and comforted by her understanding and directions. I can’t recommend her enough, I’m just so thankful I finally found someone who can work with me through the deeper things that affect my every day mental health.</p>
            </div>
           </div> 
        </div>
        <div className="testimonial-box-container">
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src="/images/customer3.jpeg" alt="" />
                </div>
                <div className="name-user">
                  <strong>Dennis Lagat</strong>
                  <span>@Dennislagat</span>
                </div>
              </div>
              <div className="reviews">
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='far fa-star'></i>
              </div>
            </div>
            <div className="client-comment">
              <p>Would highly recommend, very knowledgeable and has a great balance of listening and offering advice</p>
            </div>
           </div> 
        </div>
        <div className="testimonial-box-container">
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src="/images/customer4.jpg" alt="" />
                </div>
                <div className="name-user">
                  <strong>Susan Thairu</strong>
                  <span>@susanThairu</span>
                </div>
              </div>
              <div className="reviews">
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='far fa-star'></i>
              </div>
            </div>
            <div className="client-comment">
              <p>Wonderful. Such a big help to my mental health.</p>
            </div>
           </div> 
        </div>
      </div>
    </>
    
  )
}


