import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container}  from 'react-bootstrap';



function subscribe() {
    return (
        <Container>
            
            <form className="fdclass">
                <h3 style={{"color":"white","margin-left": "120px"}}>Register</h3>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="FIrst Name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Contact No" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        
        </Container>
    )
};
    
export default subscribe;
