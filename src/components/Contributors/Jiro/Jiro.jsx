import React from 'react';

const Jiro = () => {


    const [styleX,setStyleX] = useState({
        color: '#e02514',
        cursor:'pointer',
        fontWeight:'bolder'
      });
    
      const firstStyle={
        
            color: '#e02514',
            cursor:'pointer',
            fontWeight:'bolder'
         
      }
      const secStyle={
        color:'white'
      }

  const handleClick = () => {
    alert('Khit Khit ko chit tl 💖');
  };

  return (
      <p>Son, <span onMouseEnter={setStyleX(secStyle)} onMouseLeave={setStyleX(firstStyle)} onClick={handleClick} style={styleX}>Khit's boyfriend</span>, Software Developer, Coffee Addict. --</p>
  );
};

export default Jiro;