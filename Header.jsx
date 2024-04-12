import React from "react";
import {Helmet} from "react-helmet";

export default function Header(props) {

    const renderTitle = () =>{
        if(props.name === "Loading") return `${props.name}...`;
        return props.name ? `VIT VELLORE : ${props.name}` : `VIT Student Chapter`;
    }

    const renderDescription = () => {
        return props.description ?
            `${props.description}` :
            `ACM VIT is a subsidiary of Association for Computing Machinery (ACM), a worldwide learning society for computing. The chapter was founded on August 2, 2019.`
    }

    return <Helmet>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="ACM,VIT,Association for Computing Machinery,Student Chapter,Vellore"/>
        <link rel="icon" href={`logo.png`}/>
        <link href={`logo.png`} rel="apple-touch-icon"/>


        <title>
            {renderTitle()}
        </title>
        <meta name="title" content={renderTitle()}/>
        <meta name="description" content={`${renderDescription()}`}/>


        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://mvsr.acm.org/"/>
        <meta property="og:title" content="ACM VIT Student Chapter"/>
        <meta property="og:description"
              content="ACM VIT is a subsidiary of Association for Computing Machinery (ACM), a worldwide learning society for computing. The chapter was founded on August 2, 2019."/>
        <meta property="og:image" content={`websiteShot.png`}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://mvsr.acm.org/"/>
        <meta property="twitter:title" content="ACM VIT Student Chapter"/>
        <meta property="twitter:description"
              content="ACM VIT is a subsidiary of Association for Computing Machinery (ACM), a worldwide learning society for computing. The chapter was founded on August 2, 2019."/>
        <meta property="twitter:image" content={`websiteShot.png`}/>

        <meta name="author" content="Aditya Manikanth Rao"/>
        <meta name="author" content="Sai SriChandra"/>
        <meta name="author" content="Keerthana"/>
        <meta name="author" content="Yashwanth"/>
        <meta name="author" content="N S S Kaushik"/>

        <link
            rel={`stylesheet`}
            href={`https://fonts.googleapis.com/css2?family=Raleway&family=Roboto+Slab:wght@600&display=swap`}
        />
        <style>
            {`
        
        html {
            scroll-behavior: smooth;
        }

        body {
            margin: 0;
            padding: 0;
            overflow-x:hidden ;
        }

        h1,h2,h3,h4,h5,h6,a,button {
            font-family: 'Roboto Slab', serif;
        }

        p,label,input,textarea,li {
            font-family: 'Raleway', sans-serif;
        }
        
        ::-webkit-scrollbar {
            display: none;
        }
        
            `}
        </style>
    </Helmet>
}