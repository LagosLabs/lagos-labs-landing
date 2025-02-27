//import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
//import axios from 'axios';

export default function ContactPage() {
  pageTitle('Contact Us');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   projectType: "",
  //   mobile: "",
  //   description: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('/contact', formData);
  //     console.log('form submitted:', response.data);
  //     //Handle successful submission response

  //     //Reset form fields to empty states
  //     setFormData({
  //       fullName: "",
  //       email: "",
  //       projectType: "",
  //       mobile: "",
  //       description: "",
  //     });
  //   } catch (error) {
  //     console.error('Error submitting form:', error)
  //     //error handling
  //   }

  // };

  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Learn about our<br /><i>exciting</i> projects"
              subtitle='Contact Us Today' 
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            {/* <form className="row" onSubmit={handleSubmit}>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input type="text" className="cs-form_field" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color" placeholder="example@gmail.com">Email*</label>
                <input type="text" className="cs-form_field" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Project Type*</label>
                <input type="text" className="cs-form_field" name="projectType" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input type="text" className="cs-form_field" name="mobile" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Brief Description*</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  name="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form> */}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          //src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d743.1484868544295!2d-87.62092600000001!3d41.837041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d8319c03875%3A0x44540a307b689a9c!2sLagos%20Labs!5e0!3m2!1sen!2sus!4v1707870322422!5m2!1sen!2sus" //Lagos Labs address
          //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.7473329923705!2d-87.62688112354179!3d41.85526496684292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c7df72046eb%3A0xd600db5e42d8b5b8!2s2000%20S%20Michigan%20Ave%2C%20Chicago%2C%20IL%2060616!5e0!3m2!1sen!2sus!4v1708717740897!5m2!1sen!2sus" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.747332992373!2d-87.62688112343935!3d41.85526496684287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d8319c03875%3A0x44540a307b689a9c!2sLagos%20Labs!5e0!3m2!1sen!2sus!4v1731693738447!5m2!1sen!2sus"
          allowFullScreen
          title="Google Map"
        />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
