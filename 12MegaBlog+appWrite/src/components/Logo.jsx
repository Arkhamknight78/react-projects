
// This is a simple logo component that can be reused in different parts of the application.
function Logo({width= '50px'}) {
  return (
    <div>
      <img
        src="/blog_logo1.png"
// =======
// function Logo({width= '100px'}) {
//   return (
//     <div>
//       <img
//         src="https://www.svgrepo.com/show/1191/cooking.svg"
// >>>>>>> ec8816fca8f9400fe878081c8249adb5c49b70f8
        alt="Logo"
        width={width}
    />
    </div>
  )
}

export default Logo