export default function Card(props) {
    return (
    <div className="col">
      <div className="card h-100">
        <img src={props.src} className="card-img-top w-100 h-100 object-fit-cover" alt={props.alt} />
        <div className="card-body">
          <h5 className="card-title"> {props.title} </h5>
          <p className="card-text w-100 h-100"> {props.text} </p>
        </div>
        <div className="card-footer">
        <a href="#" className="btn btn-primary">More information</a>
        </div>
      </div>
    </div>
)
  }