import React from 'react';
import logojd from '../jd.png';
function Header(){
  let sectionStyle = {
    marginLeft : 10,
    marginTop : 10
  };
  return (
    <div>
      <img src = {logojd} height={"20%"} width={"35%"} style = {sectionStyle}/>
    </div>
  )
}

export default Header
