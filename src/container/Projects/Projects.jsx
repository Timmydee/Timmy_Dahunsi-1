import React, { useState } from "react";
import "./Project.scss";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import portiv from '../../assets/xy2.webp';
import portv from '../../assets/port5.png';
import port3 from '../../assets/dnq.webp';
import port1 from '../../assets/bestcribs.webp'
import port2 from '../../assets/nftsImg.webp'



const allWork = [
    {
      imgUrl: port1,
      title: "Best Crib",
      webUrl:"https://bestcrib.vercel.app/",
      about:
        "Best Crib is a housing solution that helps home seekers find vacant apartments in my Local community.",
    },
    {
      imgUrl: port2,
      title: "Nft MarketPlace",
      webUrl:"https://nftworld-five.vercel.app/",
      about:
        "I developed the frontend of this website using Next.Js and TailwindCss.",
    },
    {
        imgUrl: port3,
        title: "Designer Query",
        webUrl:"https://designerquery.vercel.app/",
        about:
          "I worked along side an agile team and was responsible for developing the frontend of this website using Next.Js and TailwindCss.",
      },
    {
      imgUrl: portv,
      title: "Brand Website",
      webUrl:"https://portfolio-pearl-tau-28.vercel.app/",
      about:
        "I developed the frontend of a this web application that serves as a portfolio website for my client.",
    },
    {
        imgUrl: portiv,
        title: "Xypher",
        webUrl:"https://xyzpher.vercel.app/",
        about:
          'I actively collaborated with designers to build the frontend of Xypher, a decentralized investment platform, utilizing Next.js and Tailwind CSS to create a seamless and user-friendly interface.',
      },
];


const Projects = () => {
    return (
        <div className="work" id='work'>
            <div className='work__container'>
                <h2 className="sub-text"><span>Some of my Projects</span></h2>

                <div className="work-portfolio workContent_co ">
                    {allWork.map((work) => (
                        <div className="workContent_col2">
                            <div>
                                <div className="workContent_col3">
                                    <h3 className="bold-text">{work.title}</h3>
                                    <p className="pSub-text">{work.about}</p>
                                    {/* <hr></hr> */}
                                
                                
                                    <div>
                                        <div className="workContent_col5">
                                            <div className="icon eye">
                                                <a href={work.webUrl} target="_blank">
                                                    SEE PROJECT
                                                </a>
                                            </div>    
                                            <div className="icon git">
                                                <a href={work.gitUrl} target="_blank">
                                                    VIEW CODE
                                                </a>
                                            </div>
                                            {/* <p className="p-text">See Projects</p>
                                            <div className="icon eye">
                                                <a href={work.webUrl} target="_blank">
                                                    <AiFillEye />
                                                </a>
                                            </div>    
                                            <div className="icon git">
                                                <a href={work.gitUrl} target="_blank">
                                                    <AiFillGithub />
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="workContent_img">
                                <img src={work.imgUrl} alt="work" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        

    )
}

export default Projects

