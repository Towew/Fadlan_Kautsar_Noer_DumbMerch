import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Navigation from '../components/Navigation.jsx';
import cssModules from '../components/EditCategory.module.css'

function EditCategory() {
    return (
        <div>
            <Navigation />
            <div>
                <div className={cssModules.containerCategory}>
                    <h1>Edit Category</h1>
                    <Form.Group className={cssModules.mb3} controlId="formBasictext">
                        <Form.Control className={cssModules.category} type="text" placeholder="Mouse" />
                    </Form.Group>
                    <div className="button">
                        <Button className={cssModules.btnSave} variant="primary" type="submit">
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCategory;