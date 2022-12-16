import DropZone from "./DropZone.js";
import KanbanAPI from "../api/KanbanAPI.js";
import { response } from "express";

let parametroURL = new URLSearchParams(window.location.search)
let servico_id = parametroURL.get('servico_id')

console.log(servico_id);

fetch('/candidaturasServicoId?servico_id=' + servico_id)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        candidaturas = data;
        candidaturas.map(function (candidaturas) {
            fetch('/usuarioId?usuario_id=' + candidaturas.usuario_id)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    usuario = data;
                    usuario.map(function (usuario) {
                        KanbanAPI.insertItem(0, usuario.nomeFantasia, candidaturas.proposta, usuario.contato1)
                        
                    })
                })
            })
    })
    KanbanAPI.getItems(id).forEach(item => {
        this.renderItem(item);
    });   

export default class Item {
    constructor(id, nome, proposta, num) {
        const bottomDropZone = DropZone.createDropZone();

        this.elements = {};
        this.elements.root = Item.createRoot();
        this.elements.input = this.elements.root.querySelector(".kanban__item-input");

        this.elements.root.dataset.id = id;
        this.elements.root.dataset.nome = nome;
        this.elements.root.dataset.proposta = proposta;
        this.elements.root.dataset.num = num;
        this.elements.input.textContent = content;
        this.content = content;
        this.elements.root.appendChild(bottomDropZone);

        const onBlur = () => {
            const newContent = this.elements.input.textContent.trim();

            if (newContent == this.content) {
                return;
            }

            this.content = newContent;

            KanbanAPI.updateItem(id, {
                content: this.content
            });
        };

        this.elements.input.addEventListener("blur", onBlur);
        this.elements.root.addEventListener("dblclick", () => {
            const check = confirm("Are you sure you want to delete this item?");


            //logica de cria é aqui de puxar nome e proposta para o servico


            if (check) {
                KanbanAPI.deleteItem(id);

                this.elements.input.removeEventListener("blur", onBlur);
                this.elements.root.parentElement.removeChild(this.elements.root);
            }
        });

        this.elements.root.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", id);
        });

        this.elements.input.addEventListener("drop", e => {
            e.preventDefault();
        });
    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
			<div class="kanban__item" draggable="true">
				<div class="kanban__item-input" contenteditable></div>
			</div>
		`).children[0];
    }

}

