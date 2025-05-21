import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { GoPlus } from "react-icons/go";
import Home from "../Home/Home";

const AddCard = () => {
  const [show, setShow] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardSumma, setCardSumma] = useState("");
  const [cardList, setCardList] = useState([]); // <-- Kartalar massivini saqlash

  const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
  const handleShow = () => {
    if(cardList.length>0){
        setShow(false)
        alert("siz bittadan ko'p karta qo'sha olmaysiz")
    }
    else{
        setShow(true)
    }
  };

   const addCardToHome = (newCard) => {
    setCardList((prevList) => [...prevList, newCard]);
  };
  


  const handleCardNumberChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    input = input.substring(0, 16);
    const formatted = input.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(formatted);
  };

  const handleCardSummaChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    input = input.substring(0, 12);
    const formatted = input.replace(/(.{3})/g, "$1 ").trim();
    setCardSumma(formatted);
  };

  const handleSave = () => {
    if (cardNumber.length === 19 && cardSumma.length > 0) {
      const newCard = {
        number: cardNumber,
        balance: cardSumma,
      };

      
      setCardList([...cardList, newCard]); // yangi kartani massivga qo‘shish
      setCardNumber(""); // inputlarni tozalash
      setCardSumma("");
      handleClose(); // modalni yopish

      console.log("Yangi karta qo‘shildi:", newCard);
      console.log("Barcha kartalar:", [...cardList, newCard]);
    } else {
      alert("Iltimos, to‘liq karta raqami va balans kiriting.");
    }
  };

  return (
    <div className="addCard">

        <div className="cardList">
            <h3>Mening kartalarim</h3>
            {
                cardList.map((card, index) => (
                    <div key={index} className="cardListItem">
                        
                        <h4>{card.balance} so'm</h4>
                        <h4> {card.number}</h4>
                    </div>

                ))
            }
        </div>

      <div className="inModal">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Karta qo‘shish</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="cardNumberInput">
                <Form.Label>Karta raqamini kiriting</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  maxLength={19}
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="cardBalanceInput">
                <Form.Label>Balansni kiriting</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="000 000 000"
                  value={cardSumma}
                  onChange={handleCardSummaChange}
                  maxLength={11}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Plus tugmasi */}
      <div onClick={handleShow} className="plusCard">
        <GoPlus />
      </div>
    </div>
  );
};

export default AddCard;
