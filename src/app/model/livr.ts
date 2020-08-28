import { Llivr } from '../model/llivr';
export class Livr {
    id :number;
    annee : number;
    numero : number;
    code_client : number;
    lib_client : String;
    date_comm : any;
    libelle : String;
    totht : number;
    tottva : number;
    totttc : number;
    lcomms :Array<Llivr> =[];
    
}
