import * as uniqid from "uniqid";
export class Tarefa {

    feita: boolean;
    texto: string;
    prioridade: Prioridade;
    id:string;

    constructor(texto: string, prioridade: Prioridade) {

        this.texto = texto;
        this.prioridade = prioridade;
        this.feita = false;
        this.id = uniqid()
    }

    imprimir(): void {
        console.log(`[${this.feita ? "X" : " "}] ${this.texto} [ ${this.prioridade} ]`);
    }

    toRow(): HTMLTableRowElement {
        let tr = document.createElement("tr");
        tr.setAttribute("id", this.id);
        tr.className = this.feita ? "done" : "";

        tr.innerHTML = `
            <td><input type="checkbox"></td>
            <td>${this.texto}</td>
            <td><i class="material-icons">delete</i></td>    
        `;

        // Marcando/Desmarcando uma tarefa como feita.
        let checkbox = tr.querySelector("input");
        checkbox.addEventListener("click",()=>{
            this.feita = checkbox.checked;
            tr.className = this.feita ? "done" : "";
        });

        return tr;
    }
}

export enum Prioridade {
    Baixa = 1,
    Media = 2,
    Alta = 3
}
