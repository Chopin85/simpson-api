import  React  from  'react';

const  GenerateSimpson = ({ selectSimpson }) => {
    return (
        <div  className="GenerateSimpson">
        <button  onClick={selectSimpson}>Get New Simpson</button>
        </div>
    );
};

export  default  GenerateSimpson;