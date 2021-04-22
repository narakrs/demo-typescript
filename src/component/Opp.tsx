import React from 'react';
type CardProps = {
  title: string,
  onLoggg: (title: string,password:string) => void;
}
function Opp({ title,onLoggg }: CardProps) {
  return (
    <div>
    {title}
    <div style={{width:100,height:50,backgroundColor:'blue'}} onClick={()=>onLoggg('thanhse','jjj')}></div>
    </div>
  );
}

export default Opp;