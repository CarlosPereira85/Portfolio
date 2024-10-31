import React from 'react';
import videoFile from '../../assets/vila-market.mp4';


    const RecentVideos = () => {
        const divStyle = {
          display: 'grid',
         
          justifyContent: 'center',
        };

  return (
    <div style={divStyle}>
      <h2>In Arbeit</h2>
      <video width="300" controls>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>PHP-MYSQL</p>
    </div>
  );
};

export default RecentVideos;
