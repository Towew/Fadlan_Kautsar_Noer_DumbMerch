import React from 'react';
import { Table } from 'react-bootstrap';
import cssModule from '../components/ListProduct.module.css'
import Navigation from '../components/Navigation';
import DeleteButton from '../components/DeleteButton';
import { useNavigate } from 'react-router-dom';

function ListProduct() {

    const navigate = useNavigate();

    const handleNavigateToEditProduct = () => {
        navigate("/edit-product");
    };

    return (
        <div className={cssModule.ProductC}>
            <Navigation />
            <div className={cssModule.container}>
                <div className={cssModule.mainContainer}>
                    <h4>List Category</h4>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Photo</th>
                                <th>Product Name</th>
                                <th>Product Desc</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mouse.jpg</td>
                                <td>Mouse</td>
                                <td>Lorem ipsum mouse ...</td>
                                <td>500.000</td>
                                <td>600</td>
                                <td className={cssModule.btnGroup}>
                                    <div>
                                        <button onClick={handleNavigateToEditProduct} className={cssModule.btnEdit}>Edit</button>
                                    </div>
                                    <div>
                                        <DeleteButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Keyboard.jpg</td>
                                <td>Keyboard</td>
                                <td>Lorem ipsum keyboard ...</td>
                                <td>700.000</td>
                                <td>600</td>
                                <td className={cssModule.btnGroup}>
                                    <div>
                                        <button onClick={handleNavigateToEditProduct} className={cssModule.btnEdit}>Edit</button>
                                    </div>
                                    <div>
                                        <DeleteButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Bag.jpg</td>
                                <td>Bag</td>
                                <td>Lorem ipsum bag ...</td>
                                <td>300.000</td>
                                <td>600</td>
                                <td className={cssModule.btnGroup}>
                                    <div>
                                        <button onClick={handleNavigateToEditProduct} className={cssModule.btnEdit}>Edit</button>
                                    </div>
                                    <div>
                                        <DeleteButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Stationary.jpg</td>
                                <td>Stationary</td>
                                <td>Lorem ipsum stationary ...</td>
                                <td>25.000</td>
                                <td>600</td>
                                <td className={cssModule.btnGroup}>
                                    <div>
                                        <button onClick={handleNavigateToEditProduct} className={cssModule.btnEdit}>Edit</button>
                                    </div>
                                    <div>
                                        <DeleteButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Doll.jpg</td>
                                <td>Doll</td>
                                <td>Lorem ipsum doll ...</td>
                                <td>125.000</td>
                                <td>600</td>
                                <td className={cssModule.btnGroup}>
                                    <div>
                                        <button onClick={handleNavigateToEditProduct} className={cssModule.btnEdit}>Edit</button>
                                    </div>
                                    <div>
                                        <DeleteButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Pillow.jpg</td>
                                <td>Pillow</td>
                                <td>Lorem ipsum pillow ...</td>
                                <td>300.000</td>
                                <td>600</td>
                                <td className={cssModule.btnGroup}>
                                    <div>
                                        <button onClick={handleNavigateToEditProduct} className={cssModule.btnEdit}>Edit</button>
                                    </div>
                                    <div>
                                        <DeleteButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                </div>
            </div>
        </div>
    )
}

export default ListProduct;