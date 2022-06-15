

export default function button({title,color,myFuntion}) {
    
  return (
    <>
    <button onClick={myFuntion} className={color}>
        {title}
    </button>
    </>
  )
}

