import React, { useState } from 'react';
import MenuItem from './MenuItem';
import DishDetails from './DishDetails';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}


const Menu = (props) => {
    document.title = 'Menu';

    const [selectedDish, setSelectedDish] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const onDishSelect = dish => {
        //console.log(dish)
        setSelectedDish(dish);
        setModalOpen(true);
    }

    const toggleModal = () => {
        setModalOpen(false);
        //console.log(modalOpen)
    }


    let dishDetail = null;
    if (selectedDish != null) {
        //console.log(props.comments)
        const comments = props.comments.filter(comment => comment.dishId === selectedDish.id)
        dishDetail = <DishDetails dish={selectedDish} comments={comments} />
    }

    return (
        <div className="container">
            <div className="row">

                {
                    props.dishes.map(item => <MenuItem dish={item} key={item.id} DishSelect={() => onDishSelect(item)}></MenuItem>)
                }

                <Modal isOpen={modalOpen}>
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

export default connect(mapStateToProps)(Menu);