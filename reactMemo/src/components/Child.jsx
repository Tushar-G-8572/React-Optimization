import React from "react"

// Child.jsx — no longer takes `name`, since it doesn't render it
const Child = ({ changeName }) => {
  console.log("Child re-rendering....")
  return (
    <>
      <button onClick={changeName}>ChangeName</button>
      <div>Child</div>
    </>
  )
}
export default React.memo(Child)