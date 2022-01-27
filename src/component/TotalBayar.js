import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import {API_URL} from '../utils/constants';
export default class TotalBayar extends Component {

    submitTotalBayar = (totalBayar) => {
        const pesanan = {
            total_bayar: totalBayar,
            menus: this.props.keranjangs
        }

        axios.post(API_URL+"pesanans", pesanan).then((res) => {
            this.props.history.push('/sukses');
        })
    };

    render() {

    const totalBayar = this.props.keranjangs.reduce(function(result, item){
        return result + item.total_harga;
    }, 0);

    return (
        <div className="fixed-bottom">
            <Row>
                <Col md={{ span:3, offset:9 }} classname="px-4">
                    <h5>Total Harga: <strong className="float-right mr-2">Rp. {numberWithCommas(totalBayar)}</strong></h5>
                    <Button variant="primary" block className="mb-2 mt-2 mr-2 float-right" size="lg" onClick={() => this.submitTotalBayar(totalBayar)}>
                        <FontAwesomeIcon icon={faShoppingCart }/>  
                        <strong>  Bayar Transaksi</strong> 
                    </Button>
                </Col>
            </Row>
        </div>    
        )
  }
}
