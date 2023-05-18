export default function Cards() {

    let url1 = 'https://www.intermundial.es/blog/wp-content/uploads/2019/03/requisitos-consejos-viaje-madagascar-espana.jpg';
    let url2 = 'https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/islands/madagascar-island/madagascar_d.jpg.image.648.487.high.jpg';
    let url3 = 'https://elviajerofeliz.com/wp-content/uploads/2016/12/reserva-de-anja.jpg';
    let url4 = 'https://saposyprincesas.elmundo.es/wp-content/uploads/2021/06/curiosidades-de-madagascar-playas-paradisiacas.jpg';
    let url5 = 'https://elviajerofeliz.com/wp-content/uploads/2016/12/antananarivo-madagascar.jpg';
    let url6 = 'https://cloudfront.safaribookings.com/blog/2022/06/06-Top_10_Best_Beaches_in_Madagascar-BW-1580px.jpg';

    return (
<div className="row row-cols-1 row-cols-md-3 g-4 my-3 mx-5">
    <Card src= {url1} alt= 'image 1' title= 'Trees' text = 'The wild coasts of Madagascar take in some of Africa’s most remote and beautiful beaches, which shouldn’t come as a surprise...' />
    <Card src= {url2} alt= 'image 2' title= 'Beach 1' text = 'The beach at Anakao, in Madagascar’s far southwest, seems to go on forever. There’s enough infrastructure here to make things...' />
    <Card src= {url3} alt= 'image 3' title= 'Animals' text = 'It’s impossible to choose one beach here. The peninsula is littered with all kinds of beaches for all kinds of tastes...' />
    <Card src= {url4} alt= 'image 4' title= 'Beach 2' text = 'If you want to capture the essence of southwestern Madagascar’s long, empty coastline, spend a few days at Salary...' />
    <Card src= {url5} alt= 'image 5' title= 'City' text = 'This small island off the east coast has some of the most beautiful beaches in Madagascar, perhaps even anywhere in the Indian Ocean...' />
    <Card src= {url6} alt= 'image 6' title= 'Beach 3' text = 'The beaches of Antongil Bay have the usual pristine sands, inviting waters and impressive trees (in this case, canarium...' />
  </div>
    )
  }

  function Card(props) {
    return (
    <div className="col">
      <div className="card h-100">
        <img src={props.src} className="card-img-top w-100 h-100" alt={props.src} />
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