import React from 'react';
import {browserHistory} from 'react-router';

//Components
import GalleryImage from "../inspiration/GalleryImage.jsx";
import LikeList from './LikeList.jsx';
import {Grid, Row, Col, Image} from 'react-bootstrap';

//Stylesheets
import "../../../css/inspiration.scss";
import "../../../css/detail.scss";

class Detail extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         product: ''
      };
   }

   componentDidMount() {
      console.log("Did mount");
      fetch('http://localhost:5000/products/' + this.props.routeParams.productId).then((res) => {
         return res.json();
      }).then((json) => {
         this.setState({product: json.product});
         console.log("State: " + this.state.product);
      });
   }

   onClickBack() {
      browserHistory.push('/inspiration');
   }

   render() {
      if (this.state.product.likes === undefined) {
         return null;
      }
      return (
         <div className="detail-container">

            <Row>
               <Col lg={12}>
                  <div className="top-row">
                     <div className="back-container horizontal-container" onClick={this.onClickBack}>
                        <i className="material-icons icon">arrow_back</i>
                        <p>Alla produkter</p>
                     </div>

                     <div className="edit-btn horizontal-container">
                        <i className="material-icons">edit</i>
                     </div>
                  </div>
               </Col>
            </Row>

            <Row>
               <Grid>
                  <Col md={5} xs={12}>
                     <GalleryImage likes={this.state.product.likes}
                        elevation={0}
                        enableLift={false}
                        isDetail={true}
                        name={this.state.product.name}
                        provider={this.state.product.supplier}
                        p_id={this.state.product.id}
                        src={this.state.product.image}
                        alt={this.state.product.name}/>
                  </Col>


                  <Col md={7} xs={12}>
                     <div className="detail-info-description">
                        <h3 className="hidden-lg hidden-md">Beskrivning</h3>
                        <h1 className="hidden-sm hidden-xs">{this.state.product.name}</h1>
                        <h3 className="hidden-sm hidden-xs">Beskrivning</h3>
                        <p>{this.state.product.description}</p>
                     </div>
                  </Col>
                  </Grid>

                  <Grid className="supplier-info-container">
                  <Col md={12} sm={12} xs={12} className="supplier-info">
                     <h3>Producent</h3>

                     <div>
                        <span className="horizontal-container title-container">
                           <i className="material-icons icon">local_shipping</i>
                           <h6>LEVERANTÖR</h6>
                        </span>
                        <p>{this.state.product.supplier}</p>
                     </div>

                     <div>
                        <span className="horizontal-container title-container">
                           <i className="material-icons icon">explore</i>
                           <h6>WEBBPLATS</h6>
                        </span>
                        <p>{this.state.product.webpage}</p>
                     </div>
                  </Col>
               </Grid>
            </Row>
            <LikeList likes={this.state.product.likes}/>

            {/*<div className="detail-info-container">


            </div>*/}
         </div>
      );
   };
}

export default Detail;
