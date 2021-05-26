import React from 'react';
import { parse } from 'query-string';
import axios from 'axios';

import {useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
    // 'https://i.ibb.co/b6WLrZk/slide6.jpg',
    // 'https://i.ibb.co/9Y0WjXB/slide3.jpg',
    // 'https://i.ibb.co/zfzJXQ3/slide4.jpg',
    // 'https://i.ibb.co/5Bq5P72/slide1.jpg'
    '/SliderImages/slide1.jpg',
    '/SliderImages/slide2.jpg',
    '/SliderImages/slide3.jpg',
    '/SliderImages/slide4.jpg'

  ];

export default function Slider() {
    // const classes = useStyles();
    const [state, setState] = useState({open: true});

    // useEffect(() => {
    //     console.log(window.location.search, "hello");
    //     var a = window.location.search;
    //     console.log(parse(a));
    //     axios.post('http://localhost:2020/checkToken',parse(a))
    //     .then((res) =>{
    //         if(!res.data.result){
    //             Redirect('/login');
    //         }
    //     })

    // });

    return (
        <div className="slide-container" style={{marginTop: '-5px'}}>
          <Slide>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`, padding: '200px'}}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`, padding: '200px'}}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`, padding: '200px'}}>
                <span>Slide 3</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[3]})`, padding: '200px'}}>
                <span>Slide 4</span>
              </div>
            </div>
          </Slide>
        </div>
      )
}
