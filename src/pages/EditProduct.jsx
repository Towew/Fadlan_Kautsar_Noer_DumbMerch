import React from 'react'
import { Form, Button } from 'react-bootstrap';
import Navigation from '../components/Navigation.jsx';
import cssModule from '../components/EditProduct.module.css';

function EditProduct() {
    return (
        <div>
            <Navigation />
            <div>
                <div className={cssModule.containerProduct}>
                    <h1>Edit Product</h1>
                    <div className={cssModule.labelTop}>
                        <Button className={cssModule.btnUpload} variant="primary" type="submit">Upload Image</Button> <span>Mouse.jpg</span>
                    </div>
                    <Form.Group className={cssModule.fg} controlId="formBasictext">
                        <Form.Control className={cssModule.category} type="text" placeholder="Mouse" />
                    </Form.Group>
                    <Form.Group className={cssModule.fg} controlId="exampleForm.ControlTextarea1">
                        <Form.Control className={cssModule.textarea} as="textarea" rows={3} placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum corrupti ratione necessitatibus iste ipsa, fuga animi, dicta commodi nulla consequatur voluptas, eligendi et dignissimos? Perspiciatis quas dolor quisquam est sint? Laborum corrupti ratione necessitatibus iste ipsa, fuga animi, dicta commodi nulla consequatur voluptas, eligendi et dignissimos? Perspiciatis quas dolor quisquam est sint?Laborum corrupti ratione necessitatibus iste ipsa, fuga animi, dicta commodi nulla consequatur voluptas, eligendi et dignissimos? Perspiciatis quas dolor quisquam est sint?" />
                    </Form.Group>
                    <Form.Group className={cssModule.fg} controlId="formBasictext">
                        <Form.Control className={cssModule.category} type="text" placeholder="500.000" />
                    </Form.Group>
                    <Form.Group className={cssModule.fg} controlId="formBasictext">
                        <Form.Control className={cssModule.category} type="text" placeholder="600" />
                    </Form.Group>
                    <div className={cssModule.button}>
                        <Button className={cssModule.btnSave} variant="primary" type="submit">
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct;