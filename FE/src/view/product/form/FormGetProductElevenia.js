import React, { useState, useContext } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { observer } from "mobx-react";
import { ButtonComponent } from "../../../reusableComponents/Widgets";
import Swal from "../../../reusableComponents/notification/Swal";

import ProductStore from '../../../store/ProductStore'
const FormGetProductElevenia = observer(() => {
  const { getProductFromElevenia } = useContext(ProductStore)
  const [prdNo, setPrdNo] = useState("")

  const _getProductFromEleveniaHandler = async () => {
    const triggerGetPrdEleven = await getProductFromElevenia(prdNo)

    if (triggerGetPrdEleven.status >= 200 && triggerGetPrdEleven.status <= 202)
      Swal.success("Produk Berhasil Ditambahkan")
    else
      Swal.failed("Produk Tidak Ditemukan")
  }

  return (
    <div class="col-md-12">
      <Form style={{ marginTop: '20px' }}>
        <Row>
          <Col sm={10}>
            <Form.Control onChange={(e) => setPrdNo(e.target.value)} placeholder="Masukkan Nomor Produk" />
          </Col>
          <Col>
            <ButtonComponent
              color="primary"
              text="Tambah Produk"
              onClick={_getProductFromEleveniaHandler}
            />
          </Col>
        </Row>
      </Form>
    </div>
  )
})


export default FormGetProductElevenia