function Btn ({color,setColor}){
      return (
        <>
          <button
            onClick={() =>{ console.log('clicked',color);
            
                  setColor(color)}}
            className="rounded-xl w-25 h-8 border-3 m-2 my-20"
            style={{ backgroundColor: color }}
          >
          
            {color}
          </button>
        </>
      );
}
export default Btn