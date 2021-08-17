import { useState } from "react"

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false)
  const [isDone, setIsDone] = useState(word.isDone)

  function toggleShow() {
    setIsShow(!isShow)  // isShow 가 true면 false, false면 true가 된다.
  }

  function toggleDone() {
    setIsDone(!isDone); // isShow 가 true면 false, false면 true가 된다.
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td> {/* isShow true 일때만 보인다. */}
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}