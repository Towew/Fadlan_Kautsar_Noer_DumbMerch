import React from 'react';
import { Table } from 'react-bootstrap';
import cssModule from '../components/ListCategory.module.css'
import Navigation from '../components/Navigation.jsx'
import DeleteButton from '../components/DeleteButton';
import { useNavigate } from 'react-router-dom';

function ListCategory() {
    const navigate = useNavigate();

    const handleNavigateToEditCategory = () => {
        navigate("/edit-category");
    };
    return (
        <div className={cssModule.CategoryC}>
            <Navigation />
            <div className={cssModule.container}>
                <div className={cssModule.mainContainer}>
                    <h4>List Category</h4>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Category Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mouse</td>
                                <td className={cssModule.btnGroup}>
                                    <div>
                                        <button onClick={handleNavigateToEditCategory} className={cssModule.btnEdit}>Edit</button>
                                    </div>
                                    <div>
                                        <DeleteButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Keyboard</td>
                                <td className={cssModule.btnGroup}>
                                    <div>
                                        <button onClick={handleNavigateToEditCategory} className={cssModule.btnEdit}>Edit</button>
                                    </div>
                                    <div>
                                        <DeleteButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Bag</td>
                                <td className={cssModule.btnGroup}>
                                    <div>
                                        <button onClick={handleNavigateToEditCategory} className={cssModule.btnEdit}>Edit</button>
                                    </div>
                                    <div>
                                        <DeleteButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Stationary</td>
                                <td className={cssModule.btnGroup}>
                                    <div>
                                        <button onClick={handleNavigateToEditCategory} className={cssModule.btnEdit}>Edit</button>
                                    </div>
                                    <div>
                                        <DeleteButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Doll</td>
                                <td className={cssModule.btnGroup}>
                                    <div>
                                        <button onClick={handleNavigateToEditCategory} className={cssModule.btnEdit}>Edit</button>
                                    </div>
                                    <div>
                                        <DeleteButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Pillow</td>
                                <td className={cssModule.btnGroup}>
                                    <div>
                                        <button onClick={handleNavigateToEditCategory} className={cssModule.btnEdit}>Edit</button>
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

export default ListCategory;