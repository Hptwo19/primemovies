import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './DetailsTab.css';

function DetailsTab(props) {
  const [Details,setDetails] = useState({});   
  useEffect(() => {
    if(props.match.params.type == 'tvshowDetail'){
      var url =  'http://localhost:8880/getTvShow/'+props.match.params.id;
    }else{
      var url =  'http://localhost:8880/getMovie/'+props.match.params.id;
    }
   
    fetch(url,
    {headers: { authorization: 'Basic ' + window.btoa("harshal:password") }}
)
    .then(res => res.json())
    .then(response => setDetails(response));
}, []);

    return (
      <div>
        <div className="DetailsTab">
          <img src={window.location.origin+Details.cover_path} />
          <div className='Detailsdesc'>
              <p>{Details.description}</p>
          </div>
        </div>
    </div>
    )
};
    
export default DetailsTab;