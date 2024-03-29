import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import  { AppWrap, MotionWrap } from '../../wrapper'

import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  /* Create useState field (useStateSnippet) */
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, []);
  
  return (
    <> {/*Empty react fragment */}
      <h2 className="head-text"> 
        I know that <span>Good Development</span> 
        <br/> requires <span>Hands-on experience</span>
      </h2>

      <div className="app__profiles">
        {/* Get an individual "about" and the index, then instantly return a motion.div */}
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}> {about.title} </h2>
            <p className="p-text" style={{ marginTop: 10 }}> {about.description} </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap (
  MotionWrap (About, 'app__about'),
  'about',
  "app__whitebg"
);