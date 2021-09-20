import React, { useState } from 'react';
import DISHES from '../../data/dishes.js';
import MenuItem from './MenuItem';
import DishDetails from './DishDetails';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

const Menus = () => {

    document.title = 'Menus';

    const [dishes, setDishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const onDishSelect = dish => {
        setSelectedDish(dish);
        setModalOpen(true);
    }

    const toggleModal = () => {
        setModalOpen(false);
        //console.log(modalOpen)
    }


    let dishDetail = null;
    if (selectedDish != null) {
        dishDetail = <DishDetails dish={selectedDish} />
    }

    return (
        <div className="container">
            <div className="row">

                {
                    dishes.map(item => <MenuItem dish={item} key={item.id} DishSelect={() => onDishSelect(item)}></MenuItem>)
                }

                <Modal isOpen={modalOpen} onClick={toggleModal}>
                    <ModalBody>
                        {dishDetail}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggleModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
};

export default Menus;