import React from "react"
import { TwitterIcon, GithubIcon, LinkedinIcon } from "lucide-react"
import LaxmiPic from "../assets/LaxmiPic.jpeg";
import PoojaPic from "../assets/poojaNayi.png";
import VishalPic from "../assets/VishalPic.jpeg";
import VedantPic from "../assets/VedantPic.jpeg";
export default function AboutUs() {
  const team = [
    {
      name: "Laxmi Bodke",
      role: "Frontend Developer",
      image: LaxmiPic,
      description: "Specialized in creating engaging and interactive user interfaces for web applications.",
      social: {
        twitter: "#",
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Pooja Maurya",
      role: "Frontend Developer",
      image: PoojaPic,
      description: "Specialized in creating engaging and interactive user interfaces for web applications.",
      social: {
        twitter: "#",
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Vedant Kamble",
      role: "Frontend Developer",
      image: VedantPic,
      description: "Specialized in creating engaging and interactive user interfaces for web applications.",
      social: {
        twitter: "#",
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Vishal Chaure",
      role: "Frontend Developer",
      image: VishalPic,
      description: "Specialized in creating engaging and interactive user interfaces for web applications.",
      social: {
        twitter: "#",
        github: "#",
        linkedin: "#"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">About Us</h2>
          <p className="mt-4 text-xl text-gray-400">Meet the team behind our success</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-sm mb-12">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Our Website</h3>
            <p className="text-gray-300 mb-4">
              Welcome to TechInnovate, where we revolutionize the way businesses interact with technology. 
              Our mission is to empower companies through cutting-edge software solutions. Founded in 2015, we've been dedicated to 
              creating intuitive, powerful, and scalable applications for 8 years.
            </p>
            <p className="text-gray-300">
              What sets us apart is our commitment to innovation and customer-centric approach. We're committed to 
              delivering tailored solutions that address unique business challenges, ensuring that every client experiences 
              transformative results that drive growth and efficiency.
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="bg-gray-800 border border-gray-700 rounded-lg shadow-sm">
              <div className="p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                <p className="text-sm text-gray-400 text-center mt-1">{member.role}</p>
                <p className="text-sm text-gray-400 text-center mt-4">{member.description}</p>
                <div className="flex justify-center space-x-4 mt-6">
                  <a 
                    href={member.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <TwitterIcon className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a 
                    href={member.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="w-full py-6 my-6 bg-gray-800 text-gray-400">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 BudgetBuddy Inc. All rights reserved.
          </p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <a className="text-sm hover:text-blue-400 transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-sm hover:text-blue-400 transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-sm hover:text-blue-400 transition-colors" href="#">
              FAQ
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}