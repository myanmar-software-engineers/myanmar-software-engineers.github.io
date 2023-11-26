import React from 'react';

const Jiro = () => {



    
      const styleX={
        
            color: '#e02514',
            cursor:'pointer',
            fontWeight:'bolder'
         
      }

  const handleClick = () => {
    alert('Khit Khit ko chit tl 💖');
  };

  return (
     <span> -- Son, <span onClick={handleClick} style={styleX}>boyfriend</span>, Software Developer, Coffee Addict. --</span>
  );
};

export default Jiro;