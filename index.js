console.log("did work?");

/*---------------------------------------------------------BURGERMENU EVENT LISTENER /when hovering on burger menu (upper right) ----------------------------START--------------------------*/
const bMenu=document.querySelector(".burger-menu");
const menuItem=document.querySelector(".menu-items");
const menuExt=document.querySelector(".menu-exit");
/*---------------------------------------------*/
const option1=document.getElementById("optOne");
const option2=document.getElementById("optTwo")
const option3=document.getElementById("optThree")
const option4=document.getElementById("optFour")
const option5=document.getElementById("optOnFive")
const allBlogs=document.querySelector(".all-blogs");


bMenu.addEventListener("mouseover",fistFunc);
function fistFunc(){menuItem.style.height="25vh";};
bMenu.addEventListener("mouseout",secndFunc);
function secndFunc(){menuItem.style.height="0vh";};
menuItem.addEventListener("mouseover",fistzFunc);
function fistzFunc(){menuItem.style.height="25vh";};
menuItem.addEventListener("mouseout",fistzzFunc);
function fistzzFunc(){menuItem.style.height="0vh";};
menuExt.addEventListener("click",clickFunc);
function clickFunc(){menuItem.style.height="0";};

option1.addEventListener("click",clickONE);
function clickONE(){allBlogs.style.height="140vh";};
option2.addEventListener("click",clickTWO);
function clickTWO(){allBlogs.style.height="140vh";};
option3.addEventListener("click",clickTHREE);
function clickTHREE(){allBlogs.style.height="140vh";};


/*---------------------------------------------------------BURGERMENU EVENT LISTENER ----------------------------END--------------------------*/
/*----Content box 1,2,3  when clicked  a box on the bottom appears /under main content element ---------------------*/
const contExt=document.querySelector(".content-exit");
const cont=document.querySelector(".content");
const bxOne=document.getElementById("box01");
const bxTwo=document.getElementById("box02");
const bxThree=document.getElementById("box03");
/*-----------------------------------------------*/
const bOne=bxOne.getAttribute("data-value");
const bTwo=bxTwo.getAttribute("data-value");
const bThree=bxThree.getAttribute("data-value");
/*-----------------------------------------------*/
const contentHeaders=document.querySelector(".content-headers");
const contentParagraph=document.querySelector(".content-paragraphs");


bxOne.addEventListener("click",bxClick);
function bxClick(){cont.style.height="60vh";cont.style.width="90vw";cont.style.marginTop="15vh";cont.style.zIndex="1";
if(bOne==="01"){contentHeaders.innerHTML="";/*--HEAD---*/
                contentParagraph.innerHTML=``;
				}
else if(bOne==="001"){contentHeaders.innerHTML="";/*--HEAD---*/
                      contentParagraph.innerHTML=``;}
else if(bOne==="0001"){contentHeaders.innerHTML="";/*--HEAD---*/
                       contentParagraph.innerHTML=``;}
else if(bOne==="00001"){contentHeaders.innerHTML="";/*--HEAD---*/
                        contentParagraph.innerHTML=``;}

}

bxTwo.addEventListener("click",bxClick2);
function bxClick2(){cont.style.height="60vh";cont.style.width="90vw";cont.style.marginTop="15vh";cont.style.zIndex="1";
if(bTwo==="02"){contentHeaders.innerHTML="";/*--HEAD---*/
                contentParagraph.innerHTML=``;
				}
else if(bTwo==="002"){contentHeaders.innerHTML="";/*--HEAD---*/
                      contentParagraph.innerHTML=``;}
else if(bTwo==="0002"){contentHeaders.innerHTML="";/*--HEAD---*/
                       contentParagraph.innerHTML=``;}
else if(bTwo==="00002"){contentHeaders.innerHTML="";/*--HEAD---*/
                        contentParagraph.innerHTML=``;}
}

bxThree.addEventListener("click",bxClick3);
function bxClick3(){cont.style.height="60vh";cont.style.width="90vw";cont.style.marginTop="15vh";cont.style.zIndex="1";
if(bThree==="03"){/*--HEAD-  AND PARAGRAPH CAN BE RENDERED USING HTMX--*/}
else if(bThree==="003"){/*--HEAD-  AND PARAGRAPH CAN BE RENDERED USING HTMX--*/}
else if(bThree==="0003"){/*--HEAD-  AND PARAGRAPH CAN BE RENDERED USING HTMX--*/}
else if(bThree==="00003"){/*--HEAD-  AND PARAGRAPH CAN BE RENDERED USING HTMX--*/}
}

contExt.addEventListener("click",exitNow);
function exitNow(){cont.style.height="0vh";cont.style.width="0vh";cont.style.marginTop="0";cont.style.zIndex="-1";}
/*----Content box 1,2,3  when clicked  a box on the bottom appears ---------------------*/
/*---------------------------------------------------------Content Body Option Selection /the three options  on the right side of the first content element
changes the layout of the  3 content element divs------------------------start------------------------*/
const objOne=document.querySelector(".obj-1");
const objTwo=document.querySelector(".obj-2");
const objThree=document.querySelector(".obj-3");
/*-----------------------------------*/
const elOne=document.getElementById("box01");
const elTwo=document.getElementById("box02");
const elThree=document.getElementById("box03");
/*-----------------------------------*/
const contHeadOne=document.querySelector("#headOne");
const contHeadTwo=document.querySelector("#headTwo");
const contHeadThree=document.querySelector("#headThree");

objOne.addEventListener("click",changeLayout);
function changeLayout(){elOne.style.gridRow="1/3";elOne.style.gridColumn="1/3";elOne.style.backgroundImage="url('')";
                        elTwo.style.gridRow="1/2";elTwo.style.gridColumn="3/4";elTwo.style.backgroundImage="url('')";
						elThree.style.gridRow="2/3";elThree.style.gridColumn="3/4";elThree.style.backgroundImage="url('')";
						contHeadOne.style.marginTop="0%";                          contHeadOne.innerHTML=``;
						                                                           contHeadTwo.innerHTML=``;
						contHeadThree.style.marginTop="0%";                        contHeadThree.innerHTML=``;
						bxOne.setAttribute("data-value","001");
						bxTwo.setAttribute("data-value","002");
						bxThree.setAttribute("data-value","003");
						if(window.matchMedia("(orientation:portrait)").matches){contHeadOne.style.marginTop="0%";}
						};
objTwo.addEventListener("click",changeLayout2);
function changeLayout2(){elOne.style.gridRow="1/2";elOne.style.gridColumn="1/3";elOne.style.backgroundImage="url('')";
                          elTwo.style.gridRow="2/3";elTwo.style.gridColumn="1/3";elTwo.style.backgroundImage="url('')";
						  elThree.style.gridRow="1/3";                           elThree.style.backgroundImage="url('')";
						  contHeadOne.style.marginTop="0%";                      contHeadOne.innerHTML=``;
						                                                         contHeadTwo.innerHTML=``;
						  contHeadThree.style.marginTop="0%";                    contHeadThree.innerHTML=``;
						  bxOne.setAttribute("data-value","0001");
						bxTwo.setAttribute("data-value","0002");
						bxThree.setAttribute("data-value","0003");
						  if(window.matchMedia("(orientation:portrait)").matches){contHeadThree.style.marginTop="0%";}};
objThree.addEventListener("click",changeLayout3);
function changeLayout3(){elOne.style.gridRow="1/2";elOne.style.gridColumn="1/4"; elOne.style.backgroundImage="url('')";
                        elTwo.style.gridRow="2/3";elTwo.style.gridColumn="1/3";   elTwo.style.backgroundImage="url('')";
						elThree.style.gridRow="2/3";elThree.style.gridColumn="3/4";elThree.style.backgroundImage="url('')";
						contHeadOne.style.marginTop="0%";                          contHeadOne.innerHTML=``;/*-the headElements can be rendered using HTMX---*/
						                                                           contHeadTwo.innerHTML=``;/*-the headElements can be rendered using HTMX---*/
						contHeadThree.style.marginTop="0%";                   contHeadThree.innerHTML=``;/*-the headElements can be rendered using HTMX---*/
						  bxOne.setAttribute("data-value","00001");
					      bxTwo.setAttribute("data-value","00002");
						  bxThree.setAttribute("data-value","00003");
						};   
/*---------------------------------------------------------Content Body Option Selection ------------------------end------------------------*/

/*---------------------------------------------------------CONTENT BODY TWO=EVENT LISTENER////triggers  extra content element when (see all blogs)is clicked ----------------------------START--------------------------*/
const moreBlogs=document.querySelector(".more");
const allBlogExt=document.querySelector(".all-blog-exit");


moreBlogs.addEventListener("click",allBlogClick);
function allBlogClick(){allBlogs.style.height="200vh";allBlogs.style.opacity="1";};
allBlogExt.addEventListener("click",extAllBlog);
function extAllBlog(){allBlogs.style.height="0vh";};
/*---------------------------------------------------------CONTENT BODY TWO=EVENT LISTENER ----------------------------END--------------------------*/






/*----------------------------------TO Do: can we change layout of content box 2 each every 5 or 10 sesonds using time interval and  
  grid-row/grid-column manipulation----------------------------*/
const bx1=document.querySelector("#box1");
const bx2=document.querySelector("#box2");
const bx3=document.querySelector("#box3");
const bx4=document.querySelector("#box4");
const bx5=document.querySelector("#box5");
const bx6=document.querySelector("#box6");
const bx7=document.querySelector("#box7");
const bx8=document.querySelector("#box8");
const bx9=document.querySelector("#extra-box");

const intervalOne=setInterval(intOne,10000);//this  is 100 seconds  should we devide  each 10 seconds  to  change  layout 10x within 100sec? and  just reset 
function intOne(){ bx1.style.gridRow="1/2";bx1.style.gridColumn="1/2"; bx6.style.gridRow="2/3";bx6.style.gridColumn="2/3"; bx7.style.gridRow="2/3";bx7.style.gridColumn="3/4"; bx8.style.gridRow="2/3";bx8.style.gridColumn="4/5";bx9.style.gridRow="3/4";if(window.matchMedia("(orientation:portrait)").matches){bx9.style.gridColumn="1/2";bx9.style.gridRow="3/4";bx8.style.gridColumn="2/3";bx8.style.gridRow="3/4"}
  const intervalTwo=setInterval(inTWO,10000);
    function inTWO(){clearInterval(intervalOne); bx4.style.gridRow="1/3"; bx4.style.gridColumn="4/5"; bx2.style.gridRow="1/3";  bx6.style.gridColumn="3/4"; bx7.style.gridRow="3/4";bx7.style.gridColumn="1/3";  bx8.style.gridRow="3/4";bx8.style.gridColumn="3/5";if(window.matchMedia("(orientation:portrait)").matches){bx9.style.gridColumn="2/3";}	
	     const intervalThree=setInterval(inThree,10000);
             function inThree(){clearInterval(intervalTwo);  bx1.style.gridRow="1/2";bx1.style.gridColumn="1/2";  bx2.style.gridRow="1/2";bx2.style.gridColumn="2/3";   bx4.style.gridRow="1/2"; bx4.style.gridColumn="4/5";  bx6.style.gridRow="2/3";bx6.style.gridColumn="2/3";   bx7.style.gridRow="2/3";bx7.style.gridColumn="3/4";  bx8.style.gridRow="2/3";bx8.style.gridColumn="4/5";if(window.matchMedia("(orientation:portrait)").matches){bx9.style.gridColumn="1/5";}
			     
                   }; 				   
				   };/*------*/
                   };/*----------------------*/

const sliderIcon=document.querySelector(".slider-icon");
const sliderList=document.querySelector(".slider-list");
const adD=document.querySelector(".add");
sliderIcon.addEventListener("mouseover",slideHover);
function slideHover(){sliderList.style.display="block";adD.style.display="block";};
sliderIcon.addEventListener("mouseout",slideHover2);
function slideHover2(){sliderList.style.display="none";adD.style.display="none";};


/*--------------------------------------slider buttons---------------------------------------*/
function shareClick(){navigator.clipboard.writeText("hello");
                       alert("link copied to clipboard")}
function showResource(){allBlogs.style.height="200vh";}
function knowMore(){allBlogs.style.height="200vh";}
/*--------------------------------------slider buttons---------------------------------------*/

const  cmnt=document.querySelector(".comment-section");
const scialName=document.querySelector(".social-name");
cmnt.addEventListener("mouseover",cmntSec);
function cmntSec(){scialName.style.width="20vw";
                    if(window.matchMedia("(orientation:portrait)").matches){scialName.style.width="60vw"}};

function leaveComment(){cmnt.style.display="block";}
function exitCmntBx(){cmnt.style.display="none";}

/*
const myInterval=setInterval(myFunc,2000); //1000 means 1sec so if we put in 2000 it means  2 sec----
function myFunc(){ // some  declarations here
                  };
				  //can also call a function to  clear the  timer countdown (setInterval)
		
//<button onclick="yourFunc"> Sample </button>
function yourFunc(){
	 clearInterval(myInterval)//the variable of the setInterval value 
                    }		
					
					
					
				if(window.matchMedia("(orientation:portrait)").matches){}   orientation  statement 	*/