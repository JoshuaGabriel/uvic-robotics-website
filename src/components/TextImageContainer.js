import React from 'react';
import classnames from 'classnames';

export default function TextImageContainer(props){
  const classStr = classnames(
    props.background
  );
  
  
  return (
    <div className={classStr}>
      <div className="container md:container max-w-screen-xs mx-auto px-8 ">
        <div className="md:flex">
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl text-gray-700 mb-4">{props.title}</h2>
            <p className="text-gray-700">{props.text}</p>
          </div>
          <div className="md:w-1/2 p-6">
            <img src={props.imageUrl} alt="Image" className="object-cover h-64 w-full" />
          </div>
        </div>
      </div>
    </div>
  );  
}




