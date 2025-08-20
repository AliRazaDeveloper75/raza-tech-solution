import React from 'react';
import { Users, Target, Award, Heart, CheckCircle, Lightbulb } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Ahmed Raza',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Visionary leader with 10+ years in tech innovation and business strategy.',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3781529/pexels-photo-3781529.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Full-stack expert specializing in modern web technologies and scalable solutions.',
    },
    {
      name: 'David Kim',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Award-winning designer with expertise in branding and visual storytelling.',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Marketing Strategist',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Digital marketing guru driving growth through innovative campaigns.',
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve their goals and exceed expectations.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project, delivering exceptional quality consistently.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion',
      description: 'We love what we do and it shows in our dedication to creating remarkable digital experiences.',
    },
  ];

  const achievements = [
    '500+ Projects Delivered Successfully',
    '150+ Satisfied Clients Worldwide',
    '99% Client Retention Rate',
    '5+ Years of Industry Experience',
    'Award-Winning Design Team',
    '24/7 Customer Support',
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              About
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent block">
                Raza-Tech-Solution
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Founded with a vision to bridge the gap between technology and business success, we've been 
              transforming digital landscapes since 2019. Our journey is driven by innovation, powered by 
              expertise, and fueled by our passion for creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Raza-Tech-Solution was born from a simple yet powerful idea: technology should empower 
                  businesses, not complicate them. Founded by Ahmed Raza, our company started as a small 
                  team of passionate developers and designers who believed in the transformative power of 
                  digital innovation.
                </p>
                <p>
                  Over the years, we've grown into a comprehensive tech solutions provider, expanding our 
                  expertise across web development, graphic design, e-commerce, and digital marketing. 
                  What hasn't changed is our commitment to understanding each client's unique needs and 
                  delivering solutions that drive real business results.
                </p>
                <p>
                  Today, we're proud to have helped over 150 businesses across various industries transform 
                  their digital presence and achieve their goals. From startups to established enterprises, 
                  our clients trust us to deliver innovation, quality, and results.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600">4+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses of all sizes by providing innovative, reliable, and scalable 
                technology solutions that drive growth, enhance efficiency, and create meaningful 
                digital experiences for their customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-cyan-100 p-3 rounded-full">
                  <Award className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading tech solutions partner that businesses trust for their digital 
                transformation journey, recognized for our innovation, quality, and commitment to 
                client success in the ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <hr />

      {/* Team 
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Achievements */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;