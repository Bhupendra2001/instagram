import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { story } from "@/constants";
const Navbar = () => {
  return (
    <div 
    style={{msOverflowStyle: "none" , scrollbarWidth: "none",overflowX: "auto" ,width : "450px"  , display : "flex"}}
    >
      <div  className="pt-3.5 pl-3.5"> 
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 style={{fontSize:"8px"}}>+ your story</h1>
      </div>

      <div className="flex snap-x ... " >
        {story.map((item) => (
          <div
            key={item.avtarName}
            className=" border-stone-500 p-3  rounded-full  "
          >
            <Avatar className="cursor-progress" >
              <AvatarImage src={item.ImageURL} />
              <AvatarFallback>{item.avtarName}</AvatarFallback>
            </Avatar>
            <p style={{ fontSize: "8px", textAlign :"center" }}>{item.userName}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Navbar;
