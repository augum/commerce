import{Lcommande} from '../model/lcommande';
export class Commande {
    id :number;
    annee : number;
    numero : number;
    code_client : number;
    lib_client : string;
    date : any;
    libelle : String;
    totht : number;
    tottva : number;
    totttc : number;
    modepayement:string;
    mag:string;
    lcomms :Array<Lcommande> =[];
}