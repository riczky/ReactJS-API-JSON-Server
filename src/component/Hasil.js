import React, { Component } from "react";
import { Col, ListGroup, ListGroupItem, Row, Badge } from "react-bootstrap";
import {numberWithCommas} from "../utils/utils";
import ModalKeranjang from "./ModalKeranjang";
import TotalBayar from "./TotalBayar";

export default class Hasil extends Component{
  
    constructor(props) {
      super(props)
      
   
      this.state = {
         showModal: false,
         keranjangDetail: false,
         jumlah: 0,
         keterangan: ''
         
      }
    }


    handleShow = (menuKeranjang) => {
        this.setState({
            showModal: true,
            keranjangDetail: menuKeranjang
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }
    

    render(){
        const {keranjangs} = this.props;
        // console.log('isi keranjang',keranjangs);
        return(
            <Col md={3} mt={2}>
                <h4 className="mt-2"><strong>Hasil</strong></h4>
                <hr />
                 
                 {keranjangs.length !== 0 && (
                     <ListGroup variant="flush">
                         {keranjangs.map((menuKeranjang) => (
                             <ListGroupItem key={menuKeranjang.id} onClick={() => this.handleShow(menuKeranjang)}>
                                 <Row>
                                     <Col xs={2}>
                                     <h4>
                                        <Badge pill variant="success">
                                            {menuKeranjang.jumlah}
                                        </Badge>
                                    </h4>
                                    </Col>
                                     <Col>
                                     <h5>{menuKeranjang.product.nama}</h5>
                                     <p>Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
                                     </Col>
                                     <Col>
                                     <strong className="float-rights">
                                     <p>Rp. {numberWithCommas(menuKeranjang.total_harga)}</p>
                                     </strong>
                                     </Col>
                                     
                                 </Row>
                             </ListGroupItem>
                         ))}

                        <ModalKeranjang handleClose={this.handleClose} {...this.state}/>


                        </ListGroup>
        //   </Card>
        )}

        <TotalBayar keranjangs={keranjangs} {...this.props} />
      </Col>
    );
  }
}