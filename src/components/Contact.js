import React from 'react'

const Contact = () => {
    return (
        <div className="container mx-auto mt-2">
            <div className="shadow mx-auto col-md-8 rounded">
            <div className="container py-4">
            <h1 style={{fontFamily:"sans-serif"}} className="h1contact text-center display-6">Get In Touch</h1>
  <div class="mb-3 mx-auto">
    <input style={{fontFamily:"sans-serif"}} type="text" placeholder="Name" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div class="mb-3">
    <input style={{fontFamily:"sans-serif"}} type="email"  placeholder="email"className="form-control  text-center" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div class="mb-3">
    <input  style={{fontFamily:"sans-serif"}} type="text-area" placeholder="your message" className="form-control text-center " id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="btndiv text-center">
  <button type="submit" className="btn ">Submit</button></div>
  </div>
</div>
        </div>
    )
}

export default Contact
