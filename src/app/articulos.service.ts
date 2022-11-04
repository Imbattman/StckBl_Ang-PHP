import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
url= 'https://battman-sql.000webhostapp.com/';

  constructor(private http: HttpClient) { }
  recuperarTodos() {
    //console.log (this.http.get(`${this.url}recuperartodos.php`));
    
    // return this.http.get(`${this.url}recuperartodos.php`);
    return this.http.get('https://battman-sql.000webhostapp.com/recuperartodos.php');
    //return this.http.get('https://battman-sql.000webhostapp.com/Get_Meses.php');
  }
  recuperarMeses() {
    return this.http.get(`${this.url}Get_Meses.php`);
  }
  recuperarSucus() {
    return this.http.get(`${this.url}Get_Sucus.php`);
  }
  recuperarClientes() {
    return this.http.get(`${this.url}Get_Clientes.php`);
  }
  recuperarVentas() {
    return this.http.get(`${this.url}Get_Ventas.php`);
  }
  alta(articulo: { codigo: any ; descripcion: any; precio: any; }) {
 // alert (`${this.url}alta.php`);
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo))/*.subscribe(data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {
      
      console.log("Error", error);
      
      }
      
      );    */
    }
  

  baja(codigo:number) {
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  }
  
  seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  modificacion(articulo: { codigo: null; descripcion: null; precio: null; }) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));    
  } 
}
