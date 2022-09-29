//---------------------1---------------------
//index.js
/*const design={
    padding:"30px ",
    backgroundColor:"#22577A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize:"35px",
    color:"black",
    borderRadius:"70px",
    border: "15px double #38A3A5",
}
const cssStyle={
    fontFamily: "'Satisfy', cursive",
    fontSize:"60px"

};
const time=new Date(0,0,0,).getHours();

    if(time>=1 && time<12){
        var message="Good Morning"; 
        cssStyle.color="#80ED99";
    }else if(time>=12 && time<19){
        var message="Good Afternoon";
        cssStyle.color="orange";
    }else{
        var message="Good Night";
        cssStyle.color="white";
    }



ReactDOM.render(
<React.Fragment>
<div className="main_div">
<p style={design}>
<h2 >hello sir, <span style={cssStyle}>{message}</span></h2>
</p>
</div>
</React.Fragment>,
document.getElementById("root")
);*/


//index.css
/**{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  .main_div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height:100vh;
    background-color: #38A3A5;
    font-family: 'Abril Fatface', cursive;
    text-transform: capitalize;
  }
*/

//------------------------------2------------------------------
//Cards.jsx
/*import React from 'react';

function Cards(props){
    return(
        <React.Fragment>
    <div className='cards'>
    <div className='card'>
    <img src={props.imgsrc} alt='mypic' className='card_img'></img>
    <div className='card_info'>
    <span className='card_category'>{props.title}</span>
    <h3 className='card_title'>{props.sname}</h3>
    <a href={props.link} target='_blank'>
    <button>Watch Now</button>
    </a>
    </div>
    </div>
    </div>
    </React.Fragment>
    )
}
export default Cards;*/

//index.css
/**{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    background-color: #d7dbdd;
  }
  .heading{
    padding:18px 0px;
    text-align: center;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 5px;
    font-weight: 500;
    color:#868686;
    background-color: #fff;
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  .cards{
    width:100%;
    height: auto;
  }
  .card{
    margin: 6%;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1);
    background-color: #fff;
    width:21.25%;
    border-radius: 12px;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
    float: left;
  }
  .card:hover{
    box-shadow: 0px 30px 18px -8px rgba(0,0,0,0.1);
    transform: scale(1.05 1.05);
  }
  .card_img{
    width:100%;
    height:235px;
    border-radius: 12px 12px 0px 0px;
  }
  .card_info{
    background-color: #fff;
    border-radius: 0px 0px 12px 12px;
    padding: 16px 24px 24px 24px;
  }
  .card_category{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color:#868686;
    background-color: #fff;
  }
  .card_title{
    margin-top: 5px;
    margin-bottom: 10px;
    background-color: #fff;
    text-transform: capitalize;
  }
  button{
    padding: 5px 8px ;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #868686;
    background: #fff;
    outline: none;
    border: 1px solid black;
    cursor: pointer;
  }
  @media (max-width:767px){
    .card{
      float: none;
      margin: 5% auto;
      width: 60%;
    }
  }*/

  //index.js
/*import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import './index.css';

ReactDOM.render(
    <React.Fragment>
    
    <h1 className='heading'>List Of Top 5 Netflix Series In 2022</h1>

    <Cards 
    imgsrc="https://picsum.photos/200/300" 
    title="A Netflix Orignal Series" 
    sname="DARK" 
    link="https://www.netflix.com/title/80100172"/>

    <Cards 
    imgsrc="https://picsum.photos/201/301" 
    title="A Netflix Orignal Series" 
    sname="FREEDOM" 
    link=""/>

    <Cards 
    imgsrc="https://picsum.photos/202/302" 
    title="A Netflix Orignal Series" 
    sname="AVATAR" 
    link="Watch Avatar | Prime Video - Amazon.com"/>
    </React.Fragment>
    ,
    document.getElementById("root")
)*/

//--------------------------3-----------------------SLOAT MACHINE--------------------------------------------
//index.css
/**{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-color: #d2dbdd;
}
.heading_style{
  padding:30px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  background-color: #fff;
  font-size: 1.5rem;
  margin-bottom: 30px;
  width:100%;
}
.sloat_machine{
  padding:60px 5px 60px 5px;
  border:8px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}*/

//Netflix.jsx
/*import React from 'react';

const Sloatm=(props)=>{
    //let x='😄';
    //let y='😄';
    //let z='😄';
    let x=props.x;
    let y=props.y;
    let z=props.z;
    console.log(props);

    if((x===y) || (y===z)){
        return(
            <div className='slot_inner'>
            <h1>
            {x} {y} {z} 
            </h1>
            <h1>this is matching.</h1>
            <hr/>
            </div>
        )
    }else{
        return(
            <div className='slot_inner'>
            <h1>
            {x} {y} {z} 
            </h1>
            <h1>this is not matching.</h1>
            <hr/>
            </div>
        ) 
    }
}

const Netflix=()=>{
    return <React.Fragment>
    <h1 className='heading_style'>🎰Welcome to <span style={{fontWeight:"bold"}}>slot machine</span>🎰</h1>
    <div className='sloat_machine'>
    <Sloatm x='😃' y='😃' z='😃'/>
    <Sloatm x='😍' y='💟' z='🥵'/>
    <Sloatm x='👊' y='🍰' z='🐯'/>
    </div>
    </React.Fragment>
};
export default Netflix;*/

//index.js
/*import React from 'react';
import ReactDOM from 'react-dom';
import Netflix from './Netflix.jsx';
import './index.css';


ReactDOM.render(
    <React.Fragment>
    <Netflix/>
    </React.Fragment>,
    document.getElementById("root")
)*/

//----------------3----------------click n refresh time---------------3---------------------
//App.jsx
/*import React, { useState } from 'react';


const App=()=>{
var time=new Date().toLocaleTimeString();
const state=useState();
const [ctime,uptime]=useState(time);
const Click=()=>{
    time=new Date().toLocaleTimeString();
    uptime(time);
    //window.location.reload();
}

return(
    <React.Fragment>
    <div>
    <h1>{ctime}</h1>
    <button onClick={Click}>Get Time</button>
    </div>
    </React.Fragment>
)
};

export default App;*/

//index.js
/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

ReactDOM.render(
    <React.Fragment>
    <App/>
    </React.Fragment>,
    document.getElementById("root")
)*/

//index.css
/**{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
div{
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
  background-color: #d2dbdd;
  width:100%;
  height:100vh;
}
button{
padding: 10px 20px;  
background-color: coral;
font-size: 20px;
font-weight: bold;
border: none;
text-transform: capitalize;
border: 12px double #d2dbdd ;
font-family:Georgia, 'Times New Roman', Times, serif;
cursor: pointer;
} */

//------------------------------------------event use-------------------------------
//index.css
/*div{
  width:100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
button{
  padding: 13px 30px ;
  font-size: 25px;
  background-color:blueviolet;
  font-weight: bold;
  outline: none;
  color:white;
  border: 2px solid white;
  border-radius: 15px;
}*/

//App.jsx
/*import React,{useState} from 'react';


const App=()=>{
    var purple="hotpink";
    const [bg,setBg]=useState(purple);
    const [name,setname]=useState('click me');
    const BgChange=()=>{
        setname("dbclick")
        setBg("purple");
        console.log("ok")
        }
    const bgBack=()=>{
       setBg(purple) 
       setname("click")
    }

    return(
        <React.Fragment>
        <div style={{backgroundColor:bg}}>
        <button onDoubleClick={bgBack} onClick={BgChange} >{name}</button>
        </div>
        </React.Fragment>
    )
}
export default App;*/

//index.js
/*import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

ReactDOM.render(
    <React.Fragment>
    <App/>
    </React.Fragment>,
    document.getElementById("root")
)*/

//--------------------------------4--------------------------------
//index.js
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'; 

ReactDOM.render(
    <React.Fragment>
    <App/>
    </React.Fragment>,
    document.getElementById("root")
) */

// App.jsx

/*
import React, { useState } from 'react';
import Main from './Main';

const App=()=>{
    const [items,upitems]=useState();
    const [itemsup,uptoitems]=useState([]);
    const grocery=(yahoo)=>{
        upitems(yahoo.target.value)
    }
    const additems=()=>{
        uptoitems((mall)=>{
          return [...mall,items]
        }); 
        upitems("")
    }
    return (
        <React.Fragment>
            <div className="main_div">
            <div className="contain_div">
            <h1>ToDo list</h1>
            <input placeholder='Add An Items' type="text" onChange={grocery} value={items}/>
            <button onClick={additems}>+</button>
            <ol>
            {itemsup.map((val,index)=>{
                return <Main text={val} key={index}/>
            })}
            </ol>
            </div>
            </div>
        </React.Fragment>
    )
}

export default App; */

//Main.jsx
/*
import React, { useState }  from 'react';

const Main=(props)=>{
    const [start,update]=useState();

    const cutIt=()=>{
        update("line-through")
        console.log("uo")
    }
    return(
        <React.Fragment>
        <div className='todo_style'>
        <span className='delete' onClick={cutIt} style={{cursor:"pointer"}}>@</span>
        <li style={{textDecoration:start}}>{props.text}</li>
        </div>
        </React.Fragment>
    )
}

export default Main; */