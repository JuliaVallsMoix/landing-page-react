export default function Jumbotron() {
    return (
      <div className="p-5 bg-body-tertiary rounded-3" style={{ backgroundImage: "url('https://www.jenmansafaris.com/wp-content/uploads/2016/01/004829-03-cltmb-beach10.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <div className="container-fluid py-5 text-end g-5" >
          <h1 className="display-5 fw-bold text-light mb-5">Thinking about traveling to Madagascar, Africa?</h1>
          <p className="col-md fs-4 text-light mb-5"><i>Then, this is your place. Here, you can take a look to the best places that you can visit there if you finally take the amazing decision of having the best days of your life in Madagascar, a dream place where everyone can be finally happy.</i></p>
          <button className="btn btn-dark btn-lg" type="button">Find more about</button>
        </div>
      </div>
    )
  }