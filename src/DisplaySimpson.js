import  React  from  'react';

const  DisplaySimpson = ({ simpsonPass }) => {
    return (
        <div  className="DisplaySimpson">
            <h1>{simpsonPass.character}</h1>
            <img  src={simpsonPass.image}  alt="img"  />
            <h1>{simpsonPass.quote}</h1>
        </div>
    );
};

export  default  DisplaySimpson;