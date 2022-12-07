import '../App.css'

function Form(props) {
    return(
      <div className="form">
        <span>제목</span>
        {/* input value에 입력한 값(=title)을 넣고 setTitle을 이용해서 value를 비워준다!*/}
        <input name='title' value={props.title} onChange={props.addHandler}/>
        <span>내용</span>
        <input name='content' value={props.content} onChange={props.addHandler}/>
        <button className="plusBtn" onClick={props.addContent}>추가하기</button>
      </div>
    );
};

export default Form;