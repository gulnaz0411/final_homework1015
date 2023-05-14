import React, { useState,} from 'react';
import { Form, Container, Button,Row,Col}  from 'react-bootstrap';


export const Reporttheft = () => {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [fullName, setFullName]= useState('');
  const [bikeType,setBikeType] = useState('');
  const [bikeColor, setBikeColor] = useState('');
  const [date, setDate] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [responsibleStaff, setResponsibleStaff] = useState('');
  const [report, SetReports] = useState ('');
  



  const handleSubmit = async (event) => {
    event.preventDefault();
    const report = {
      licenseNumber,
      fullName,
      bikeType,
      bikeColor,
      date,
      additionalInfo,
      responsibleStaff,
    };
     


    setLicenseNumber('');
    setFullName('');
    setBikeType([]);
    setBikeColor('');
    setDate('');
    setAdditionalInfo('');
    setResponsibleStaff('');

    try {
      const response = await fetch('/api/cases', {
        method: 'POST',
        headers: {
          'Context-type': 'application/json'
        },
        body: JSON.stringify({report, SetReports})

      });

      if (response.ok) {
          SetReports ('');
          alert('Сообщение отправлено');

      } else {
        throw new Error ('Не удалось отправить сообщение');

      }
    }  catch (error) {
      console.error(error);
      alert(error.report)
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
             value={fullName} onChange={(event) => setFullName(event.target.ariaValueMin)}
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
     
      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
     </Container>
);
         };