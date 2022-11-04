import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'AngPHP';
  articulos : any=[];
  datos :any=[];
  meses : any=[];
  sucursales : any=[];
  clientes : any=[];
  ventas : any=[];
  art = {
    codigo: null,
    descripcion: null,
    precio: null

  };
  mes = {
    Nro:null,
    Mes: null,
    CDias: null
  };
kk:number =10;
  
  
  
  constructor(private articulosServicio: ArticulosService) {}

  ngOnInit() {
    this.recuperarTodos();
    this.recuperarClientes();
    this.recuperarMeses();
    this.recuperarSucus();
    this.recuperarVentas();

  this.kk = this.articulos.length;
}

  recuperarTodos(): void {
    this.articulosServicio.recuperarTodos().subscribe(pirulo => {this.articulos = (pirulo);
    //alert (JSON.stringify(this.articulos));
    })

  }
  recuperarMeses(): void {
    this.articulosServicio.recuperarMeses().subscribe(ppp => {this.meses = (ppp);
     //alert (JSON.stringify(this.meses));
  })

  }
  recuperarSucus(): void {
    this.articulosServicio.recuperarSucus().subscribe(ss => {this.sucursales = (ss);
    //alert (JSON.stringify(this.sucursales));
  })
  }  
  recuperarVentas(): void {
   this.articulosServicio.recuperarVentas().subscribe(ppp => {this.ventas = (ppp);
  //alert (JSON.stringify(this.ventas[1]));
  })

  }
  recuperarClientes(): void {
  this.articulosServicio.recuperarClientes().subscribe(ppp => {this.clientes = (ppp);
  //  alert (JSON.stringify(this.clientes));
})
  }
  
  
  alta(): void {
    this.articulosServicio.alta(this.art).subscribe(data  => {this.datos = data;

   if (this.datos['resultado'] =='OK') {
       alert(this.datos['mensaje']);
        this.recuperarTodos();
      }
      else alert("Error de Grabación")
     })
  }

  
  

  baja(codigo: any) {
    this.articulosServicio.baja(codigo).subscribe(data => {this.datos = data;
      if (this.datos['resultado']=='OK') {
        alert(this.datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }
  

  modificacion() {
    

    this.articulosServicio.modificacion(this.art).subscribe(data => {this.datos = data;
      if (this.datos['resultado']=='OK') {
        alert(this.datos['mensaje']);
        this.recuperarTodos();
        
      }
    })
  }
  seleccionar(codigo: any) {
    this.articulosServicio.seleccionar(codigo).subscribe(data => {
      this.datos = data;
     this.datos = JSON.parse(JSON.stringify(this.datos[0]));
     this.art.codigo= this.datos['codigo'];
      this.art.descripcion = this.datos['descripcion'];
      this.art.precio = this.datos['precio'];
     
     //this.artpr= JSON.parse(this.datos)
     // alert (this.datos['codigo'] +"\n"+ this.datos[1] +"\n"+this.datos[2] );
     //alert (">>" + this.artpr.descripcion + "\n"+this.artpr.precio); 
        
      })//   this.art = result['0']);
  
    }


  hayRegistros(): boolean {
    return true;
  } 

}
//}