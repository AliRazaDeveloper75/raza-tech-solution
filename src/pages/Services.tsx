import React from "react";
import {
  Code,
  Palette,
  Zap,
  FileText,
  ShoppingCart,
  Video,
  TrendingUp,
  Users,
  Link,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Mobile-First Approach",
      ],
      technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
      startingPrice: "$1,500",
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Graphic Design",
      description:
        "Creative visual solutions including branding, logos, marketing materials, and digital artwork that make your brand stand out.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Print Design",
        "Digital Graphics",
      ],
      technologies: ["Adobe Illustrator", "Photoshop", "Figma", "InDesign"],
      startingPrice: "$300",
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Full Stack Development",
      description:
        "End-to-end development solutions covering both frontend and backend with database integration and API development.",
      features: [
        "Database Design",
        "API Development",
        "Authentication",
        "Cloud Deployment",
      ],
      technologies: ["MERN Stack", "PostgreSQL", "AWS", "Docker"],
      startingPrice: "$2,500",
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: "WordPress",
      description:
        "Professional WordPress websites with custom themes, plugins, and content management solutions for easy maintenance.",
      features: [
        "Custom Themes",
        "Plugin Development",
        "E-commerce Integration",
        "SEO Optimization",
      ],
      technologies: ["WordPress", "PHP", "MySQL", "WooCommerce"],
      startingPrice: "$800",
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "Shopify",
      description:
        "Complete e-commerce solutions on Shopify platform with custom designs, payment integration, and inventory management.",
      features: [
        "Store Setup",
        "Custom Design",
        "Payment Gateway",
        "Inventory Management",
      ],
      technologies: ["Shopify Liquid", "JavaScript", "CSS", "Shopify APIs"],
      startingPrice: "$1,200",
    },
    {
      icon: <Video className="h-12 w-12" />,
      title: "Video Editing",
      description:
        "Professional video production and editing services for marketing, social media, tutorials, and corporate communications.",
      features: [
        "Motion Graphics",
        "Color Correction",
        "Audio Enhancement",
        "Multi-format Export",
      ],
      technologies: [
        "Adobe Premiere",
        "After Effects",
        "DaVinci Resolve",
        "Audition",
      ],
      startingPrice: "$200",
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Social Media Marketing",
      description:
        "Strategic marketing campaigns across all major platforms to increase brand awareness and drive conversions.",
      features: [
        "Campaign Strategy",
        "Content Creation",
        "Ad Management",
        "Analytics Reporting",
      ],
      technologies: ["Facebook Ads", "Google Analytics", "Hootsuite", "Canva"],
      startingPrice: "$600",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Social Media Management",
      description:
        "Complete social media handling including content planning, posting, engagement, and community management.",
      features: [
        "Content Planning",
        "Daily Posting",
        "Community Management",
        "Growth Strategy",
      ],
      technologies: ["Buffer", "Later", "Sprout Social", "Canva"],
      startingPrice: "$500",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We start with understanding your needs, goals, and project requirements through detailed consultation.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "Our team creates a comprehensive project plan with timelines, milestones, and deliverables.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "We bring your vision to life using the latest technologies and best practices in the industry.",
    },
    {
      step: "04",
      title: "Testing",
      description:
        "Rigorous testing ensures everything works perfectly across all devices and platforms.",
    },
    {
      step: "05",
      title: "Launch",
      description:
        "We deploy your project and provide training and support for a smooth launch.",
    },
    {
      step: "06",
      title: "Support",
      description:
        "Ongoing maintenance and support to ensure your solution continues to perform optimally.",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Our
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent block">
                Services
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Comprehensive tech solutions designed to elevate your business.
              From web development to digital marketing, we provide everything
              you need to succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl text-blue-600 group-hover:from-blue-100 group-hover:to-cyan-100 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    {/* <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <div className="text-2xl font-bold text-blue-600">{service.startingPrice}</div>
                    </div> */}
                    <a href="https://api.whatsapp.com/send?phone=923043309005">
                      <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 font-semibold shadow-md hover:shadow-lg">
                        Get Quote
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
              every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's discuss your requirements and create a custom solution that
              meets your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://api.whatsapp.com/send?phone=923043309005">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Free Consultation
              </button>
              </a>
              <a href="/portfolio">
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                View Portfolio
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
