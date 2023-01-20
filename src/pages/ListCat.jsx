import React, { useEffect, useState } from 'react';
import Navbarre from '../components/Navbar';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ListCat = () =>{
   
    const [nomCat, setNomCat] = useState('');
    var tok = localStorage.getItem("token");
    const [error,setError] = useState("");
    const [succes,setSucces] = useState("");
    var json;
    if(tok == null){
        tok = "";
    }
    const insert = async() =>{
        setError("");
        setSucces("");
        await fetch(`http://localhost:8082/categories`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'token': `${tok}`
              },
            body: JSON.stringify({nomCat: `${nomCat}`})
        })
        .then(response => response.json())
        .then(res => {
            json = res.success;
            if(json == null){
                setError(res.error);
            }
            else{
                window.location.reload();
            }
        });
    };
    const [list, setList] = useState([]);
    const [loading , setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8082/categories`,{
            method : 'GET',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'token': `${tok}`
              }
        })
        .then(data => data.json())
        .then(
            res =>{
                setList(res.data);
                setLoading(false);
            }
        )
    },[]);

    if (loading){
        return <div><Navbarre/>
        <p>loading...</p></div>;
    }
    const groupList = list.map(group => {
        return <tr>
                <td>{group.id}</td>
                <td>{group.nomCat}</td>
                <td><a href={"/modifCat/"+group.id}><button className='btn btn-success'>Modifier</button></a></td>
            </tr>
    }
    );
    return (
        <div>
            <Navbarre/>
            <Container>
            <Row>
                    <Table striped style={{marginTop:"70px"}}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Categorie</th>   
                        <th></th>   
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                        </td>
                        <td><input type="text" value={nomCat} onChange={(e) => setNomCat(e.target.value)}/></td>
                        <td><button className='btn btn-primary' onClick={insert}>Ajouter</button></td>
                    </tr> 
                    {groupList}
                   
                    </tbody>
                </Table>
                </Row>
            </Container>
            
            
        </div>
        
    );

};
export default ListCat;
