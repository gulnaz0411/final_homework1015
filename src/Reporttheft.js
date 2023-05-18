import React, { useState,useEffect } from 'react';
import { Form, Container, Button,Row,Col}  from 'react-bootstrap';
import {useHttp} from './hooks/http.hook';


export const Reporttheft = () => {
 
  const {loading, error, request,clearError} = useHttp('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [fullName, setFullName]= useState('');
  const [bikeType,setBikeType] = useState('');
  const [bikeColor, setBikeColor] = useState('');
  const [date, setDate] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [responsibleStaff, setResponsibleStaff] = useState('');
 
  
  useEffect (() => {
    console.log('Error', error)
    
    clearError()
   }, [error,clearError])



  const handleSubmit = async (e) => {
    e.preventDefault();
  }
  
 
  const reportSubmit  = async () => {
    try {
       const data = await request ('/public/report', 'POST', {
        licenseNumber,
        fullName,
        bikeType,
        date,
        

       });
     console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  
     

 

   return (
     <Container >
       <Form  onSubmit={handleSubmit}>
         <Form.Group as={Row}  controlId="formLicenseNumber">
           <Form.Label column sm={3}>Номер лицензии</Form.Label>
           <Col >
            <Form.Control type="text" placeholder="Введите номер лицензии"
             value={licenseNumber} onChange={(event) => setLicenseNumber(event.target.value)}/>

          
           </Col>
         </Form.Group>

         <Form.Group as={Row}  controlId="formFullName">
           <Form.Label column sm={3}>ФИО</Form.Label>
           <Col>
            <Form.Control type="text" placeholder="Введите ФИО клиента"
             value={fullName} onChange={(event) => setFullName(event.target.value)}
             />

           </Col>
         </Form.Group>
         <Form.Group as={Row}  controlId="formBiketype">
           <Form.Label column sm={3}>Тип велосипеда</Form.Label>
           <Col sm={9}>
             <Form.Control
               as="select"
               value={bikeType} onChange={(event) => setBikeType(event.target.value)}
              >
                <option value="sport">Спорт</option>
                <option value="urban">Городской</option>
                <option value="track">Трековый</option>
              </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formBikeColor">
           <Form.Label column sm={3}>Цвет велосипеда</Form.Label>
           <Col sm={9}>
              <Form.Control type="text" placeholder="введите цвет" 
               value={bikeColor} onChange={(event) => setBikeColor(event.target.value)}
              />  

           </Col>
         </Form.Group>
         <Form.Group as={Row} controlId="formTheftDate">
            <Form.Label column sm={3}>Дата кражи</Form.Label>
            <Col sm={9}>
            < Form.Control type="date" value={date} 
            onChange={(event)=> setDate(event.target.value)} />
            </Col>
         </Form.Group>
         <Form.Group as={Row} controlId="formAdditionalInfo">
         <Form.Label column sm={3}>Дополнительная информация</Form.Label>
         <Col sm={9}>
            <Form.Control as="textarea" rows={3} placeholder="Дополнительная информация"
             value={additionalInfo}
             onChange={(event) => setAdditionalInfo(event.target.value)}
            />
         </Col>
         </Form.Group>
         {localStorage.getItem("isLoggedIn") === "true" && (
          <Form.Group as={Row} controlId="formResponsibleStaff">
            <Form.Label column sm={3}>Ответственный сотрудник</Form.Label>
            <Col sm={9}>
              <Form.Control as="select" value={responsibleStaff}
               onChange={(event) => setResponsibleStaff(event.target.value)}>
                <option value="">Выберите сотрудника</option>
                <option value=""></option>
                <option value=""></option>
               
              </Form.Control>
            </Col>

          </Form.Group>
         )}
     
      <Button  onClick={reportSubmit}  variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
     </Container>

    );
         };
