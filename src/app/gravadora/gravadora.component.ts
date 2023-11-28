import { Component, OnInit } from '@angular/core';
import { GravadoraService } from './gravadora.service';
import { Gravadora } from '../models/gravadoraModel';

@Component({
  selector: 'app-gravadora',
  templateUrl: './gravadora.component.html',
  styleUrls: ['./gravadora.component.scss'],
})
export class GravadoraComponent  implements OnInit {
  gravadoras: Gravadora[] = [];
  novaGravadora: Gravadora = new Gravadora(0, '', '', new Date, ''); 
  tipos: string[] = ['Gravadora', 'Label', 'Virtual', 'Outro'];
  tipoSelecionado: string = '';
  adicionandoGravadora: boolean = false;
  
  gravadoraParaEditar:Gravadora = new Gravadora(0, '', '', new Date, '');
  mostrarFormularioEdicao: boolean = false;

  mostrarFormulario: boolean = false;

  constructor(private gravadoraService: GravadoraService) {}


  ngOnInit(): void {
    this.carregarGravadoras();
  }

  carregarGravadoras(): void {
    this.gravadoraService.getGravadoras().subscribe(
      (data: Gravadora[]) => {
        this.gravadoras = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  toggleForm(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  adicionarGravadora(): void {
    this.gravadoraService.criarGravadora(this.novaGravadora).subscribe(
      (data: Gravadora) => {
        console.log('Gravadora criada:', data);
        this.novaGravadora = new Gravadora(0, '', '', new Date(), ''); 
        this.carregarGravadoras();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  editarGravadora(gravadora: any): void {
    this.gravadoraParaEditar = { ...gravadora }; 
    this.mostrarFormularioEdicao = true; 
  }

  salvarEdicao(): void {
    this.gravadoraService.atualizarGravadora(this.gravadoraParaEditar).subscribe(() =>{
        this.novaGravadora = new Gravadora(0, '', '', new Date(), '')
        this.carregarGravadoras();
    });
    this.mostrarFormularioEdicao = false;
  }
  cancelarEdicao(): void {
    this.mostrarFormularioEdicao = false; 
  }

  deletarGravadora(id: number): void {
    this.gravadoraService.deletarGravadora(id).subscribe(
      () => {
        console.log('Gravadora deletada com sucesso');
        this.carregarGravadoras(); 
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


}
